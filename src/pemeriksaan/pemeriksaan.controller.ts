import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { PemeriksaanService } from './pemeriksaan.service';
import { CreatePemeriksaanDto } from './dto/create-pemeriksaan.dto';
import { ApiTags } from '@nestjs/swagger';
import { CreatePemeriksaanPasienLamaDto } from './dto/create-pemeriksaan-pasien-lama.dto';

@ApiTags('pemeriksaan')
@Controller()
export class PemeriksaanController {
  constructor(private readonly pemeriksaanService: PemeriksaanService) {}

  @Post('create-pemeriksaan-pasien-baru')
  createPasienBaru(@Body() createPemeriksaanDto: CreatePemeriksaanDto) {
    return this.pemeriksaanService.createPasienBaru(createPemeriksaanDto);
  }

  @Post('create-pemeriksaan-pasien-lama')
  createPasienLama(
    @Body() createPemeriksaanPasienLama: CreatePemeriksaanPasienLamaDto,
  ) {
    return this.pemeriksaanService.createPasienLama(
      createPemeriksaanPasienLama,
    );
  }

  // @Post('create-pemeriksaan-instansi-baru')
  // createInstansiBaru(@Body() createPemeriksaanDto: CreatePemeriksaanDto) {
  //   return this.pemeriksaanService.create(createPemeriksaanDto);
  // }

  // @Post('create-pemeriksaan-instansi-lama')
  // createInstansiLama(@Body() createPemeriksaanDto: CreatePemeriksaanDto) {
  //   return this.pemeriksaanService.create(createPemeriksaanDto);
  // }

  @Get('riwayat-pemeriksaan/:kodePendaftaran')
  getLatestKodePendaftaran(@Param('kodePendaftaran') kodePendaftaran: string) {
    return this.pemeriksaanService.getRiwayatPemeriksaan(kodePendaftaran);
  }
}
