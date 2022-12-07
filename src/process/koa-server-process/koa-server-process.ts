import Koa, { ParameterizedContext } from 'koa'
import koaBody from 'koa-body'
import parameter from 'koa-parameter'
import Router, { RouterContext } from 'koa-router'
import { Application, Process } from 'ts-node-backend'
import { getEnvironmentsService } from '../../common/environments/domain/helpers'
import { KoaParameterContext } from '../../common/koa'
import { KoaParameterValidationException } from '../../common/koa/KoaParameterValidationException'
import { Middleware, Route, RouteGroup } from '../../common/protocols'

export class KoaServerProcess implements Process {
  private readonly middlewareGroup: Array<Middleware<ParameterizedContext>> = []
  private readonly routes: Array<Route<RouterContext>> = []

  static create (): KoaServerProcess {
    return new KoaServerProcess()
  }

  addMiddleware (middleware: Middleware<ParameterizedContext>): KoaServerProcess {
    this.middlewareGroup.push(middleware)
    return this
  }

  addRouteGroup (group: RouteGroup<RouterContext>): KoaServerProcess {
    this.addRoutes(group.getRoutes())
    return this
  }

  addRoutes (routes: Array<Route<RouterContext>>): KoaServerProcess {
    for (const route of routes) {
      this.addRoute(route)
    }
    return this
  }

  addRoute (route: Route<RouterContext>): KoaServerProcess {
    this.routes.push(route)
    return this
  }

  async execute (app: Application): Promise<void> {
    const process = await getEnvironmentsService().getEnv()

    const server = new Koa()
    const router = new Router()
    const port = process.getEnv().PORT

    server.use(koaBody())

    parameter(server)

    for (const middleware of this.middlewareGroup) {
      server.use(middleware.handle.bind(middleware))
    }

    for (const route of this.routes) {
      router[route.getMethod()](route.getUrl(), async (context: any, next: any) => {
        try {
          await route.getValidator()?.validate(context as KoaParameterContext)
        } catch (error) {
          throw new KoaParameterValidationException(error)
        }

        await route.handle(context, next)
      })
    }

    server.use(router.routes())

    server.listen(port, () => {
      console.log(`Listening to requests on http://localhost:${port}`)
    })
  }
}
