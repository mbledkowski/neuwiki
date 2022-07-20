import { Test, TestingModule } from '@nestjs/testing';
import { EditSectionController } from './edit-section.controller';

describe('EditSectionController', () => {
  let controller: EditSectionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EditSectionController],
    }).compile();

    controller = module.get<EditSectionController>(EditSectionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
