import { PixelData, PixelDataParams } from './pixel-data'

export interface PixelParams extends PixelDataParams {
  readonly id: string
}

export abstract class Pixel extends PixelData {
  constructor (protected params: PixelParams) {
    super(params)
  }

  getId (): string {
    return this.params.id
  }
}
