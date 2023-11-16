import { set_categories, set_libraries } from '@prisma/client';

export class Library implements set_libraries {
  id: bigint;
  category_id: bigint;
  name: string;
  created_at: Date;
  updated_at: Date;
}

export class Category implements set_categories {
  id: bigint;
  name: string;
  created_at: Date;
  updated_at: Date;
  set_libraries: Library[];
}
