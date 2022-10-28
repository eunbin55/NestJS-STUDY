import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateMemberInput } from './dto/create-member.input';
import { LoginInput } from './dto/member.login';
import { UpdateMemberInput } from './dto/update-member.input';
import { Member } from './entities/member.entity';

@Injectable()
export class MemberService {
  constructor(
    @InjectRepository(Member)
    private readonly memberRepository: Repository<Member>,
  ) {}

  async create(createMemberInput: CreateMemberInput) {
    return await this.memberRepository.save({
      ...createMemberInput,
    });
  }

  async login({mId}: LoginInput) {
    console.log("mId>>>>>>>",mId);
    const member = await this.memberRepository.findOne({mId});
    if (!member) {
      return console.log('로그인 실패')
    } 
      return console.log('로그인 성공')
  }

  findAll() {
    return this.memberRepository.find();
  }

  findOne(id: string) {
    return this.memberRepository.findOne(id, {
      relations: ['department'],
    });
  }

  // update(id: number, updateMemberInput: UpdateMemberInput) {
  //   return `This action updates a #${id} member`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} member`;
  // }
}
