import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { AntrianPasienService } from './antrian-pasien.service';
import { CreateAntrianPasienDto } from './dto/create-antrian-pasien.dto';
import { ApiExcludeEndpoint, ApiTags } from '@nestjs/swagger';

@ApiTags('antrian-pasien')
@Controller()
export class AntrianPasienController {
  constructor(private readonly antrianPasienService: AntrianPasienService) {}

  @ApiExcludeEndpoint()
  @Post()
  create(@Body() createAntrianPasienDto: CreateAntrianPasienDto) {
    return this.antrianPasienService.create(createAntrianPasienDto);
  }

  @ApiExcludeEndpoint()
  @Get()
  findAll() {
    return this.antrianPasienService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.antrianPasienService.findOne(+id);
  }
}
