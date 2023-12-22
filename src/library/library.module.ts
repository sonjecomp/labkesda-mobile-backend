import { Module } from '@nestjs/common';
import { LibraryService } from './library.service';
import { LibraryController } from './library.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [LibraryController],
  providers: [LibraryService, PrismaService],
})
export class LibraryModule {}
