import 'reflect-metadata'
import { Environments } from '../../domain/environments'
import { getEnvironmentsService } from '../../domain/helpers'

import { EnvironmentsBootstrap } from '../bootstrap/environments-bootstrap'

describe('Authentication', () => {
  beforeAll(async () => {
    await new EnvironmentsBootstrap().handler()
  })

  it('create a new instance of the environments service', async () => {
    const environments = await getEnvironmentsService().getEnv()

    expect(environments).toBeInstanceOf(Environments)
    expect(Object.keys(environments.getEnv())).toHaveLength(2)
  })

  it('return an error when fields are not found', async () => {
    expect(() => new Environments({})).toThrow()
  })
})
