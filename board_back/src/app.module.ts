import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver } from '@nestjs/apollo';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeormConfig } from './configs/typeorm.config';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
import { BoardModule } from './board/board.module';
import { UserModule } from './user/user.module';
import { DepartmentModule } from './department/department.module';
import { FileModule } from './file/file.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeormConfig),
    GraphQLModule.forRoot({
      driver: ApolloDriver,
      autoSchemaFile: 'src/common/graphql/schema.gql',
      context: ({ req, res }) => ({ req, res }),
    }),
    BoardModule,
    UserModule,
    DepartmentModule,
    FileModule,
  ],
  // controllers: [AppController],
  // providers: [AppService],
})
export class AppModule {}
