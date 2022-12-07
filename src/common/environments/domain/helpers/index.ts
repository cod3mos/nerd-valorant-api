import { container } from 'tsyringe'
import { EnvironmentsServiceImpl } from '../../application/environments-service'
import { EnvironmentsTypeEnum } from '../environments-type-enum'

export function getEnvironmentsService (): EnvironmentsServiceImpl {
  return container.resolve<EnvironmentsServiceImpl>(EnvironmentsTypeEnum.SERVICE)
}
