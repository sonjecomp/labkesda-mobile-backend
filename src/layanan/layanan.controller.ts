import { Controller, Get, Param, Query } from '@nestjs/common';
import { LayananService } from './layanan.service';
import { ApiQuery, ApiTags } from '@nestjs/swagger';

@ApiTags('layanan')
@Controller()
export class LayananController {
  constructor(private readonly layananService: LayananService) {}

  @Get()
  @ApiQuery({ name: 'page', required: false })
  findAll(@Query('page') page: string) {
    return this.layananService.findAll(+page);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.layananService.findOne(+id);
  }
}
