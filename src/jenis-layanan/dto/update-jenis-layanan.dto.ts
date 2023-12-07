import { PartialType } from '@nestjs/swagger';
import { CreateJenisLayananDto } from './create-jenis-layanan.dto';

export class UpdateJenisLayananDto extends PartialType(CreateJenisLayananDto) {}
