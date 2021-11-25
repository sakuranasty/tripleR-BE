import { ObjectId } from 'mongodb';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Transform, TransformPlainToInstance, Type } from 'class-transformer';
import { IsMongoId, IsNumber, IsString } from 'class-validator';

export type MarkingCodeDocument = MarkingCode & Document;

@Schema()
export class MarkingCode {
  @IsMongoId()
  @Type(() => Types.ObjectId)
  @Prop({ type: Types.ObjectId })
  @Transform(({ value }) => new ObjectId(value))
  _id: ObjectId;

  @IsNumber()
  @Prop()
  code: number;

  @IsString()
  @Prop()
  key: string;

  @IsMongoId()
  @Type(() => Types.ObjectId)
  @Prop({ type: Types.ObjectId })
  recyclableType: ObjectId;

  @IsString()
  @Prop()
  name: string;
}

export const MarkingCodeSchema = SchemaFactory.createForClass(MarkingCode);
