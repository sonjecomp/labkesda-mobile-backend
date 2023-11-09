import { ApiProperty } from '@nestjs/swagger';

export class PemeriksaanDto {
  @ApiProperty()
  dokterId: number;
  @ApiProperty()
  lokasiSampel: string;
  @ApiProperty()
  jenisSampel: string;
  @ApiProperty()
  wadahSampel: string;
  @ApiProperty()
  pengambilSampel: string;
  @ApiProperty()
  tanggalPengambilanSampel: Date;
  @ApiProperty()
  kondisiSampel: string;
  @ApiProperty()
  instansiPengirimId: number;
  @ApiProperty()
  tanggalKunjunganLab: Date;
}
