import { APIRequest, HttpMethodEnum, QueryParams } from 'ts-node-backend'

export interface YoutubeSearchListRequestParams {
  order: string
  publishedAfter: string
  type: string
  maxResults: number
  part: string
  key: string
  channelId: string
}

export class YoutubeSearchListRequest extends APIRequest<QueryParams> {
  constructor (protected params: YoutubeSearchListRequestParams) {
    super(params)
  }

  getUrl (): string {
    return '/search'
  }

  getMethod (): HttpMethodEnum {
    return HttpMethodEnum.GET
  }
}
