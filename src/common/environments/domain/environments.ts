import { isEmpty, isNotEmpty } from 'ts-node-backend'
import { EnvironmentsEnum } from './environments-enum'
import { EnvironmentsNotFound } from './exceptions/environments-not-found'

export interface Secrets {
  PORT: string
  NODE_ENV: string
}

export class Environments {
  private readonly secrets: any[] = []

  constructor (params: any) {
    this.valid(params)
  }

  getEnv (): Secrets {
    return this.secrets as unknown as Secrets
  }

  private valid (secrets: Secrets): void {
    const errors: string[] = []
    const items: string[] = Object.keys(EnvironmentsEnum)

    for (const item of items) {
      if (isEmpty(secrets[item])) {
        errors.push(item)
      }

      this.secrets.push({ [item]: secrets[item] })
    }

    if (isNotEmpty(errors)) {
      throw new EnvironmentsNotFound(errors)
    }
  }
}
