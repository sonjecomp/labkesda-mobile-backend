import { Module } from '@nestjs/common';
import { KelurahanService } from './kelurahan.service';
import { KelurahanController } from './kelurahan.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [KelurahanController],
  providers: [KelurahanService, PrismaService],
})
export class KelurahanModule {}
