import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PemeriksaanModule } from './pemeriksaan/pemeriksaan.module';

@Module({
  imports: [PemeriksaanModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
