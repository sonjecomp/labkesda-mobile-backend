import { Module } from '@nestjs/common';
import { PemeriksaanService } from './pemeriksaan.service';
import { PemeriksaanController } from './pemeriksaan.controller';

@Module({
  controllers: [PemeriksaanController],
  providers: [PemeriksaanService],
})
export class PemeriksaanModule {}
