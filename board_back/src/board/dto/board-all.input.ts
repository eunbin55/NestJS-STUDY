import { Field, InputType } from "@nestjs/graphql";
import { Int } from "type-graphql";
import { Column } from "typeorm";

@InputType()
export class BoardAllInput {
  @Column()
  @Field(() => Int)
    currentPage: number;
  @Column()
  @Field(() => Int)
    limit: number;
}