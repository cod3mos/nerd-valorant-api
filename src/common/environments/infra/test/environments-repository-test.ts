import { Environments } from '../../domain/environments'
import { EnvironmentsRepository } from '../../domain/environments-repository'

export class EnvironmentsRepositoryTest implements EnvironmentsRepository {
  async getEnv (): Promise<Environments> {
    return new Environments({
      PORT: '5050',
      NODE_ENV: 'development'
    })
  }
}
