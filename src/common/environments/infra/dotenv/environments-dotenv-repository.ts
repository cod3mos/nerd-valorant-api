import dotenv from 'dotenv'

import { Environments } from '../../domain/environments'
import { EnvironmentsRepository } from '../../domain/environments-repository'
import { DotEnvProcessAdapter } from './adapter/dotenv-process-adapter'

export class EnvironmentsDotEnvRepository implements EnvironmentsRepository {
  async getEnv (): Promise<Environments> {
    dotenv.config()

    return DotEnvProcessAdapter.from(process.env)
  }
}
