import { ValidationErrorsParams } from '../errors/exceptions'

export interface KoaParameterError {
  params: any
  code: string
  message: string
  errors: ValidationErrorsParams[]
}
