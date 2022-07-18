import { Test, TestingModule } from '@nestjs/testing';
import { CreateSectionService } from './create-section.service';

describe('CreateSectionService', () => {
  let service: CreateSectionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CreateSectionService],
    }).compile();

    service = module.get<CreateSectionService>(CreateSectionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
