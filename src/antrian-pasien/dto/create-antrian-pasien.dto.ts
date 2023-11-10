import { ApiProperty } from '@nestjs/swagger';

export class CreateAntrianPasienDto {
  @ApiProperty()
  dokter_id: bigint;

  @ApiProperty()
  sample_lokasi: string;

  @ApiProperty()
  sample_jenis: string;

  @ApiProperty()
  sample_wadah: string;

  @ApiProperty()
  sample_pengambil: string;

  //   ini gatau
  @ApiProperty()
  tanggalPengambilanSampel: Date;

  @ApiProperty()
  sample_kondisi: string;

  @ApiProperty()
  instansi_id: bigint;

  @ApiProperty()
  waktu_kunjungan: Date;
}
