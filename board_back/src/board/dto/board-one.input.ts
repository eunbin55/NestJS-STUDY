import { Field, InputType } from "@nestjs/graphql";
import { Int } from "type-graphql";
import { Column } from "typeorm";

@InputType()
export class BoardOneInput {
  @Column()
  @Field(() => Int, { nullable: true })
  boardSetNum: number;
}