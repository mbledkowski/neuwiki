import { Test, TestingModule } from '@nestjs/testing';
import { FetchSectionController } from './fetch-section.controller';

describe('FetchSectionController', () => {
  let controller: FetchSectionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FetchSectionController],
    }).compile();

    controller = module.get<FetchSectionController>(FetchSectionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
