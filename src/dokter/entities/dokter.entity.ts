import { set_dokter_rujuks } from '@prisma/client';

export class Dokter implements set_dokter_rujuks {
  id: bigint;
  name: string;
  created_at: Date;
  updated_at: Date;
}
