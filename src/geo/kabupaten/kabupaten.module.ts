import { Module } from '@nestjs/common';
import { KabupatenService } from './kabupaten.service';
import { KabupatenController } from './kabupaten.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [KabupatenController],
  providers: [KabupatenService, PrismaService],
})
export class KabupatenModule {}
