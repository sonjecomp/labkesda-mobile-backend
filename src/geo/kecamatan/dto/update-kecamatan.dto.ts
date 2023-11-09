import { PartialType } from '@nestjs/swagger';
import { CreateKecamatanDto } from './create-kecamatan.dto';

export class UpdateKecamatanDto extends PartialType(CreateKecamatanDto) {}
