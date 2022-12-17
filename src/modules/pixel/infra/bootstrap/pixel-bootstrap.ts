import { Bootstrap } from 'ts-node-backend'
import { container } from 'tsyringe'
import { PixelServiceImpl } from '../../application/pixel-service'
import { PixelTypeEnum } from '../../domain/pixel-type-enum'
import { PixelDatabaseRepositoryTest } from '../test/pixel-database-repository-test'

export class PixelBootstrap implements Bootstrap {
  async handler (): Promise<void> {
    container.register(PixelTypeEnum.SERVICE, PixelServiceImpl)

    switch (process.env.NODE_ENV) {
      case 'test':
        container.register(PixelTypeEnum.REPOSITORY, PixelDatabaseRepositoryTest)
        break
      default:
        // TODO: change this when database is added.
        container.register(PixelTypeEnum.REPOSITORY, PixelDatabaseRepositoryTest)
    }
  }
}
