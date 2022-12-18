import { Pixel } from '../../../domain/pixel'
import { PixelEntity } from '../entities/pixel-entity'

export class PixelEntityToPixelAdapter extends Pixel {
  constructor (pixel: any) {
    super({
      id: pixel._id,
      tags: pixel.tags,
      title: pixel.snippet.title,
      video_id: pixel.id.videoId,
      channel_id: pixel.snippet.channelId,
      description: pixel.snippet.description,
      published_at: pixel.snippet.publishedAt
    })
  }

  static from (pixelEntity: PixelEntity): Pixel {
    return new PixelEntityToPixelAdapter(pixelEntity)
  }
}
