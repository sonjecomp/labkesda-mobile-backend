import { Module } from '@nestjs/common';
import { PemeriksaanService } from './pemeriksaan.service';
import { PemeriksaanController } from './pemeriksaan.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [PemeriksaanController],
  providers: [PemeriksaanService, PrismaService],
})
export class PemeriksaanModule {}
