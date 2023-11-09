import { PartialType } from '@nestjs/swagger';
import { CreateKabupatenDto } from './create-kabupaten.dto';

export class UpdateKabupatenDto extends PartialType(CreateKabupatenDto) {}
