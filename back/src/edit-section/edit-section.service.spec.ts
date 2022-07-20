import { Test, TestingModule } from '@nestjs/testing';
import { EditSectionService } from './edit-section.service';

describe('EditSectionService', () => {
  let service: EditSectionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EditSectionService],
    }).compile();

    service = module.get<EditSectionService>(EditSectionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
