import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types, Schema as MongooseSchema } from 'mongoose';
import { Song } from './song.schema';

@Schema({ timestamps: true })
export class User extends Document {
  @Prop()
  name: string;

  @Prop()
  surname: string;

  @Prop({ default: false })
  artist: boolean;

  @Prop({ unique: true })
  username: string;

  @Prop({
    default:
      'https://asset.cloudinary.com/dnemqmc7a/05b35cf73934f1746f6a2845259369f5',
  })
  image: string;

  @Prop({ type: [{ type: Types.ObjectId }] })
  favoriteArtists: string[]; // Array de IDs de artistas favoritos

  @Prop({ unique: true })
  email: string;

  @Prop()
  password: string;

  @Prop({ type: [{ type: MongooseSchema.Types.ObjectId, ref: 'Song' }] })
  songsPurchased: Song[];

  @Prop({ type: [{ type: MongooseSchema.Types.ObjectId, ref: 'Song' }] })
  songsUplodaded: Song[];
}

export const UserSchema = SchemaFactory.createForClass(User);
