import { set_provinsi } from '@prisma/client';

export class Provinsi implements set_provinsi {
  id: bigint;
  name: string;
  created_at: Date;
  updated_at: Date;
}
