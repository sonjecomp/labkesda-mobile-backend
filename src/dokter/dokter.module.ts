import { Module } from '@nestjs/common';
import { DokterService } from './dokter.service';
import { DokterController } from './dokter.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [DokterController],
  providers: [DokterService, PrismaService],
})
export class DokterModule {}
