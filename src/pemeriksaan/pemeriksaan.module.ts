import { Module } from '@nestjs/common';
import { PemeriksaanService } from './pemeriksaan.service';
import { PemeriksaanController } from './pemeriksaan.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserPasienModule } from 'src/user-pasien/user-pasien.module';
import { AntrianPasienModule } from 'src/antrian-pasien/antrian-pasien.module';

@Module({
  controllers: [PemeriksaanController],
  providers: [PemeriksaanService, PrismaService],
  imports: [UserPasienModule, AntrianPasienModule],
})
export class PemeriksaanModule {}
