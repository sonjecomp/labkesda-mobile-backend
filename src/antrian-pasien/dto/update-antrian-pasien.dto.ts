import { PartialType } from '@nestjs/swagger';
import { CreateAntrianPasienDto } from './create-antrian-pasien.dto';

export class UpdateAntrianPasienDto extends PartialType(CreateAntrianPasienDto) {}
