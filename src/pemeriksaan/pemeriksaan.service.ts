import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePemeriksaanDto } from './dto/create-pemeriksaan.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserPasienService } from 'src/user-pasien/user-pasien.service';
import { AntrianPasienService } from 'src/antrian-pasien/antrian-pasien.service';

@Injectable()
export class PemeriksaanService {
  constructor(
    readonly prisma: PrismaService,
    readonly userPasienService: UserPasienService,
    readonly antriannPasienService: AntrianPasienService,
  ) {}

  async createPasienBaru(createPemeriksaanDto: CreatePemeriksaanDto) {
    try {
      // create user
      const user = await this.userPasienService.createPasienBaru(
        createPemeriksaanDto.user,
      );

      if (!user) {
        throw new Error('Terjadi kesalahan');
      }

      // create pemeriksaan
      const pemeriksaan = await this.antriannPasienService.createAntrianPasien(
        createPemeriksaanDto.pemeriksaan,
        user.id,
      );

      if (!pemeriksaan) {
        throw new Error('Terjadi kesalahan');
      }

      return {
        user,
        pemeriksaan,
      };
    } catch (error) {
      throw error;
    }
  }

  async getRiwayatPemeriksaan(kodePendaftaran: string) {
    try {
      const foundUser = await this.prisma.tbl_user_customers.findFirst({
        where: {
          kode_pendaftaran: kodePendaftaran,
        },
      });

      if (!foundUser || !foundUser.id) {
        throw new NotFoundException('Kode pendaftaran tidak ditemukan');
      }

      const result = this.antriannPasienService.getPemeriksaanByUserId(
        foundUser.id,
      );

      return result;
    } catch (error) {
      throw error;
    }
  }
}
