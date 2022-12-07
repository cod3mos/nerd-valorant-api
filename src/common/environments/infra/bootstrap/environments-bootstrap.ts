import { Bootstrap } from 'ts-node-backend'
import { container } from 'tsyringe'
import { EnvironmentsServiceImpl } from '../../application/environments-service'
import { EnvironmentsTypeEnum } from '../../domain/environments-type-enum'
import { EnvironmentsDotEnvRepository } from '../dotenv/environments-dotenv-repository'
import { EnvironmentsRepositoryTest } from '../test/environments-repository-test'

export class EnvironmentsBootstrap implements Bootstrap {
  async handler (): Promise<void> {
    container.register(EnvironmentsTypeEnum.SERVICE, EnvironmentsServiceImpl)

    switch (process.env.NODE_ENV) {
      case 'test':
        container.register(EnvironmentsTypeEnum.REPOSITORY, EnvironmentsRepositoryTest)
        break
      default:
        container.register(EnvironmentsTypeEnum.REPOSITORY, EnvironmentsDotEnvRepository)
    }
  }
}
