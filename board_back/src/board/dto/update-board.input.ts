import { CreateBoardInput } from './create-board.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { Board } from '../entities/board.entity';
import { CreateDateColumn } from 'typeorm';

@InputType()
export class UpdateBoardInput extends PartialType(CreateBoardInput) {
  
}

@InputType()
export class UpdateBoard {
  @Field(() => UpdateBoardInput)
  data: UpdateBoardInput;
  @Field(() => Int)
  boardSetNum: number;
}