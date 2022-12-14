import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Department } from 'src/department/entities/department.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
@ObjectType()
export class User {
  @PrimaryColumn({ type: 'varchar', length: '7' })
  @Field(() => String)
  userNum: string;

  @Column({ type: 'varchar', length: '255' })
  @Field(() => String)
  userId: string;

  @Column({ type: 'varchar', length: '4' })
  @Field(() => String)
  userPw: string;

  @Column({ type: 'varchar', length: '50' })
  @Field()
  userName: string;

  @Column({ type: 'varchar', length: '7' })
  // @Field()
  deptCode: string;

  @ManyToOne(() => Department, {
    eager: true
  })
  @JoinColumn({ name: 'deptCode' })
    @Field()
  department: Department;
  
  // @ManyToOne(() => Department, (department) => department.deptName)
  // @JoinColumn({ name: 'deptCode' })
  // department: Department['deptName'];
}
