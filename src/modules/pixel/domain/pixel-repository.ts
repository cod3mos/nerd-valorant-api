import { Pixel } from './pixel'
import { PixelData } from './pixel-data'

export interface PixelRepository {
  create: (pixel: PixelData) => Promise<Pixel>
}
