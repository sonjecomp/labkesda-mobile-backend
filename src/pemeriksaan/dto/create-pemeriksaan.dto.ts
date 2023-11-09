import { ApiProperty } from '@nestjs/swagger';
import { CreateUserPasienDto } from 'src/user-pasien/dto/create-user-pasien.dto';
import { PemeriksaanDto } from './pemeriksaan-dto';

export class CreatePemeriksaanDto {
  @ApiProperty()
  pemeriksaan: PemeriksaanDto;
  @ApiProperty()
  user: CreateUserPasienDto;
}
