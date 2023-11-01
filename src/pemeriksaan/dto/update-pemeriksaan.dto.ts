import { PartialType } from '@nestjs/mapped-types';
import { CreatePemeriksaanDto } from './create-pemeriksaan.dto';

export class UpdatePemeriksaanDto extends PartialType(CreatePemeriksaanDto) {}
