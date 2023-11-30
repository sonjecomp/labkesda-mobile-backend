import { Controller, Get, Param } from '@nestjs/common';
import { LayananService } from './layanan.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('layanan')
@Controller()
export class LayananController {
  constructor(private readonly layananService: LayananService) {}

  // @Post()
  // create(@Body() createLayananDto: CreateLayananDto) {
  //   return this.layananService.create(createLayananDto);
  // }

  @Get()
  findAll() {
    return this.layananService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.layananService.findOne(+id);
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateLayananDto: UpdateLayananDto) {
  //   return this.layananService.update(+id, updateLayananDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.layananService.remove(+id);
  // }
}
