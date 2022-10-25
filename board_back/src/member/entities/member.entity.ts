import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Department } from 'src/department/entities/department.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
@ObjectType()
export class Member {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => String)
  uId_member: string;

  @Column({ type: 'varchar', length: '255' })
  @Field(() => String)
  mId: string;

  @Column({ type: 'int' })
  @Field(() => Int)
  mPw: number;

  @Column({ type: 'varchar', length: '50' })
  @Field()
  mName: string;

  @Column({ type: 'varchar' })
  @Field()
  dName: string;

  @ManyToOne(() => Department, (department) => department.dName)
  @JoinColumn({ name: 'uId_department' })
  department: Department['dName'];

  // @ManyToOne(() => Department)
  // @JoinColumn({ name: 'department_uId' })
  // department: Department;
}
