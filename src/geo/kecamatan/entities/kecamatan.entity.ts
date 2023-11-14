import { set_kecamatan } from '@prisma/client';

export class Kecamatan implements set_kecamatan {
  id: bigint;
  kota_kabupaten_id: bigint;
  name: string;
  created_at: Date;
  updated_at: Date;
}
