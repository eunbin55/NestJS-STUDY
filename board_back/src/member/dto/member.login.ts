import { Field, InputType, ObjectType, PickType } from "@nestjs/graphql";
import { Member } from "../entities/member.entity";
import { MutationOutput } from "./member.output";

@InputType()
export class LoginInput extends PickType(Member, ['mId']) {
    @Field(() => String, { nullable: true })
    mId: string;
}


@ObjectType()
export class LoginOutput extends MutationOutput {

}