import { Column, Entity, ObjectID, ObjectIdColumn } from 'typeorm'

export interface PixelsVideoId {
  videoId: string
}

export interface PixelsSnippet {
  publishedAt: string
  channelId: string
  title: string
  description: string
}

export interface PixelsParams {
  id: PixelsVideoId
  tags: string[]
  snippet: PixelsSnippet
}

@Entity('pixels')
export class PixelEntity {
  constructor (private readonly params: PixelsParams) { }

  @ObjectIdColumn()
    _id: ObjectID

  @Column()
    id: object

  @Column()
    snippet: object

  @Column()
    tags: string[]
}

