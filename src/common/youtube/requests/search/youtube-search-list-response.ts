export interface Thumbnails {
  url: string
  width: number
  height: number
}

export interface YoutubeSearchListResponse {
  items: Array<{
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
  }>
}
