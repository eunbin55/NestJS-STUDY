import { ObjectType, Field } from '@nestjs/graphql';
import { Department } from 'src/department/entities/department.entity';
import { User } from 'src/user/entities/user.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
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

  @Column({ type: 'varchar', length: '7', name: 'userNum' })
  @Field()
  userNum: string;

  @ManyToOne(() => User, {
    eager: true,
    cascade:true
  })
  @JoinColumn([{ name: 'userNum' }])
  @Field()
  user: User;

 
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
