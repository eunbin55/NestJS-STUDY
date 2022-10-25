import { ObjectType, Field } from '@nestjs/graphql';
import { Member } from 'src/member/entities/member.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class Department {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => String)
  uId_department: string;

  @Column({ type: 'varchar', unique: true })
  @Field(() => String)
  dName: string;

  @OneToMany(() => Member, (member) => member.department)
  member: Member[];
}
