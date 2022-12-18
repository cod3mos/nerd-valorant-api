import 'reflect-metadata'

import { Bootstrap } from 'ts-node-backend'
import { container } from 'tsyringe'
import { DbConnectionTypeEnum } from '../DbConnectionTypeEnum'
import { TypeOrmDbConnection } from '../TypeOrmDbConnection'

export class DbConnectionBootstrap implements Bootstrap {
  async handler (): Promise<any> {
    const typeOrmDbConnection = await TypeOrmDbConnection.create()

    container.register(DbConnectionTypeEnum.DB_CONNECTION, {
      useValue: (await typeOrmDbConnection.openConnection())
    })
  }
}
