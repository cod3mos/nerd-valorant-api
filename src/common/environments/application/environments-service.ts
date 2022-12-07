import { inject, injectable } from 'tsyringe'
import { Environments } from '../domain/environments'
import { EnvironmentsRepository } from '../domain/environments-repository'
import { EnvironmentsService } from '../domain/environments-service'
import { EnvironmentsTypeEnum } from '../domain/environments-type-enum'

@injectable()
export class EnvironmentsServiceImpl implements EnvironmentsService {
  constructor (@inject(EnvironmentsTypeEnum.REPOSITORY) private readonly environmentsRepository: EnvironmentsRepository) { }

  async getEnv (): Promise<Environments> {
    return await this.environmentsRepository.getEnv()
  }
}
