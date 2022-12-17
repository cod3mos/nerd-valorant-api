import { container } from 'tsyringe'
import { PixelServiceImpl } from '../../application/pixel-service'
import { PixelTypeEnum } from '../pixel-type-enum'

export function getPixelService (): PixelServiceImpl {
  return container.resolve<PixelServiceImpl>(PixelTypeEnum.SERVICE)
}

