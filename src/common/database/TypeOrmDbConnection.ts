import { not } from 'ts-node-backend'
import { DataSource } from 'typeorm'
import { getEnvironmentsService } from '../environments/domain/helpers'

export enum TypeOrmDatabaseType {
  MONGO_DB = 'mongodb'
}

export class TypeOrmDbConnection {
  constructor (private readonly dataSource: DataSource) {}

  async openConnection (): Promise<DataSource> {
    if (not(this.dataSource.isInitialized)) {
      await this.dataSource.initialize()
    }

    return this.dataSource
  }

  static async create (): Promise<TypeOrmDbConnection> {
    const process = await getEnvironmentsService().getEnv()

    return new TypeOrmDbConnection(new DataSource({
      url: process.getEnv().MONGODB_URL_CONNECTION,
      type: TypeOrmDatabaseType.MONGO_DB,
      entities: [__dirname + '/../../modules/**/infra/database/entities/*.{ts,js}'],
      useUnifiedTopology: true
    }))
  }
}
