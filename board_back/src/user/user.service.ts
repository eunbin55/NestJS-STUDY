import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserInput } from './dto/create-user.input';
import { UserOneInput } from './dto/user-one.input';
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
    if (!user ) {
      console.log('존재하지 않는 ID >>>>>',userInputId);  
      return false;
    }else {
      console.log("user.userPw>>>>>>>",user.userPw);
      console.log(user.userId)
      console.log(user.userPw === userInputPw)
      return user.userPw === userInputPw;
    }
  }

  findAll() {
    return this.userRepository.find();
  }

  findOne({userId}: UserOneInput) {
    return this.userRepository.findOne({userId:userId
      // relations: ['department'],
    });
  }

  // update(id: number, updateUserInput: UpdateUserInput) {
  //   return `This action updates a #${id} user`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} user`;
  // }
}
