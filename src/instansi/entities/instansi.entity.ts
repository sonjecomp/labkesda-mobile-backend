import { set_instansi_rujuks } from '@prisma/client';

export class Instansi implements set_instansi_rujuks {
  id: bigint;
  name: string;
  created_at: Date;
  updated_at: Date;
}
