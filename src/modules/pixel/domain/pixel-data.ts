export interface PixelDataParams {
  tags: string[]
  title: string
  video_id: string
  channel_id: string
  description: string
  published_at: string
}


export abstract class PixelData {
  constructor (protected params: PixelDataParams) { }

  getTags (): string[] {
    return this.params.tags
  }

  getTitle (): string {
    return this.params.title
  }

  getVideoId (): string {
    return this.params.video_id
  }

  getChannelId (): string {
    return this.params.channel_id
  }

  getPublishedAt (): string {
    return this.params.published_at
  }

  getDescription (): string {
    return this.params.description
  }
}
