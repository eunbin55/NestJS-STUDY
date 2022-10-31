import { ObjectType, Field } from '@nestjs/graphql';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  PrimaryGeneratedColumn,
  Timestamp,
} from 'typeorm';

@Entity()
@ObjectType()
export class Board {
  @PrimaryGeneratedColumn()
  @Field()
  boardNum: number;

  @Column({ type: 'varchar', length: '255' })
  @Field(() => String)
  title: string;

  @Column({ type: 'varchar', length: '255' })
  @Field()
  contents: string;

  @Column({ type: 'varchar', length: '7' })
  @Field()
  userNum: string;

  @CreateDateColumn()
  @Field()
  date: Date;

  @Column({ type: 'int', default: 0 })
  @Field()
  cnt: number;

  @Column({ nullable:true, default:0 })
  @Field()
  fileNum: number;
}
