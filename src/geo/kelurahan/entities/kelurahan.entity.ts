import { set_kelurahan } from '@prisma/client';

export class Kelurahan implements set_kelurahan {
  id: bigint;
  kecamatan_id: bigint;
  name: string;
  created_at: Date;
  updated_at: Date;
}
