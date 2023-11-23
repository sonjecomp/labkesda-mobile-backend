import { Module } from '@nestjs/common';
import { UserPasienService } from './user-pasien.service';
import { PrismaClient } from '@prisma/client';

@Module({
  providers: [UserPasienService, PrismaClient],
  exports: [UserPasienService],
})
export class UserPasienModule {}
