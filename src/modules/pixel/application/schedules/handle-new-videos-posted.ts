import { DateTime } from 'luxon'
import { getEnvironmentsService } from '../../../../common/environments/domain/helpers'
import { YoutubeSearchListRequest } from '../../../../common/youtube/requests/search/youtube-search-list-request'
import { YoutubeSearchListResponse } from '../../../../common/youtube/requests/search/youtube-search-list-response'
import { YoutubeAPI } from '../../../../common/youtube/youtube-api'
import { getPixelService } from '../../domain/Helpers'
import { Pixel } from '../../domain/pixel'
import { YoutubeSearchListItemToPixelDataAdapter } from '../../infra/schedules/adapters/youtube-search-list-item-to-pixel-data-adapter'

export async function handleNewVideosPosted (): Promise<void> {
  const youtubeAPI = await YoutubeAPI.create()
  const process = await getEnvironmentsService().getEnv()

  const result = await youtubeAPI.send<YoutubeSearchListResponse>(new YoutubeSearchListRequest({
    type: 'video',
    order: 'date',
    maxResults: 50,
    part: 'snippet',
    key: process.getEnv().YOUTUBE_API_KEY,
    channelId: process.getEnv().YOUTUBE_API_CHANNEL_ID,
    publishedAfter: DateTime.now().toISODate().concat('T03:00:01Z')
  }))

  const promises = result.getData().items.map(async (item): Promise<Pixel> => {
    return await getPixelService().create(YoutubeSearchListItemToPixelDataAdapter.from(item))
  })

  await Promise.all(promises).catch(error => console.log('<=== ERROR ===>', error))
}
