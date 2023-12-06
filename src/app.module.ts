import { Module } from '@nestjs/common';
import { PemeriksaanModule } from './pemeriksaan/pemeriksaan.module';
import { RouterModule } from '@nestjs/core';
import { ProvinsiModule } from './geo/provinsi/provinsi.module';
import { KabupatenModule } from './geo/kabupaten/kabupaten.module';
import { KecamatanModule } from './geo/kecamatan/kecamatan.module';
import { KelurahanModule } from './geo/kelurahan/kelurahan.module';
import { UserPasienModule } from './user-pasien/user-pasien.module';
import { PrismaService } from './prisma/prisma.service';
import { AntrianPasienModule } from './antrian-pasien/antrian-pasien.module';
import { CategoryModule } from './category/category.module';
import { DokterModule } from './dokter/dokter.module';
import { InstansiModule } from './instansi/instansi.module';
import { PromoModule } from './promo/promo.module';
import { LayananModule } from './layanan/layanan.module';

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
            path: 'category',
            module: CategoryModule,
          },
          {
            path: 'dokter',
            module: DokterModule,
          },
          {
            path: 'instansi',
            module: InstansiModule,
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
          {
            path: 'promo',
            module: PromoModule,
          },
          {
            path: 'layanan',
            module: LayananModule,
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
    CategoryModule,
    DokterModule,
    InstansiModule,
    PromoModule,
    LayananModule,
  ],
  providers: [PrismaService],
})
export class AppModule {}
