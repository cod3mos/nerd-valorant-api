import { Pixel, PixelParams } from '../../../domain/pixel'

export class PixelTest extends Pixel {
  constructor (protected params: PixelParams) {
    super(params)
  }
}
