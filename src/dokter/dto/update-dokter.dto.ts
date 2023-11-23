import { PartialType } from '@nestjs/swagger';
import { CreateDokterDto } from './create-dokter.dto';

export class UpdateDokterDto extends PartialType(CreateDokterDto) {}
