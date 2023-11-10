import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AntrianPasienService } from './antrian-pasien.service';
import { CreateAntrianPasienDto } from './dto/create-antrian-pasien.dto';
import { UpdateAntrianPasienDto } from './dto/update-antrian-pasien.dto';

@Controller('antrian-pasien')
export class AntrianPasienController {
  constructor(private readonly antrianPasienService: AntrianPasienService) {}

  @Post()
  create(@Body() createAntrianPasienDto: CreateAntrianPasienDto) {
    return this.antrianPasienService.create(createAntrianPasienDto);
  }

  @Get()
  findAll() {
    return this.antrianPasienService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.antrianPasienService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAntrianPasienDto: UpdateAntrianPasienDto) {
    return this.antrianPasienService.update(+id, updateAntrianPasienDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.antrianPasienService.remove(+id);
  }
}
