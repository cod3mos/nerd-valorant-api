import { API, APIConfig, APIRequest, APIRequestPayload, APIResponse, isNotEmpty, ProviderFactory, QueryParams } from 'ts-node-backend'
import { getEnvironmentsService } from '../environments/domain/helpers'
import { YoutubeAPIConfig } from './youtube-api-config'

export class YoutubeAPI {
  private readonly client: API = ProviderFactory.getInstance()

  private constructor (private readonly config: YoutubeAPIConfig) {}

  static async create (): Promise<YoutubeAPI> {
    const process = await getEnvironmentsService().getEnv()

    return new YoutubeAPI({ baseUrl: process.getEnv().YOUTUBE_API_URL })
  }

  async send <T = any>(req: APIRequest<QueryParams>): Promise<APIResponse<T>> {
    return await this.client.request(this.getRequestConfig(req))
  }

  private getRequestConfig (req: APIRequest<QueryParams>): APIConfig {
    const { baseUrl } = this.config

    let url = baseUrl.concat(req.getUrl())

    if (req.hasQuery()) {
      url = url.concat(req.getQueryString())
    }

    const config: APIConfig = {
      url,
      method: req.getMethod(),
      headers: { 'Content-Type': 'application/json' }
    }

    if (req.hasPayload()) {
      config.payload = (req as APIRequestPayload).getPayload()
    }

    if (isNotEmpty(req.getHeaders)) {
      config.headers = {
        ...config.headers,
        ...req.getHeaders()
      }
    }

    return config
  }
}
