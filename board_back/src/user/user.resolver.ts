import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { UserService } from './user.service';
import { User } from './entities/user.entity';
import { CreateUserInput } from './dto/create-user.input';
// import { UpdateUserInput } from './dto/update-user.input';
import { LoginInput } from './dto/user.login';

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Mutation(() => User)
  createUser(
    @Args('createUserInput') createUserInput: CreateUserInput,
  ) {
    return this.userService.create(createUserInput);
  }

  @Query(() => Boolean, {name: 'userCheck'})
  login(@Args('loginInput') loginInput: LoginInput) {
    const result = this.userService.login(loginInput);
    return result;
  }

  // @Query(() => Boolean, {name: 'userCheck'})
  // logina() {

  //   return false;
  // }

  @Query(() => [User], { name: 'userAll' })
  findAll() {
    return this.userService.findAll();
  }

  @Query(() => User, { name: 'userOne' })
  findOne(@Args('userNum', { type: () => String }) id: string) {
    return this.userService.findOne(id);
  }



  // @Mutation(() => User)
  // updateUser(@Args('updateUserInput') updateUserInput: UpdateUserInput) {
  //   return this.userService.update(updateUserInput.id, updateUserInput);
  // }

  // @Mutation(() => User)
  // removeUser(@Args('id', { type: () => Int }) id: number) {
  //   return this.userService.remove(id);
  // }
}
