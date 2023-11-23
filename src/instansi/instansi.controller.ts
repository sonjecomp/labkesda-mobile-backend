import { Controller, Get, Param } from '@nestjs/common';
import { InstansiService } from './instansi.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('instansi')
@Controller()
export class InstansiController {
  constructor(private readonly instansiService: InstansiService) {}

  @Get()
  findAll() {
    return this.instansiService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.instansiService.findOne(+id);
  }
}
