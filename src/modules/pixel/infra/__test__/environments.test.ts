import 'reflect-metadata'

import { getPixelService } from '../../domain/Helpers'
import { Pixel } from '../../domain/pixel'
import { PixelBootstrap } from '../bootstrap/pixel-bootstrap'
import { PixelDataTest } from './__mocks__/pixel-data-test'

describe('Pixel', () => {
  beforeAll(async () => {
    await new PixelBootstrap().handler()
  })

  it('create a new pixel instance and validate its data', async () => {
    const pixel = await getPixelService().create(new PixelDataTest())

    console.log('===>', pixel.getId())

    expect(pixel).toBeInstanceOf(Pixel)
    expect(pixel.getTags()).toHaveLength(3)
  })
})
