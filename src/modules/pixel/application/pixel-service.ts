import { isNotEmpty, throwIf } from 'ts-node-backend'
import { inject, injectable } from 'tsyringe'
import { PixelAlreadyExistsException } from '../domain/exceptions/pixel-already-exists-exception'
import { Pixel } from '../domain/pixel'
import { PixelData } from '../domain/pixel-data'
import { PixelRepository } from '../domain/pixel-repository'
import { PixelService } from '../domain/pixel-service'
import { PixelTypeEnum } from '../domain/pixel-type-enum'

@injectable()
export class PixelServiceImpl implements PixelService {
  constructor (@inject(PixelTypeEnum.REPOSITORY) private readonly pixelRepository: PixelRepository) {}

  async create (pixel: PixelData): Promise<Pixel> {
    const _pixel = await this.pixelRepository.getOneBy(pixel.getVideoId())

    throwIf(isNotEmpty(_pixel), PixelAlreadyExistsException)

    return await this.pixelRepository.create(pixel)
  }
}
