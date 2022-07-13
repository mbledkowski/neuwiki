import { Test, TestingModule } from '@nestjs/testing';
import { OrbitController } from './orbit.controller';

describe('OrbitController', () => {
  let controller: OrbitController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OrbitController],
    }).compile();

    controller = module.get<OrbitController>(OrbitController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
