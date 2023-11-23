import { ApiProperty } from '@nestjs/swagger';

export class CreatePemeriksaanPasienLamaDto {
  @ApiProperty()
  kode_pendaftaran: string;

  @ApiProperty()
  tanggal_kunjungan: Date;
}
