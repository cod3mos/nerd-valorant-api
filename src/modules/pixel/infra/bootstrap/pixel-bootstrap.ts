import { Bootstrap } from 'ts-node-backend'
import { container } from 'tsyringe'
import { PixelServiceImpl } from '../../application/pixel-service'
import { PixelTypeEnum } from '../../domain/pixel-type-enum'
import { PixelRepositoryMongoDb } from '../database/pixel-repository-mongo-db'
import { PixelRepositoryTest } from '../test/pixel-repository-test'

export class PixelBootstrap implements Bootstrap {
  async handler (): Promise<void> {
    container.register(PixelTypeEnum.SERVICE, PixelServiceImpl)

    switch (process.env.NODE_ENV) {
      case 'test':
        container.register(PixelTypeEnum.REPOSITORY, PixelRepositoryTest)
        break
      default:
        container.register(PixelTypeEnum.REPOSITORY, PixelRepositoryMongoDb)
    }
  }
}
