import { Controller, Get, Param } from '@nestjs/common';
import { DokterService } from './dokter.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('dokter')
@Controller()
export class DokterController {
  constructor(private readonly dokterService: DokterService) {}

  @Get()
  findAll() {
    return this.dokterService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.dokterService.findOne(+id);
  }
}
