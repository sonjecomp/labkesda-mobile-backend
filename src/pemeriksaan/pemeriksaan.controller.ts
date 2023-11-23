import { Controller, Post, Body, Get } from '@nestjs/common';
import { PemeriksaanService } from './pemeriksaan.service';
import { CreatePemeriksaanDto } from './dto/create-pemeriksaan.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('pemeriksaan')
@Controller()
export class PemeriksaanController {
  constructor(private readonly pemeriksaanService: PemeriksaanService) {}

  @Post()
  create(@Body() createPemeriksaanDto: CreatePemeriksaanDto) {
    return this.pemeriksaanService.create(createPemeriksaanDto);
  }

  @Get('kode-pendaftaran')
  getLatestKodePendaftaran() {
    return this.pemeriksaanService.generateKodePendaftaran();
  }

  @Get('kode-pemeriksaan')
  getLatestKodePemeriksaan() {
    return this.pemeriksaanService.generateKodePemeriksaan(true);
  }
}
