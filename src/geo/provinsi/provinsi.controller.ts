import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { ProvinsiService } from './provinsi.service';
import { CreateProvinsiDto } from './dto/create-provinsi.dto';
import { ApiExcludeEndpoint, ApiTags } from '@nestjs/swagger';

@ApiTags('geo')
@Controller()
export class ProvinsiController {
  constructor(private readonly provinsiService: ProvinsiService) {}

  @ApiExcludeEndpoint()
  @Post()
  async create(@Body() createProvinsiDto: CreateProvinsiDto) {
    return await this.provinsiService.create(createProvinsiDto);
  }

  @Get()
  async findAll() {
    return await this.provinsiService.findAll();
  }

  @ApiExcludeEndpoint()
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.provinsiService.findOne(+id);
  }
}
