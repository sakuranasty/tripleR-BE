import { Test, TestingModule } from '@nestjs/testing';

import { MarkingCodesController } from './marking-codes.controller';
import { MarkingCodesService } from './marking-codes.service';

describe('MarkingCodesController', () => {
  let controller: MarkingCodesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ MarkingCodesController ],
      providers  : [ MarkingCodesService ],
    }).compile();

    controller = module.get<MarkingCodesController>(MarkingCodesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
