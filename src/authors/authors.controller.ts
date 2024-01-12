import { Controller, Delete, Param, Patch } from '@nestjs/common';
import { Body, Post, Get } from '@nestjs/common';
import { AuthorsService } from './authors.service';
import { AuthorDocument } from './schemas/author.schema';


@Controller('author')
export class AuthorsController {
    constructor(private authorService: AuthorsService){}

    @Post()
    createAuthor(
        @Body('firstName') firstName:string,
        @Body('lastName') lastName:string,
        @Body('age') age:number,
    ): Promise<AuthorDocument>
    {
        return this.authorService.createAuthor(firstName,lastName,age);
    }
    
    @Get()
    findAllAuthors(): Promise<AuthorDocument[]>
    {
        return this.authorService.findAll();
    }
    
    @Get(':id')
    findById(@Param('id') id: string): Promise<AuthorDocument>
    {
        return this.authorService.findById(id);
    }
    
    @Patch(':id')
    updateAuthor( 
        @Param('id') id:string,       
        @Body('firstName') firstName?:string,
        @Body('lastName') lastName?:string,
        @Body('age') age?:number,
        ): Promise<AuthorDocument>
    {
        return this.authorService.updateAuthorById(id,firstName,lastName,age);
    }

    @Delete(':id')
    deleteAuthor(@Param('id') id:string)
    {
        return this.authorService.deleteAuthorById(id);
    }

}
