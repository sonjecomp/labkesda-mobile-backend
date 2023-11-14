import { Module } from '@nestjs/common';
import { UserPasienService } from './user-pasien.service';
import { UserPasienController } from './user-pasien.controller';

@Module({
  controllers: [UserPasienController],
  providers: [UserPasienService],
})
export class UserPasienModule {}
