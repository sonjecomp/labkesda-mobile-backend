import { ApiProperty } from '@nestjs/swagger';
import { CreateAntrianPasienDto } from 'src/antrian-pasien/dto/create-antrian-pasien.dto';
import { CreateUserLamaDto } from 'src/user-pasien/dto/create-user-lama.dto';

export class CreatePemeriksaanPasienLamaDto {
  @ApiProperty()
  user: CreateUserLamaDto;

  @ApiProperty()
  pemeriksaan: CreateAntrianPasienDto;
}
