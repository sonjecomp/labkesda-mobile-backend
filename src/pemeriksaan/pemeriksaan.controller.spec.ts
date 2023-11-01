import { Test, TestingModule } from '@nestjs/testing';
import { PemeriksaanController } from './pemeriksaan.controller';
import { PemeriksaanService } from './pemeriksaan.service';

describe('PemeriksaanController', () => {
  let controller: PemeriksaanController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PemeriksaanController],
      providers: [PemeriksaanService],
    }).compile();

    controller = module.get<PemeriksaanController>(PemeriksaanController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
