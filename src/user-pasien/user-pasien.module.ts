import { Module } from '@nestjs/common';
import { UserPasienService } from './user-pasien.service';
import { UserPasienController } from './user-pasien.controller';
import { PrismaClient } from '@prisma/client';

@Module({
  controllers: [UserPasienController],
  providers: [UserPasienService, PrismaClient],
})
export class UserPasienModule {}
