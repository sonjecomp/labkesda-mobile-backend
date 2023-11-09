import { PartialType } from '@nestjs/swagger';
import { CreateKelurahanDto } from './create-kelurahan.dto';

export class UpdateKelurahanDto extends PartialType(CreateKelurahanDto) {}
