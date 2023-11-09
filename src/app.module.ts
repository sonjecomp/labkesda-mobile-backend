import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PemeriksaanModule } from './pemeriksaan/pemeriksaan.module';
import { RouterModule } from '@nestjs/core';
import { ProvinsiModule } from './provinsi/provinsi.module';
import { KabupatenModule } from './kabupaten/kabupaten.module';
import { KecamatanModule } from './kecamatan/kecamatan.module';
import { KelurahanModule } from './kelurahan/kelurahan.module';

@Module({
  imports: [
    PemeriksaanModule,
    RouterModule.register([
      {
        path: 'api/v1',
        children: [
          {
            path: 'pemeriksaan',
            module: PemeriksaanModule,
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
    ProvinsiModule,
    KabupatenModule,
    KecamatanModule,
    KelurahanModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
