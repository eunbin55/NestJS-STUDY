import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { BoardService } from './board.service';
import { Board } from './entities/board.entity';
import { CreateBoardInput } from './dto/create-board.input';
import { UpdateBoard, UpdateBoardInput } from './dto/update-board.input';
import { BoardOneInput } from './dto/board-one.input';
import { query } from 'express';
import { BoardOutput } from './dto/board.output';
import { BoardAllCount } from './dto/board-count.output';
import { BoardAllInput } from './dto/board-all.input';

@Resolver(() => Board)
export class BoardResolver {
  constructor(private readonly boardService: BoardService) {}

  @Mutation(() => Board)
  createBoard(@Args('createBoardInput') createBoardInput: CreateBoardInput) {
    return this.boardService.create(createBoardInput);
  }

  @Query(() => Board, { name: 'boardOne' })
  findOne(@Args('boardOneInput') boardOneInput: BoardOneInput) {
    return this.boardService.findOne(boardOneInput);
  }

  @Query(() => [Board], { name: 'boardAll' })
  findAll(@Args('boardAllInput') boardAllInput: BoardAllInput) {
    return this.boardService.findAll(boardAllInput);
  }
  
  @Query(() => String)
  search(@Args('search') searchWoard: string) {
    return this.boardService.search(searchWoard);
  }

  // @Query(() => BoardOutput, { name: 'boardAll' })
  // findAndCount(@Args('boardAllInput') boardOutput: BoardOutput): Promise<BoardOutput> {
    
  //   return this.boardService.findAndCount(boardOutput);
  // }
  

  @Mutation(() => String, { name: 'boardUpdate' })
  async updateBoard(@Args('boardUpdate') updateBoard: UpdateBoard) {
    return await this.boardService.update(updateBoard);
  }    

  @Mutation(() => String, {name: 'boardDelete'})
  deleteBoard(@Args('boardOneInput') boardOneInput: BoardOneInput) {
    return this.boardService.delete(boardOneInput);
  }
}
