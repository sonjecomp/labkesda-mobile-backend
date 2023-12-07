import { Module } from '@nestjs/common';
import { JenisLayananService } from './jenis-layanan.service';
import { JenisLayananController } from './jenis-layanan.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [JenisLayananController],
  providers: [JenisLayananService, PrismaService],
})
export class JenisLayananModule {}
