import { ApiProperty } from '@nestjs/swagger';

export class CreatePromoDto {
  @ApiProperty()
  title: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  terms_andc_conditions: string;

  @ApiProperty()
  start_date: Date;

  @ApiProperty()
  due_date: Date;

  @ApiProperty()
  cover_image: string;
}
