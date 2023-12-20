import { set_provinsis } from '@prisma/client';

export class Provinsi implements set_provinsis {
  id: bigint;
  name: string;
  created_at: Date;
  updated_at: Date;
}
