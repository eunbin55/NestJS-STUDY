import { ObjectType, Field } from '@nestjs/graphql';
import { User } from 'src/user/entities/user.entity';
import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';

@Entity()
@ObjectType()
export class Department {
  @PrimaryColumn({ type: 'varchar', length: '7' })
  @Field(() => String)
  deptCode: string;

  @Column({ type: 'varchar', unique: true })
  @Field(() => String)
  deptName: string;

  @OneToMany(() => User, (user) => user.department)
  user: User;
}
