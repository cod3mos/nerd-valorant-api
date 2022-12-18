import { Environments } from '../../domain/environments'
import { EnvironmentsEnum } from '../../domain/environments-enum'
import { EnvironmentsRepository } from '../../domain/environments-repository'

export class EnvironmentsRepositoryTest implements EnvironmentsRepository {
  async getEnv (): Promise<Environments> {
    return new Environments(EnvironmentsEnum)
  }
}
