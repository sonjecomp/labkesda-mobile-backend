import { ApiProperty } from '@nestjs/swagger';

export class CreateUserLamaDto {
  @ApiProperty()
  kodePendaftaran: string;
}
