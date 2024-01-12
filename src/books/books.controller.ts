import { Controller, Delete, Param, Patch } from '@nestjs/common';
import { Body, Post, Get } from '@nestjs/common';
import { BooksService } from './books.service';
import { BookDocument } from './schemas/book.schema';


@Controller('book')
export class BooksController {
    constructor(private bookService: BooksService){}

    @Post()
    createBook(
        @Body('title') title:string,
        @Body('pages') pages:number,
        @Body('author') author:string,
    ): Promise<BookDocument>
    {
        return this.bookService.createBook(title,pages,author);
    }
    
    @Get()
    findAllBooks(): Promise<BookDocument[]>
    {
        return this.bookService.findAll();
    }
    
    @Get(':id')
    findById(@Param('id') id: string): Promise<BookDocument>
    {
        return this.bookService.findById(id);
    }
    
    @Patch(':id')
    updateBook( 
        @Param('id') id:string,       
        @Body('title') title?:string,
        @Body('pages') pages?:number,
        @Body('author') author?:string
        ): Promise<BookDocument>
    {
        return this.bookService.updateBookById(id,title,pages,author);
    }

    @Delete(':id')
    deleteBook(@Param('id') id:string)
    {
        return this.bookService.deleteBookById(id);
    }

}
