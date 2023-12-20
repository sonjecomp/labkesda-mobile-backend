import { set_kecamatans } from '@prisma/client';

export class Kecamatan implements set_kecamatans {
  id: bigint;
  kota_kabupaten_id: bigint;
  name: string;
  created_at: Date;
  updated_at: Date;
}
