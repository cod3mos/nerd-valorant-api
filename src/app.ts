import 'reflect-metadata'
import './schedules/cron/cron-schedules'

import bootstraps from './app-bootstraps'
import processes from './app-processes'

import { Application } from 'ts-node-backend'

const app = Application.create(bootstraps)

for (const process of processes) {
  app.addProcess(process)
}

void app.run()
