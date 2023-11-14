import { ApiProperty } from '@nestjs/swagger';

export class CreateKabupatenDto {
  @ApiProperty()
  id: bigint;

  @ApiProperty()
  name: string;

  @ApiProperty()
  provinsi_id: bigint;
}
