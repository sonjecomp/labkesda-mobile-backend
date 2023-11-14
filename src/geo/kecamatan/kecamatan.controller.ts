import { Controller, Get, Post, Body, Param, Query } from '@nestjs/common';
import { KecamatanService } from './kecamatan.service';
import { CreateKecamatanDto } from './dto/create-kecamatan.dto';
import { ApiExcludeEndpoint, ApiTags } from '@nestjs/swagger';

@ApiTags('geo')
@Controller()
export class KecamatanController {
  constructor(private readonly kecamatanService: KecamatanService) {}

  @ApiExcludeEndpoint()
  @Post()
  async create(@Body() createKecamatanDto: CreateKecamatanDto) {
    return await this.kecamatanService.create(createKecamatanDto);
  }

  @Get()
  async findAll(@Query('kabupaten_id') id: string) {
    return await this.kecamatanService.findAll(+id);
  }

  @ApiExcludeEndpoint()
  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.kecamatanService.findOne(id);
  }
}
