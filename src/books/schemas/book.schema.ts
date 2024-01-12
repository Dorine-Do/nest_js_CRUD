
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

import * as mongoose from 'mongoose';
import { Author } from '../../authors/schemas/author.schema';

export type BookDocument = HydratedDocument<Book>;

@Schema()
export class Book {
  @Prop()
  title: string;

  @Prop()
  pages: number;

  @Prop()
  author: string;

  // Liaison avec la table Author
  // @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Author' })
  // author: Author;
}

export const BookSchema = SchemaFactory.createForClass(Book);
