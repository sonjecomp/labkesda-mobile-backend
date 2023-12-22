import { Controller, Get, Param } from '@nestjs/common';
import { LibraryService } from './library.service';
import { ApiTags } from '@nestjs/swagger';

@Controller('')
@ApiTags('library')
export class LibraryController {
  constructor(private readonly libraryService: LibraryService) {}

  @Get()
  findAll() {
    return this.libraryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.libraryService.findOne(+id);
  }
}
