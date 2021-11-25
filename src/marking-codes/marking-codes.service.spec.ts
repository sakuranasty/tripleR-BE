import { Test, TestingModule } from '@nestjs/testing';

import { MarkingCodesService } from './marking-codes.service';

describe('MarkingCodesService', () => {
  let service: MarkingCodesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ MarkingCodesService ],
    }).compile();

    service = module.get<MarkingCodesService>(MarkingCodesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
