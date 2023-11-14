import { Module } from '@nestjs/common';
import { AntrianPasienService } from './antrian-pasien.service';
import { AntrianPasienController } from './antrian-pasien.controller';

@Module({
  controllers: [AntrianPasienController],
  providers: [AntrianPasienService],
})
export class AntrianPasienModule {}
