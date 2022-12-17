import 'reflect-metadata'

import { Environments } from '../../domain/environments'
import { EnvironmentsEnum } from '../../domain/environments-enum'
import { getEnvironmentsService } from '../../domain/helpers'
import { EnvironmentsBootstrap } from '../bootstrap/environments-bootstrap'

describe('Authentication', () => {
  beforeAll(async () => {
    await new EnvironmentsBootstrap().handler()
  })

  it('create a new instance of the environments service', async () => {
    const environmentsKeys = Object.keys(EnvironmentsEnum)
    const environments = await getEnvironmentsService().getEnv()

    expect(environments).toBeInstanceOf(Environments)
    expect(Object.keys(environments.getEnv())).toHaveLength(environmentsKeys.length)
  })

  it('return an error when fields are not found', async () => {
    expect(() => new Environments({})).toThrow()
  })
})
