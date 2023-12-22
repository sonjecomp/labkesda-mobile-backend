import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { PemeriksaanService } from './pemeriksaan.service';
import { CreatePemeriksaanDto } from './dto/create-pemeriksaan.dto';
import { ApiTags } from '@nestjs/swagger';
import { CreatePemeriksaanPasienLamaDto } from './dto/create-pemeriksaan-pasien-lama.dto';
import { CreatePemeriksaanInstansiBaruDto } from './dto/create-pemeriksaan-instansi-baru.dto';

@ApiTags('pemeriksaan')
@Controller()
export class PemeriksaanController {
  constructor(private readonly pemeriksaanService: PemeriksaanService) {}

  @Get()
  findAll() {
    return this.pemeriksaanService.findAll();
  }

  @Get('user')
  findAllUser() {
    return this.pemeriksaanService.findAllUser();
  }

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

  @Post('create-pemeriksaan-instansi-baru')
  createInstansiBaru(
    @Body() createPemeriksaanDto: CreatePemeriksaanInstansiBaruDto,
  ) {
    return this.pemeriksaanService.createPemeriksaanInstansiBaru(
      createPemeriksaanDto,
    );
  }

  @Post('create-pemeriksaan-instansi-lama')
  createInstansiLama(
    @Body() createPemeriksaanPasienLama: CreatePemeriksaanPasienLamaDto,
  ) {
    return this.pemeriksaanService.createPasienLama(
      createPemeriksaanPasienLama,
    );
  }

  @Get('riwayat-pemeriksaan/:kodePendaftaran')
  getLatestKodePendaftaran(@Param('kodePendaftaran') kodePendaftaran: string) {
    return this.pemeriksaanService.getRiwayatPemeriksaan(kodePendaftaran);
  }

  @Get('hasil-pemeriksaan/:kodePemeriksaan')
  getHasilPemeriksaan(@Param('kodePemeriksaan') kodePemeriksaan: string) {
    return this.pemeriksaanService.getHasilPemeriksaan(kodePemeriksaan);
  }

  @Get('check-kode-pendaftaran/:kodePendaftaran')
  checkKodePendaftaran(@Param('kodePendaftaran') kodePendaftaran: string) {
    return this.pemeriksaanService.checkNikOrKodePendaftaran(kodePendaftaran);
  }
}
