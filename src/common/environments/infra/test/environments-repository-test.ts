import { Environments } from '../../domain/environments'
import { EnvironmentsRepository } from '../../domain/environments-repository'

export class EnvironmentsRepositoryTest implements EnvironmentsRepository {
  async getEnv (): Promise<Environments> {
    return new Environments({
      PORT: 'port',
      NODE_ENV: 'node_env',
      YOUTUBE_API_URL: 'youtube_api_url',
      YOUTUBE_API_KEY: 'youtube_api_key',
      YOUTUBE_API_CHANNEL_ID: 'youtube_api_channel_id'
    })
  }
}
