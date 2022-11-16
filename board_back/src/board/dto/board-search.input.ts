import { Field, InputType } from "@nestjs/graphql";
import { Column } from "typeorm";

@InputType()
export class BoardSearchInput {
  @Column()
  @Field(() => String, { nullable: true })
  searchWord: string;
}