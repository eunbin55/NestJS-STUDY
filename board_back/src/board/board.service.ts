import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { type } from 'os';
import { skip, take } from 'rxjs';
import { Entity, FindManyOptions, FindOneOptions, FindOptionsUtils, Repository } from 'typeorm';
import { BoardAllInput } from './dto/board-all.input';
import { BoardAllCount } from './dto/board-count.output';
import { BoardOneInput } from './dto/board-one.input';
import { BoardOutput } from './dto/board.output';
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


  async findAll({currentPage, limit}:BoardAllInput) {
    const boardReqData = await this.boardRepository.find({
      skip: (limit * (currentPage - 1)),
      take: limit,
      order: {date :'DESC'}
       
    });
    const totalCount = await this.boardRepository.count();
      
    console.log('boardReqData====', boardReqData);
    console.log('totalCount===', totalCount);
    return boardReqData;
    
  }

  // async findAndCount({ currentPage, limit }: BoardAllInput): Promise<BoardOutput> {
  //   const boardOutput = await this.boardRepository.findAndCount({
  //     // const [boardReqData,totalCount] = await this.boardRepository.findAndCount({
  //       skip: (limit * (currentPage - 1)),
  //       take: limit
  //   });
  //   new BoardOutput;
  //     // console.log('boardReqData====', boardReqData);
  //   // console.log('totalCount===', totalCount);
  //   // console.log(currentPage);
  //   return new BoardOutput(boardOutput);
  //   // return [boardReqData, totalCount];
  //   // return {currentPage, limit, totalCount};

  // }

  async findOne({boardSetNum}: BoardOneInput) {
    const boardOne = await this.boardRepository.findOne({boardNum:boardSetNum});
    return boardOne
  }

  // update(id: number, updateBoardInput: UpdateBoardInput) {
  //   return `This action updates a #${id} board`;
  // }

  async delete({ boardSetNum }: BoardOneInput) {
    const result = await this.boardRepository.delete({ boardNum: boardSetNum });
    console.log('result====', result)
    if (result.affected === 0) {
      return '존재하지 않는 boardNum';
    }
    console.log('삭제성공',result)
    return `boardNum: ${boardSetNum} 삭제 성공`;
  }
}
