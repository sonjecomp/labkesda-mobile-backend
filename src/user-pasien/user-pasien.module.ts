import { Module } from '@nestjs/common';
import { UserPasienService } from './user-pasien.service';
import { PrismaClient } from '@prisma/client';
import { CategoryModule } from 'src/category/category.module';

@Module({
  providers: [UserPasienService, PrismaClient],
  imports: [CategoryModule],
  exports: [UserPasienService],
})
export class UserPasienModule {}
