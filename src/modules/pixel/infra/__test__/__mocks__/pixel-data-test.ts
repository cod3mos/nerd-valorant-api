import { DateTime } from 'luxon'
import { PixelData } from '../../../domain/pixel-data'

export class PixelDataTest extends PixelData {
  constructor () {
    super({
      tags: ['item_04', 'item_05', 'item_06'],
      title: 'item_04 | item_05 | item_06',
      video_id: 'video_id_02',
      channel_id: 'channel_id_nerd_valorant',
      description: 'video_id_02_description',
      published_at: DateTime.now().plus({ day: 1 }).toISODate().concat('T03:00:01Z')
    })
  }
}
