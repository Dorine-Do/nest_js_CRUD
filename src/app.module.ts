import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BooksModule } from './books/books.module';
import { AuthorsModule } from './authors/authors.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://user:password@mongodb:27017/nestjs-mongodb-api'), BooksModule, AuthorsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
