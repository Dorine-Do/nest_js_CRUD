import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Model } from 'mongoose';
import { BookDocument } from './schemas/book.schema';
import { nextTick } from 'process';

@Injectable()
export class BooksService {
    constructor(@InjectModel('Book') private bookModel: Model<BookDocument>) {}


        async createBook(title:string, pages:number, author:string): Promise<BookDocument>
        {
            const newBook = new this.bookModel({title, pages, author});
            return newBook.save()
        }

        async findAll(): Promise<BookDocument[]>
        {
            return this.bookModel.find().exec();
        }
        
        async findById(id:string): Promise<BookDocument>
        {
            return this.bookModel.findById(id).exec();
        }
        
        async updateBookById(id: string, newTitle:string, newNbPages:number, newAuthor:string): Promise<BookDocument>
        {
            let currentBook = await this.findById(id)

            currentBook.title = newTitle ?? currentBook.title;
            currentBook.pages = newNbPages ?? currentBook.pages;
            currentBook.author = newAuthor ?? currentBook.author;

            return currentBook.save();
        }

        async deleteBookById(id:string)
        {
            return this.bookModel.deleteOne({_id : id}).exec();
        }

}
