import { Module } from '@nestjs/common';
import { DepartmentService } from './department.service';
import { DepartmentResolver } from './department.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Department } from './entities/department.entity';
import { Member } from 'src/member/entities/member.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Department, Member])],
  providers: [DepartmentResolver, DepartmentService],
})
export class DepartmentModule {}
