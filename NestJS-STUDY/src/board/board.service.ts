import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateBoardInput } from './dto/create-board.input';
import { UpdateBoardInput } from './dto/update-board.input';
import { Board } from './entities/board.entity';

@Injectable()
export class BoardService {
  constructor(
    @InjectRepository(Board)
    private readonly boardRepository: Repository<Board>,
  ) {}

  async create(createBoardInput: CreateBoardInput) {
    return await this.boardRepository.save({
      ...createBoardInput,
    });
  }

  findAll() {
    return this.boardRepository.find();
  }

  findOne(uuid: string) {
    return this.boardRepository.findOne(uuid);
  }

  // update(id: number, updateBoardInput: UpdateBoardInput) {
  //   return `This action updates a #${id} board`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} board`;
  // }
}
