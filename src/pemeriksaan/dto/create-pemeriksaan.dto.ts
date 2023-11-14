import { ApiProperty } from '@nestjs/swagger';
import { CreateUserPasienDto } from 'src/user-pasien/dto/create-user-pasien.dto';
import { CreateAntrianPasienDto } from 'src/antrian-pasien/dto/create-antrian-pasien.dto';

export class CreatePemeriksaanDto {
  @ApiProperty()
  user: CreateUserPasienDto;

  @ApiProperty()
  pemeriksaan: CreateAntrianPasienDto;
}
