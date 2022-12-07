import { ValidationErrorException } from '../errors/exceptions/validation-error-exception'
import { KoaParameterError } from './koa-parameter-error'


export class KoaParameterValidationException extends ValidationErrorException {
  private readonly params: {}
  private readonly code: string

  constructor (error: KoaParameterError) {
    super(error.errors)
    this.code = error.code
    this.params = error.params
    this.message = error.message
  }

  getCode (): string {
    return this.code
  }

  getErrors (): any[] {
    return this.errors
  }

  getParams (): any {
    return this.params
  }
}
