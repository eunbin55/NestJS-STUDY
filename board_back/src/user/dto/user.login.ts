import { Field, InputType, ObjectType, PickType } from "@nestjs/graphql";
import { User } from "../entities/user.entity";
import { MutationOutput } from "./user.output";

@InputType()
export class LoginInput extends PickType(User, ['userId']) {
    @Field(() => String, { nullable: true })
    userId: string;
}


@ObjectType()
export class LoginOutput extends MutationOutput {

}