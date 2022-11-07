import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { skip, take } from 'rxjs';
import { FindManyOptions, FindOneOptions, FindOptionsUtils, Repository } from 'typeorm';
import { BoardAllInput } from './dto/board-all.input';
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

  

  async count() {
    const totalCount = await this.boardRepository.count({
    });
    // const boardAllCount = await this.boardRepository.count();
      
    console.log('totalCount====', totalCount);
    return totalCount;
    
  }
  // async findAll({currentPage, limit}:BoardAllInput) {
  //   const boardReqData = await this.boardRepository.find({
  //     skip: (limit * (currentPage - 1)),
  //     take: limit
  //   });
  //   const totalCount = await this.boardRepository.count();
      
  //   console.log('boardReqData====', boardReqData);
  //   console.log('totalCount===', totalCount);
  //   return {boardReqData, totalCount};
    
  // }
  async findAll({currentPage, limit}:BoardAllInput) {
    const [boardReqData, totalCount] = await this.boardRepository.findAndCount({
      skip: (limit * (currentPage - 1)),
      take: limit
    });
      
    console.log('boardReqData====', boardReqData);
    console.log('totalCount===', totalCount);
    return {boardReqData, totalCount};
    
  }

  async findOne({boardSetNum}: BoardOneInput) {
    const boardOne = await this.boardRepository.findOne({boardNum:boardSetNum});
    return boardOne
  }

  // update(id: number, updateBoardInput: UpdateBoardInput) {
  //   return `This action updates a #${id} board`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} board`;
  // }
}
