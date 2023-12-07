import { Module } from '@nestjs/common';
import { PaketLayananService } from './paket-layanan.service';
import { PaketLayananController } from './paket-layanan.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { LayananModule } from 'src/layanan/layanan.module';
import { LayananService } from 'src/layanan/layanan.service';

@Module({
  controllers: [PaketLayananController],
  providers: [PaketLayananService, PrismaService, LayananService],
  imports: [LayananModule],
})
export class PaketLayananModule {}
