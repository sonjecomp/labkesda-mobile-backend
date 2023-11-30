import { PartialType } from '@nestjs/swagger';
import { CreateLayananDto } from './create-layanan.dto';

export class UpdateLayananDto extends PartialType(CreateLayananDto) {}
