import { ApiProperty } from '@nestjs/swagger';

export class CreateKecamatanDto {
  @ApiProperty()
  id: bigint;

  @ApiProperty()
  name: string;

  @ApiProperty()
  kota_kabupaten_id: bigint;
}
