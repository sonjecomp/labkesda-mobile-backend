import { Controller, Get, Param, Query } from '@nestjs/common';
import { PaketLayananService } from './paket-layanan.service';
import { ApiQuery, ApiTags } from '@nestjs/swagger';

@ApiTags('paket-layanan')
@Controller()
export class PaketLayananController {
  constructor(private readonly paketLayananService: PaketLayananService) {}

  @Get()
  @ApiQuery({ name: 'page', required: false })
  findAll(@Query('page') page: string) {
    return this.paketLayananService.findAll(+page);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.paketLayananService.findOne(+id);
  }
}
