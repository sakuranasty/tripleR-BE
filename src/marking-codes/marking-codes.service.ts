import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { plainToInstance } from 'class-transformer';
import { Model } from 'mongoose';
import { MarkingCode, MarkingCodeDocument } from 'src/schemas/marking-code.schema';

@Injectable()
export class MarkingCodesService {
  constructor(@InjectModel(MarkingCode.name) private readonly model: Model<MarkingCodeDocument>) {};

  create(markingCodes: Partial<MarkingCode>[]) {
    return this.model.create(plainToInstance(MarkingCode, markingCodes));
  }

  findAll() {
    return this.model.find().exec();
  }

  findOne(id: string) {
    return this.model.findById(id);
  }

  update(id: string, markingCodes: Partial<MarkingCode>) {
    return this.model.findByIdAndUpdate(id, markingCodes);
  }

  remove(id: string) {
    return this.model.remove({ _id: id });
  }
}
