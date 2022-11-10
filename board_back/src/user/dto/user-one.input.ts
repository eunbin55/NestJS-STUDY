import { Field, InputType } from "@nestjs/graphql";
import { Column } from "typeorm";

@InputType()
export class UserOneInput {
  @Column()
  @Field(() => String, { nullable: true })
  userId: string;
}