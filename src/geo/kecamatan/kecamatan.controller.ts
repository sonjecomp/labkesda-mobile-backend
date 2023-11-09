import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { KecamatanService } from './kecamatan.service';
import { CreateKecamatanDto } from './dto/create-kecamatan.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('geo')
@Controller()
export class KecamatanController {
  constructor(private readonly kecamatanService: KecamatanService) {}

  @Post()
  create(@Body() createKecamatanDto: CreateKecamatanDto) {
    return this.kecamatanService.create(createKecamatanDto);
  }

  @Get()
  findAll() {
    return this.kecamatanService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.kecamatanService.findOne(+id);
  }
}
