import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, HydratedDocument } from 'mongoose';

export type TestDocument = HydratedDocument<Test>;

@Schema()
export class Test extends Document {
  @Prop({ required: true })
  name: string;
  @Prop({ required: true })
  lastname: string;
}
export const TestSchema = SchemaFactory.createForClass(Test);
