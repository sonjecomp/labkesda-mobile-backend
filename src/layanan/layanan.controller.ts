import { Controller, Get, Param } from '@nestjs/common';
import { LayananService } from './layanan.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('layanan')
@Controller()
export class LayananController {
  constructor(private readonly layananService: LayananService) {}

  @Get()
  findAll() {
    return this.layananService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.layananService.findOne(+id);
  }
}
