import { CronJob } from 'cron'
import { handleNewVideosPosted } from '../../modules/pixel/application/schedules/handle-new-videos-posted'

// eslint-disable-next-line @typescript-eslint/no-misused-promises
new CronJob('* 6 * * * *', handleNewVideosPosted).start()
