
import { uid } from 'uid'
import { Pixel } from '../../domain/pixel'
import { PixelData } from '../../domain/pixel-data'
import { PixelRepository } from '../../domain/pixel-repository'
import { PixelTest } from '../__test__/__mocks__/pixel-test'
import { PixelTestFirst } from '../__test__/__mocks__/pixel-test-first'

export class PixelRepositoryTest implements PixelRepository {
  private readonly pixels: Pixel[] = [new PixelTestFirst()]

  async create (data: PixelData): Promise<Pixel> {
    const pixel = new PixelTest({
      id: uid(32),
      tags: data.getTags(),
      title: data.getTitle(),
      video_id: data.getVideoId(),
      channel_id: data.getChannelId(),
      description: data.getDescription(),
      published_at: data.getPublishedAt()
    })

    this.pixels.push(pixel)

    return pixel
  }
}
