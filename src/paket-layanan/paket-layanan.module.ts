import { Module } from '@nestjs/common';
import { PaketLayananService } from './paket-layanan.service';
import { PaketLayananController } from './paket-layanan.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [PaketLayananController],
  providers: [PaketLayananService, PrismaService],
})
export class PaketLayananModule {}
