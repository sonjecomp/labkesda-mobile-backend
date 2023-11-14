import { Controller, Post, Body } from '@nestjs/common';
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
}
