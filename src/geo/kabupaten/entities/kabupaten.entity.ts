import { set_kota_kabupatens } from '@prisma/client';

export class Kabupaten implements set_kota_kabupatens {
  id: bigint;
  provinsi_id: bigint;
  name: string;
  created_at: Date;
  updated_at: Date;
}
