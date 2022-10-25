import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateMemberInput {
  @Field(() => String, { description: '로그인 아이디' })
  mId: string;
  @Field(() => Int, { description: '로그인 비밀번호' })
  mPw: number;
  @Field(() => String, { description: '이름' })
  mName: string;
  @Field(() => String, { description: '부서명' })
  dName: string;
}
