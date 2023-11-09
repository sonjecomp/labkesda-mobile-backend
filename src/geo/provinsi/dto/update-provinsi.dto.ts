import { PartialType } from '@nestjs/swagger';
import { CreateProvinsiDto } from './create-provinsi.dto';

export class UpdateProvinsiDto extends PartialType(CreateProvinsiDto) {}
