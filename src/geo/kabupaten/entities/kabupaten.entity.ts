import { set_kota } from '@prisma/client';

export class Kabupaten implements set_kota {
  id: bigint;
  provinsi_id: bigint;
  name: string;
  created_at: Date;
  updated_at: Date;
}
