import { Module } from '@nestjs/common';
import { KelurahanService } from './kelurahan.service';
import { KelurahanController } from './kelurahan.controller';

@Module({
  controllers: [KelurahanController],
  providers: [KelurahanService],
})
export class KelurahanModule {}
