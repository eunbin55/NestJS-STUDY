import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateDepartmentInput {
  @Field(() => String, { description: '부서명' })
  dName: string;
}
