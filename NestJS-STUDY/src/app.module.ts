import { Module } from '@nestjs/common';
import { BoardModule } from './board/board.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver } from '@nestjs/apollo';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeormConfig } from './configs/typeorm.config';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
import { MemberModule } from './member/member.module';
import { DepartmentModule } from './department/department.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeormConfig),
    BoardModule,
    GraphQLModule.forRoot({
      driver: ApolloDriver,
      autoSchemaFile: 'src/common/graphql/schema.gql',
      context: ({ req, res }) => ({ req, res }),
    }),
    MemberModule,
    DepartmentModule,
  ],
  // controllers: [AppController],
  // providers: [AppService],
})
export class AppModule {}
