import { ObjectType, Field } from '@nestjs/graphql';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  Timestamp,
} from 'typeorm';

@Entity()
@ObjectType()
export class Board {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => String)
  uId_board: string;

  @Column({ type: 'varchar', length: '255' })
  @Field(() => String)
  title: string;

  @Column({ type: 'varchar', length: '255' })
  @Field()
  contents: string;

  @Column({ type: 'varchar', length: '50' })
  @Field()
  mName: string;

  @CreateDateColumn()
  @Field()
  date: Date;

  @Column({ type: 'int', default: 0 })
  @Field()
  cnt: number;
}
