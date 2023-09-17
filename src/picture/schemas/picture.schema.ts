import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type PictureDocument = HydratedDocument<Picture>;

@Schema()
export class Picture {
  @Prop({ required: true })
  date: Date;

  @Prop()
  verifyData: string;
}

export const PictureSchema = SchemaFactory.createForClass(Picture);
