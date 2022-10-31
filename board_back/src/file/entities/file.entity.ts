import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, Entity, In, PrimaryColumn } from 'typeorm';

@Entity()
@ObjectType()
export class File {
  @PrimaryColumn({ type: 'int' })
  @Field(() => Int)
  fileNum: number;

  @Column({ type: 'varchar', length: '255' })
  @Field(() => String)
  fielName: string;
}
