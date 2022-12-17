import { Pixel } from './pixel'
import { PixelData } from './pixel-data'

export interface PixelService {
  create: (pixel: PixelData) => Promise<Pixel>
}
