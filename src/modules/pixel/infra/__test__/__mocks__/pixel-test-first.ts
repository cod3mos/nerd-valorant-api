import { DateTime } from 'luxon'
import { uid } from 'uid'
import { Pixel } from '../../../domain/pixel'

export class PixelTestFirst extends Pixel {
  constructor () {
    super({
      id: uid(32),
      tags: ['item_01', 'item_02', 'item_03'],
      title: 'item_01 | item_02 | item_03',
      video_id: 'video_id_01',
      channel_id: 'channel_id_nerd_valorant',
      description: 'video_id_01_description',
      published_at: DateTime.now().toISODate().concat('T03:00:01Z')
    })
  }
}
