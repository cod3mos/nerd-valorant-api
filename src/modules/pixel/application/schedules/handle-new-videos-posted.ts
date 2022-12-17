import { DateTime } from 'luxon'
import { getEnvironmentsService } from '../../../../common/environments/domain/helpers'
import { YoutubeSearchListRequest } from '../../../../common/youtube/requests/search/youtube-search-list-request'
import { YoutubeSearchListResponse } from '../../../../common/youtube/requests/search/youtube-search-list-response'
import { YoutubeAPI } from '../../../../common/youtube/youtube-api'

export async function handleNewVideosPosted (): Promise<void> {
  const youtubeAPI = await YoutubeAPI.create()

  const process = await getEnvironmentsService().getEnv()

  await youtubeAPI.send<YoutubeSearchListResponse>(new YoutubeSearchListRequest({
    type: 'video',
    order: 'date',
    maxResults: 50,
    part: 'snippet',
    key: process.getEnv().YOUTUBE_API_KEY,
    channelId: process.getEnv().YOUTUBE_API_CHANNEL_ID,
    publishedAfter: DateTime.now().toISODate().concat('T03:00:01Z')
  }))
}
