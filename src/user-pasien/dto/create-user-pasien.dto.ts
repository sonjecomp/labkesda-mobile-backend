import { ApiProperty } from '@nestjs/swagger';

export class CreateUserPasienDto {
  @ApiProperty()
  nama: string;
  @ApiProperty()
  tempatLahir: string;
  @ApiProperty()
  tanggalLahir: Date;
  @ApiProperty()
  nik: string;
  @ApiProperty()
  agamaId: number;
  @ApiProperty()
  alamat: string;
  @ApiProperty()
  jenisKelaminId: number;
  @ApiProperty()
  golonganDarahId: number;
  @ApiProperty()
  nomorTelepon: string;
  @ApiProperty()
  pendidikanId: number;
  @ApiProperty()
  pekerjaan: string;
  @ApiProperty()
  provinsiId: number;
  @ApiProperty()
  kabupatenId: number;
  @ApiProperty()
  kecamatanId: number;
  @ApiProperty()
  kelurahanId: number;
  @ApiProperty()
  kodePos: string;
  @ApiProperty()
  statusPerkawinanId: number;
  @ApiProperty()
  kewarganegaraanId: number;
  @ApiProperty()
  email: string;
}
