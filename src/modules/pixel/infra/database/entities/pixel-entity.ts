import { Column, Entity, ObjectID, ObjectIdColumn } from 'typeorm'

@Entity('videos')
export class PixelEntity {
  @ObjectIdColumn()
    _id: ObjectID

  @Column()
    id: object

  @Column()
    snippet: object

  @Column()
    tags: string[]
}

