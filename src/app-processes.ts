import { Process } from 'ts-node-backend'
import koaServerProcess from './process/koa-server-process'

const processes: Process[] = [koaServerProcess]

export default processes
