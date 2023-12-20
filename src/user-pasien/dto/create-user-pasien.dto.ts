import { ApiProperty } from '@nestjs/swagger';

export class CreateUserPasienDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  tempat_lahir: string;

  @ApiProperty()
  tanggal_lahir: Date;

  @ApiProperty()
  nik: string;

  @ApiProperty()
  agama: bigint;

  @ApiProperty()
  alamat_domisili: string;

  @ApiProperty()
  jenis_kelamin_id: bigint;

  @ApiProperty()
  golongan_darah_id: bigint;

  @ApiProperty()
  noHP: string;

  @ApiProperty()
  pendidikan_id: bigint;

  @ApiProperty()
  pekerjaan: string;

  @ApiProperty()
  provinsi_id: number;

  @ApiProperty()
  kotaKabupaten_id: bigint;

  @ApiProperty()
  kecamatan_id: bigint;

  @ApiProperty()
  kelurahan_id: bigint;

  @ApiProperty()
  kode_pos: string;

  @ApiProperty()
  status_perkawinan_id: bigint;

  @ApiProperty()
  warga_negara_id: bigint;

  @ApiProperty()
  email: string;
}
