import { InputType, Int, Field } from '@nestjs/graphql';
import { PrimaryColumn } from 'typeorm';

@InputType()
export class CreateUserInput {
  @PrimaryColumn({ type: 'varchar', length: '7' })
  @Field(() => String, { description: '사원번호' })
  userNum: string;
  @Field(() => String, { description: '로그인 아이디' })
  userId: string;
  @Field(() => String, { description: '로그인 비밀번호' })
  userPw: string;
  @Field(() => String, { description: '이름' })
  userName: string;
  @Field(() => String, { description: '부서코드' })
  deptCode: string;
}
