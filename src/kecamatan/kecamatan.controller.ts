import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { KecamatanService } from './kecamatan.service';
import { CreateKecamatanDto } from './dto/create-kecamatan.dto';
import { UpdateKecamatanDto } from './dto/update-kecamatan.dto';
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

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateKecamatanDto: UpdateKecamatanDto,
  ) {
    return this.kecamatanService.update(+id, updateKecamatanDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.kecamatanService.remove(+id);
  }
}
