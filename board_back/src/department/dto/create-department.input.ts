import { InputType, Field } from '@nestjs/graphql';
import { PrimaryColumn } from 'typeorm';

@InputType()
export class CreateDepartmentInput {
  @PrimaryColumn()
  @Field(() => String, { description: '부서코드' })
  deptCode: string
  
  @Field(() => String, { description: '부서명' })
  deptName: string;
}
