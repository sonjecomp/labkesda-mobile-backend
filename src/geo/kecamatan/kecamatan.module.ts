import { Module } from '@nestjs/common';
import { KecamatanService } from './kecamatan.service';
import { KecamatanController } from './kecamatan.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [KecamatanController],
  providers: [KecamatanService, PrismaService],
})
export class KecamatanModule {}
