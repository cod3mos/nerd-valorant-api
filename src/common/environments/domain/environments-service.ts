import { Environments } from './environments'

export interface EnvironmentsService {
  getEnv: () => Promise<Environments>
}
