import { PartialType } from '@nestjs/swagger';
import { CreatePaketLayananDto } from './create-paket-layanan.dto';

export class UpdatePaketLayananDto extends PartialType(CreatePaketLayananDto) {}
