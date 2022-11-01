import { Field, InputType, Int, ObjectType, PickType } from "@nestjs/graphql";
import { User } from "../entities/user.entity";
import { MutationOutput } from "./user.output";

@InputType()
export class LoginInput {
    @Field(() => String, { nullable: true })
    userInputId: string;
    @Field(() => Int, { nullable: true })
    userInputPw: number;
}

// @ObjectType()
// export class LoginOutput extends MutationOutput {

// }