import { Maybe } from '../../../common/protocols/maybe'
import { Pixel } from './pixel'
import { PixelData } from './pixel-data'

export interface PixelRepository {
  create: (pixel: PixelData) => Promise<Pixel>
  getOneBy: (id: string) => Promise<Maybe<Pixel>>
}
