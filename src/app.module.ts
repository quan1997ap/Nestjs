import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { RouterModule, Routes } from '@nestjs/core';
import { BookModule } from './modules/book/book.module';
import { UserModule } from './user/user.module';
import { UserModule } from './user/user.module';

const routes: Routes = [
  {
    path: 'books',
    module: BookModule,
  }
];

@Module({
  imports: [
    // Setup routing
    BookModule,
    RouterModule.register(routes),
    // This method accepts the same configuration object as mongoose.connect().
    MongooseModule.forRoot('mongodb://localhost:27017/json-schema'),
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
