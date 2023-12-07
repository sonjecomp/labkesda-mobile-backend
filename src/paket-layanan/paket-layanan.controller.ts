import { Controller, Get, Param } from '@nestjs/common';
import { PaketLayananService } from './paket-layanan.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('paket-layanan')
@Controller()
export class PaketLayananController {
  constructor(private readonly paketLayananService: PaketLayananService) {}

  @Get()
  findAll() {
    return this.paketLayananService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.paketLayananService.findOne(+id);
  }
}
