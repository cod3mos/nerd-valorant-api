export interface Thumbnails {
  url: string
  width: number
  height: number
}

export interface YoutubeSearchListItem {
  kind: string
  etag: string
  id: { kind: string, videoId: string }
  snippet: {
    publishedAt: string
    channelId: string
    title: string
    description: string
    thumbnails: { [key: string]: Thumbnails }
    channelTitle: string
    liveBroadcastContent: string
    publishTime: string
  }
}
export interface YoutubeSearchListResponse {
  items: YoutubeSearchListItem[]
}
