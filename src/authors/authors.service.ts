import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Model } from 'mongoose';
import { AuthorDocument } from './schemas/Author.schema';
import { nextTick } from 'process';

@Injectable()
export class AuthorsService {
    constructor(@InjectModel('Author') private authorModel: Model<AuthorDocument>) {}


        async createAuthor(firstName:string, lastName:string, age:number): Promise<AuthorDocument>
        {
            const newAuthor = new this.authorModel({firstName, lastName, age});
            return newAuthor.save()
        }

        async findAll(): Promise<AuthorDocument[]>
        {
            return this.authorModel.find().exec();
        }
        
        async findById(id:string): Promise<AuthorDocument>
        {
            return this.authorModel.findById(id).exec();
        }
        
        async updateAuthorById(id: string, newFirstName:string, newLastName:string, newAge:number): Promise<AuthorDocument>
        {
            let currentAuthor = await this.findById(id)

            currentAuthor.firstName = newFirstName ?? currentAuthor.firstName;
            currentAuthor.lastName = newLastName ?? currentAuthor.lastName;
            currentAuthor.age = newAge ?? currentAuthor.age;

            return currentAuthor.save();
        }

        async deleteAuthorById(id:string)
        {
            return this.authorModel.deleteOne({_id : id}).exec();
        }

}
