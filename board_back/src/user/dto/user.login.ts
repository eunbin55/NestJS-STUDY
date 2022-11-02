import { Field, InputType, Int, ObjectType } from "@nestjs/graphql";
import { Column } from "typeorm";
import { User } from "../entities/user.entity";
import { MutationOutput } from "./user.output";

@InputType()
export class LoginInput {
    @Column({ length: 255 })
    @Field(() => String, { nullable: true })
    userInputId: string;
    @Column({ length: 4 })
    @Field(() => String, { nullable: true })
    userInputPw: string;
}

// @ObjectType()
// export class LoginOutput extends MutationOutput {

// }