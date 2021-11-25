import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MarkingCode, MarkingCodeSchema } from 'src/schemas/marking-code.schema';

import { MarkingCodesService } from './marking-codes.service';
import { MarkingCodesController } from './marking-codes.controller';

@Module({
  imports    : [ MongooseModule.forFeature([ { name: MarkingCode.name, schema: MarkingCodeSchema } ]) ],
  controllers: [ MarkingCodesController ],
  providers  : [ MarkingCodesService ]
})
export class MarkingCodesModule {}
