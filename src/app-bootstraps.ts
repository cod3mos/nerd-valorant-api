import { Bootstrap } from 'ts-node-backend'
import { EnvironmentsBootstrap } from './common/environments/infra/bootstrap/environments-bootstrap'

const bootstraps: Bootstrap[] = [new EnvironmentsBootstrap()]

export default bootstraps
