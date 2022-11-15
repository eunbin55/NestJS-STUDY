import { ArgsType, Field, InputType, Int, ObjectType } from "@nestjs/graphql";
import { Column, PrimaryColumn } from "typeorm";

@InputType()
export class BoardAllCount {
  @Field(() => Int)
  totalCount: number;
}