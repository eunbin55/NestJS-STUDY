import { Field, InputType, Int, ObjectType } from "@nestjs/graphql";
import { User } from "../entities/user.entity";
import { MutationOutput } from "./user.output";

@InputType()
export class LoginInput {
    @Field(() => String, { nullable: true })
    userInputId: string;
    @Field(() => String, { nullable: true })
    userInputPw: string;
}

// @ObjectType()
// export class LoginOutput extends MutationOutput {

// }