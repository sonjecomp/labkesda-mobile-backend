import { Controller, Get, Param } from '@nestjs/common';
import { JenisLayananService } from './jenis-layanan.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('jenis-layanan')
@Controller()
export class JenisLayananController {
  constructor(private readonly jenisLayananService: JenisLayananService) {}

  @Get()
  findAll() {
    return this.jenisLayananService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.jenisLayananService.findOne(+id);
  }
}
