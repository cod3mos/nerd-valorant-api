import { Bootstrap } from 'ts-node-backend'
import { DbConnectionBootstrap } from './common/database/Bootstrap/DbConnectionBootstrap'
import { EnvironmentsBootstrap } from './common/environments/infra/bootstrap/environments-bootstrap'
import { PixelBootstrap } from './modules/pixel/infra/bootstrap/pixel-bootstrap'

const bootstraps: Bootstrap[] = [
  new EnvironmentsBootstrap(),
  new DbConnectionBootstrap(),
  new PixelBootstrap()
]

export default bootstraps
