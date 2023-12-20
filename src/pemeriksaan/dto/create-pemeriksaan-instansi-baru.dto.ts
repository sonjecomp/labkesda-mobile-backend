import { ApiProperty } from '@nestjs/swagger';
import { CreateAntrianPasienDto } from 'src/antrian-pasien/dto/create-antrian-pasien.dto';
import { CreateUserInstansiDto } from 'src/user-pasien/dto/create-user-instansi.dto';

export class CreatePemeriksaanInstansiBaruDto {
  @ApiProperty()
  user: CreateUserInstansiDto;

  @ApiProperty()
  pemeriksaan: CreateAntrianPasienDto;
}
