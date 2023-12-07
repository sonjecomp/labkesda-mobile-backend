import { Module } from '@nestjs/common';
import { LayananService } from './layanan.service';
import { LayananController } from './layanan.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [LayananController],
  providers: [LayananService, PrismaService],
  exports: [LayananService],
})
export class LayananModule {}
