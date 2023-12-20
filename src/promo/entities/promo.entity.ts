import { tbl_events } from '@prisma/client';

export class Promo implements tbl_events {
  terms_and_conditions: string;
  id: bigint;
  title: string;
  description: string;
  start_date: Date;
  due_date: Date;
  cover_image: string;
  created_at: Date;
  updated_at: Date;
}
