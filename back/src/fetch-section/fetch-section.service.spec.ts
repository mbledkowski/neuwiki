import { Test, TestingModule } from '@nestjs/testing';
import { FetchSectionService } from './fetch-section.service';

describe('FetchSectionService', () => {
  let service: FetchSectionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FetchSectionService],
    }).compile();

    service = module.get<FetchSectionService>(FetchSectionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
