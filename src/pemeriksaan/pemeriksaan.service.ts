import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePemeriksaanDto } from './dto/create-pemeriksaan.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserPasienService } from 'src/user-pasien/user-pasien.service';
import { AntrianPasienService } from 'src/antrian-pasien/antrian-pasien.service';
import { CreatePemeriksaanPasienLamaDto } from './dto/create-pemeriksaan-pasien-lama.dto';

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

  async createPasienLama(
    createPemeriksaanPasienLamaDto: CreatePemeriksaanPasienLamaDto,
  ) {
    try {
      // create pemeriksaan
      const foundUser = await this.prisma.tbl_user_customers.findFirst({
        where: {
          kode_pendaftaran: createPemeriksaanPasienLamaDto.kode_pendaftaran,
        },
      });

      if (!foundUser || !foundUser.id) {
        throw new NotFoundException('Kode pendaftaran tidak ditemukan');
      }

      const foundPemeriksaan =
        await this.antriannPasienService.getAntrianPasienByKodePemeriksaan(
          foundUser.id,
        );

      // TODO: lanjut bikin pemeriksaan pasien lama
      return foundPemeriksaan;
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
