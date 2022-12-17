import { Bootstrap } from 'ts-node-backend'
import { EnvironmentsBootstrap } from './common/environments/infra/bootstrap/environments-bootstrap'
import { PixelBootstrap } from './modules/pixel/infra/bootstrap/pixel-bootstrap'

const bootstraps: Bootstrap[] = [
  new EnvironmentsBootstrap(),
  new PixelBootstrap()
]

export default bootstraps
