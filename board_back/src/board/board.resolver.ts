import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { BoardService } from './board.service';
import { Board } from './entities/board.entity';
import { CreateBoardInput } from './dto/create-board.input';
import { UpdateBoardInput } from './dto/update-board.input';
import { BoardOneInput } from './dto/board-one.input';

@Resolver(() => Board)
export class BoardResolver {
  constructor(private readonly boardService: BoardService) {}

  @Mutation(() => Board)
  createBoard(@Args('createBoardInput') createBoardInput: CreateBoardInput) {
    return this.boardService.create(createBoardInput);
  }

  @Query(() => [Board], { name: 'boardAll' })
  findAll() {
    return this.boardService.findAll();
  }

  @Query(() => Board, { name: 'boardOne' })
  findOne(@Args('boardOneInput') boardOneInput: BoardOneInput) {
    return this.boardService.findOne(boardOneInput);
  }

  // @Mutation(() => Board)
  // updateBoard(@Args('updateBoardInput') updateBoardInput: UpdateBoardInput) {
  //   return this.boardService.update(updateBoardInput.id, updateBoardInput);
  // }

  // @Mutation(() => Board)
  // removeBoard(@Args('id', { type: () => Int }) id: number) {
  //   return this.boardService.remove(id);
  // }
}
