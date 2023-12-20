import { set_kelurahans } from '@prisma/client';

export class Kelurahan implements set_kelurahans {
  id: bigint;
  kecamatan_id: bigint;
  name: string;
  created_at: Date;
  updated_at: Date;
}
