import { Module } from '@nestjs/common';
import { InstansiService } from './instansi.service';
import { InstansiController } from './instansi.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [InstansiController],
  providers: [InstansiService, PrismaService],
})
export class InstansiModule {}
