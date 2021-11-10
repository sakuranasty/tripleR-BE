import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type MarkingCodeDocument = MarkingCode & Document;

@Schema()
export class MarkingCode {
  @Prop()
  _id: Types.ObjectId;

  @Prop()
  code: number;

  @Prop()
  key: string;

  @Prop()
  recyclableType: Types.ObjectId;

  @Prop()
  name: string;
}

export const MarkingCodeSchema = SchemaFactory.createForClass(MarkingCode);
