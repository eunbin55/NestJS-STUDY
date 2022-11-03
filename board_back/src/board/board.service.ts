import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BoardOneInput } from './dto/board-one.input';
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

  async findOne({boardSetNum}: BoardOneInput) {
    const boardOne = await this.boardRepository.findOne({boardNum:boardSetNum});
    console.log('boardSetNum=====',boardSetNum);
    console.log('boardOne=====',boardOne);
    return boardOne
  }

  // update(id: number, updateBoardInput: UpdateBoardInput) {
  //   return `This action updates a #${id} board`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} board`;
  // }
}
