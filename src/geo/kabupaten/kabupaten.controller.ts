import { Controller, Get, Post, Body, Param, Query } from '@nestjs/common';
import { KabupatenService } from './kabupaten.service';
import { CreateKabupatenDto } from './dto/create-kabupaten.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('geo')
@Controller()
export class KabupatenController {
  constructor(private readonly kabupatenService: KabupatenService) {}

  @Post()
  async create(@Body() createKabupatenDto: CreateKabupatenDto) {
    return await this.kabupatenService.create(createKabupatenDto);
  }

  @Get()
  async findAll(@Query('provinsi_id') id: string) {
    return await this.kabupatenService.findAll(+id);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.kabupatenService.findOne(+id);
  }
}
