import { Module } from '@nestjs/common';
import { KabupatenService } from './kabupaten.service';
import { KabupatenController } from './kabupaten.controller';

@Module({
  controllers: [KabupatenController],
  providers: [KabupatenService],
})
export class KabupatenModule {}
