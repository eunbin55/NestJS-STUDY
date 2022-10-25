import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateDepartmentInput } from './dto/create-department.input';
import { UpdateDepartmentInput } from './dto/update-department.input';
import { Department } from './entities/department.entity';

@Injectable()
export class DepartmentService {
  constructor(
    @InjectRepository(Department)
    private readonly departmentRepository: Repository<Department>,
  ) {}

  async create(createDepartmentInput: CreateDepartmentInput) {
    return this.departmentRepository.save({
      ...createDepartmentInput,
    });
  }

  findAll() {
    return this.departmentRepository.find();
  }

  findOne(id: string) {
    return this.departmentRepository.findOne(id);
  }

  // update(id: number, updateDepartmentInput: UpdateDepartmentInput) {
  //   return `This action updates a #${id} department`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} department`;
  // }
}
