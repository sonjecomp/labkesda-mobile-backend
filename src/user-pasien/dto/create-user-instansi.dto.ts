import { ApiProperty } from '@nestjs/swagger';

export class CreateUserInstansiDto {
  @ApiProperty()
  name_instansi: string;

  @ApiProperty()
  name_petugas: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  nik: string;

  @ApiProperty()
  noHP: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  alamat_domisili: string;

  @ApiProperty()
  jenis_kelamin_id: bigint;
}
