import { Module } from '@nestjs/common';
import { AntrianPasienService } from './antrian-pasien.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  providers: [AntrianPasienService, PrismaService],
  exports: [AntrianPasienService],
})
export class AntrianPasienModule {}
