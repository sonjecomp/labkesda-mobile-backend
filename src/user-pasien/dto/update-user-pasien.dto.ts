import { PartialType } from '@nestjs/swagger';
import { CreateUserPasienDto } from './create-user-pasien.dto';

export class UpdateUserPasienDto extends PartialType(CreateUserPasienDto) {}
