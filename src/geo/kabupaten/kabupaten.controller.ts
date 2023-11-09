import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { KabupatenService } from './kabupaten.service';
import { CreateKabupatenDto } from './dto/create-kabupaten.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('geo')
@Controller()
export class KabupatenController {
  constructor(private readonly kabupatenService: KabupatenService) {}

  @Post()
  create(@Body() createKabupatenDto: CreateKabupatenDto) {
    return this.kabupatenService.create(createKabupatenDto);
  }

  @Get()
  findAll() {
    return this.kabupatenService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.kabupatenService.findOne(+id);
  }
}
