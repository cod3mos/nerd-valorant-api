import { inject, injectable } from 'tsyringe'
import { DataSource, Repository } from 'typeorm'
import { DbConnectionTypeEnum } from '../../../../common/database/DbConnectionTypeEnum'
import { Maybe } from '../../../../common/protocols/maybe'
import { Pixel } from '../../domain/pixel'
import { PixelData } from '../../domain/pixel-data'
import { PixelRepository } from '../../domain/pixel-repository'
import { PixelEntityToPixelAdapter } from './adapters/pixel-entity-to-pixel-adapter'
import { PixelEntity } from './entities/pixel-entity'

@injectable()
export class PixelRepositoryMongoDb implements PixelRepository {
  constructor (@inject(DbConnectionTypeEnum.DB_CONNECTION) protected connection: DataSource) { }

  private repository (): Repository<PixelEntity> {
    return this.connection.getRepository(PixelEntity)
  }

  async getOneBy (id: string): Promise<Maybe<Pixel>> {
    const _pixel = await this.repository().findOne({
      where: {
        id: {
          videoId: id
        }
      }
    })

    return PixelEntityToPixelAdapter.from(_pixel)
  }

  async create (pixel: PixelData): Promise<Pixel> {
    const _pixel = await this.repository().save({
      id: {
        videoId: pixel.getVideoId()
      },
      tags: pixel.getTags(),
      snippet: {
        channelId: pixel.getChannelId(),
        description: pixel.getDescription(),
        publishedAt: pixel.getPublishedAt(),
        title: pixel.getTitle()
      }
    })

    return PixelEntityToPixelAdapter.from(_pixel)!
  }
}
