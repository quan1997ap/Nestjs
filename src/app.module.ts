import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { RouterModule, Routes } from '@nestjs/core';
import { BookModule } from './book/book.module';

const routes: Routes = [
  {
    path: 'books',
    module: BookModule,
  },
  {
    path: 'users',
    module: UsersModule,
  },
];

@Module({
  imports: [
    // Setup routing
    BookModule,
    UsersModule,
    RouterModule.register(routes),
    // This method accepts the same configuration object as mongoose.connect().
    MongooseModule.forRoot('mongodb://localhost:27017/json-schema'),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
