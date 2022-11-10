import { InputType, Field } from '@nestjs/graphql';
import { User } from 'src/user/entities/user.entity';

@InputType()
export class CreateBoardInput {
  @Field(() => String, { description: '제목', nullable:false })
  title: string;
  @Field(() => String, { description: '내용' })
  contents: string;
  @Field(() => String, { description: '작성자' })
  userNum: User['userNum'];
}
