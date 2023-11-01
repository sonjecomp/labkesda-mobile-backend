import { Test, TestingModule } from '@nestjs/testing';
import { PemeriksaanService } from './pemeriksaan.service';

describe('PemeriksaanService', () => {
  let service: PemeriksaanService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PemeriksaanService],
    }).compile();

    service = module.get<PemeriksaanService>(PemeriksaanService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
