import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PemeriksaanModule } from './pemeriksaan/pemeriksaan.module';
import { RouterModule } from '@nestjs/core';
import { ProvinsiModule } from './geo/provinsi/provinsi.module';
import { KabupatenModule } from './geo/kabupaten/kabupaten.module';
import { KecamatanModule } from './geo/kecamatan/kecamatan.module';
import { KelurahanModule } from './geo/kelurahan/kelurahan.module';
import { UserPasienModule } from './user-pasien/user-pasien.module';
import { PrismaService } from './prisma/prisma.service';
import { AntrianPasienModule } from './antrian-pasien/antrian-pasien.module';

@Module({
  imports: [
    RouterModule.register([
      {
        path: 'api/v1',
        children: [
          {
            path: 'pemeriksaan',
            module: PemeriksaanModule,
          },
          {
            path: 'user-pasien',
            module: UserPasienModule,
          },
          {
            path: 'geo',
            children: [
              {
                path: 'provinsi',
                module: ProvinsiModule,
              },
              {
                path: 'kabupaten',
                module: KabupatenModule,
              },
              {
                path: 'kecamatan',
                module: KecamatanModule,
              },
              {
                path: 'kelurahan',
                module: KelurahanModule,
              },
            ],
          },
        ],
      },
    ]),
    PemeriksaanModule,
    ProvinsiModule,
    KabupatenModule,
    KecamatanModule,
    KelurahanModule,
    UserPasienModule,
    AntrianPasienModule,
  ],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
