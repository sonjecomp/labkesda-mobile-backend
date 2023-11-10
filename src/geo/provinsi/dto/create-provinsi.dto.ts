import { ApiProperty } from '@nestjs/swagger';

export class CreateProvinsiDto {
  @ApiProperty()
  id: bigint;

  @ApiProperty({
    required: true,
  })
  name: string;
}
