import { Test, TestingModule } from '@nestjs/testing';
import { PrescriptController } from './prescript.controller';

describe('PrescriptController', () => {
  let controller: PrescriptController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PrescriptController],
    }).compile();

    controller = module.get<PrescriptController>(PrescriptController);
  });

  it('should be defined', () => expect(controller).toBeDefined());
});
