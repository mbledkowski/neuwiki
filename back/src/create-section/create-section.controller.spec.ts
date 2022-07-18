import { Test, TestingModule } from '@nestjs/testing';
import { CreateSectionController } from './create-section.controller';

describe('CreateSectionController', () => {
  let controller: CreateSectionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CreateSectionController],
    }).compile();

    controller = module.get<CreateSectionController>(CreateSectionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
