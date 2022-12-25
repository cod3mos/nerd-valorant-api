import { AlreadyExistsException } from 'ts-node-backend'

export class PixelAlreadyExistsException extends AlreadyExistsException {
  constructor () {
    super('pixel')
  }
}
