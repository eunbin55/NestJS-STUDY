import { InputType, Int, Field } from '@nestjs/graphql';
import { PrimaryColumn } from 'typeorm';

@InputType()
export class CreateFileInput {
  @PrimaryColumn({ type: 'int' })
  @Field(() => Int)
  fileNum: number;

  @Field(() => String)
  fielName: string;
}
