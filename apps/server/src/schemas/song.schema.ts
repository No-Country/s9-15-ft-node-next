import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, HydratedDocument, Types } from 'mongoose';
import { User } from './user.schema';
import * as autoIncrement from 'mongoose-plugin-autoinc';

export type SongDocument = HydratedDocument<Song>;

@Schema()
export class Song extends Document {
  @Prop({ required: true })
  name: string;
  @Prop({ required: true })
  duration: number;
  @Prop({ type: Types.ObjectId, ref: 'UserSchema', required: true })
  user: User;
  @Prop({})
  coArtist: string;
  @Prop({ required: true })
  price: number;
  @Prop({ required: true })
  genre: string;
  @Prop({})
  image: string;
  @Prop({ required: true })
  date: Date;
  @Prop({ required: true })
  album: string;
  @Prop()
  src: string;
}
export const SongSchema = SchemaFactory.createForClass(Song);
