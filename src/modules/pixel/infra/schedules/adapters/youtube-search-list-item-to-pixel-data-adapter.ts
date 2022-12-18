import { YoutubeSearchListItem } from '../../../../../common/youtube/requests/search/youtube-search-list-response'
import { PixelData } from '../../../domain/pixel-data'

export class YoutubeSearchListItemToPixelDataAdapter extends PixelData {
  constructor (data: YoutubeSearchListItem) {
    const formatPixelTags = (tags: string[]): string[] => tags.map(tag => tag.trim())

    super({
      channel_id: data.snippet.channelId,
      description: data.snippet.description,
      published_at: data.snippet.publishedAt,
      tags: formatPixelTags(data.snippet.title.split('|')),
      title: data.snippet.title,
      video_id: data.id.videoId
    })
  }

  static from (data: YoutubeSearchListItem): PixelData {
    return new YoutubeSearchListItemToPixelDataAdapter(data)
  }
}
