import { ApiProperty } from '@nestjs/swagger';

export class CreateKelurahanDto {
  @ApiProperty()
  id: bigint;

  @ApiProperty({
    required: true,
  })
  name: string;

  @ApiProperty({
    required: true,
  })
  kecamatan_id: bigint;
}
