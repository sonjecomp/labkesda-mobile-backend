import { Controller, Get, Post, Body, Param, Query } from '@nestjs/common';
import { KelurahanService } from './kelurahan.service';
import { CreateKelurahanDto } from './dto/create-kelurahan.dto';
import { ApiExcludeEndpoint, ApiTags } from '@nestjs/swagger';

@ApiTags('geo')
@Controller()
export class KelurahanController {
  constructor(private readonly kelurahanService: KelurahanService) {}

  @ApiExcludeEndpoint()
  @Post()
  async create(@Body() createKelurahanDto: CreateKelurahanDto) {
    return await this.kelurahanService.create(createKelurahanDto);
  }

  @Get()
  findAll(@Query('kecamatan_id') id: string) {
    return this.kelurahanService.findAll(+id);
  }

  @ApiExcludeEndpoint()
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.kelurahanService.findOne(+id);
  }
}
