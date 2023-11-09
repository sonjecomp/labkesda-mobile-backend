import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { KelurahanService } from './kelurahan.service';
import { CreateKelurahanDto } from './dto/create-kelurahan.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('geo')
@Controller()
export class KelurahanController {
  constructor(private readonly kelurahanService: KelurahanService) {}

  @Post()
  create(@Body() createKelurahanDto: CreateKelurahanDto) {
    return this.kelurahanService.create(createKelurahanDto);
  }

  @Get()
  findAll() {
    return this.kelurahanService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.kelurahanService.findOne(+id);
  }
}
