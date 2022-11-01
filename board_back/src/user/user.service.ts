import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserInput } from './dto/create-user.input';
import { LoginInput } from './dto/user.login';
// import { UpdateUserInput } from './dto/update-user.input';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async create(createUserInput: CreateUserInput) {
    return await this.userRepository.save({
      ...createUserInput,
    });
  }

  async login({userInputId,userInputPw}: LoginInput) {
    console.log("userInputId>>>>>>>",userInputId);
    const user = await this.userRepository.findOne({userId:userInputId});
    return user.userPw === userInputPw;
  }

  findAll() {
    return this.userRepository.find();
  }

  findOne(id: string) {
    return this.userRepository.findOne(id, {
      relations: ['department'],
    });
  }

  // update(id: number, updateUserInput: UpdateUserInput) {
  //   return `This action updates a #${id} user`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} user`;
  // }
}
