import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PemeriksaanService } from './pemeriksaan.service';
import { CreatePemeriksaanDto } from './dto/create-pemeriksaan.dto';
import { UpdatePemeriksaanDto } from './dto/update-pemeriksaan.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('pemeriksaan')
@Controller()
export class PemeriksaanController {
  constructor(private readonly pemeriksaanService: PemeriksaanService) {}

  @Post()
  create(@Body() createPemeriksaanDto: CreatePemeriksaanDto) {
    return this.pemeriksaanService.create(createPemeriksaanDto);
  }

  @Get()
  findAll() {
    return this.pemeriksaanService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pemeriksaanService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updatePemeriksaanDto: UpdatePemeriksaanDto,
  ) {
    return this.pemeriksaanService.update(+id, updatePemeriksaanDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pemeriksaanService.remove(+id);
  }
}
