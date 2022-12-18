import { isEmpty, isNotEmpty } from 'ts-node-backend'
import { EnvironmentsEnum } from './environments-enum'
import { EnvironmentsNotFound } from './exceptions/environments-not-found'

export interface Secrets {
  PORT: string
  NODE_ENV: string
  YOUTUBE_API_URL: string
  YOUTUBE_API_KEY: string
  YOUTUBE_API_CHANNEL_ID: string
  MONGODB_URL_CONNECTION: string
}

export class Environments {
  private secrets: Record<string, any> = {}

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

      this.secrets = { ...this.secrets, [item]: secrets[item] }
    }

    if (isNotEmpty(errors)) {
      throw new EnvironmentsNotFound(errors)
    }
  }
}
