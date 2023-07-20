import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

@Schema({ timestamps: true })
export class Album {
  @Prop({ required: true, unique: false }) canciones: string[];
  @Prop({ required: true, unique: false }) duracion: number;
  @Prop({ required: true, unique: true }) nombre: string;
  @Prop({ required: true, unique: false }) descripcion: string;
  @Prop({ required: true, unique: false }) imagen: string;
  @Prop({ required: true, unique: false }) precio: number;
  @Prop({ required: true, unique: false }) usuario: string;
}

export const AlbumSchema = SchemaFactory.createForClass(Album);
