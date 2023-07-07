import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

@Schema({ timestamps: true })
export class Playlist {
  // @Prop({ type: [{ type: MongooseSchema.Types.ObjectId, ref: Song.name }] })
  // songs: Song[]; // Relación con el esquema de songs

  @Prop({ required: true })
  songs: string[]; // Relación con el esquema de songs

  @Prop({ required: true })
  duration: number;

  @Prop({ required: true })
  name: string;

  @Prop()
  description: string;

  @Prop()
  image: string;

  // @Prop({ type: MongooseSchema.Types.ObjectId, ref: User.name })
  // user: User; // Relación con el esquema de users

  @Prop({ required: true })
  user: string;

  @Prop({ default: Date.now })
  creationDate: Date;
}

export const PlaylistSchema = SchemaFactory.createForClass(Playlist);
export type PlaylistDocument = HydratedDocument<Playlist>;
