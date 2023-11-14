import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { UserPasienService } from './user-pasien.service';
import { CreateUserPasienDto } from './dto/create-user-pasien.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('user-pasien')
@Controller()
export class UserPasienController {
  constructor(private readonly userPasienService: UserPasienService) {}

  @Post()
  create(@Body() createUserPasienDto: CreateUserPasienDto) {
    return this.userPasienService.create(createUserPasienDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userPasienService.findOne(+id);
  }
}
