import { ArgsType, Field, InputType, Int, ObjectType } from "@nestjs/graphql";
import { Column, PrimaryColumn } from "typeorm";

@ObjectType()
export class BoardAllCount {
  @Field(() => Int)
  totalCount: number;
}