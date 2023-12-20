import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePemeriksaanDto } from './dto/create-pemeriksaan.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserPasienService } from 'src/user-pasien/user-pasien.service';
import { AntrianPasienService } from 'src/antrian-pasien/antrian-pasien.service';
import { CreatePemeriksaanPasienLamaDto } from './dto/create-pemeriksaan-pasien-lama.dto';
import { CreatePemeriksaanInstansiBaruDto } from './dto/create-pemeriksaan-instansi-baru.dto';

@Injectable()
export class PemeriksaanService {
  constructor(
    readonly prisma: PrismaService,
    readonly userPasienService: UserPasienService,
    readonly antriannPasienService: AntrianPasienService,
  ) {}

  async findAll() {
    try {
      const result = await this.prisma.tbl_antrian_pasiens.findMany();

      if (!result || result.length === 0) {
        throw new NotFoundException();
      }

      return result;
    } catch (error) {
      throw error;
    }
  }

  async findAllUser() {
    try {
      const result = await this.prisma.tbl_user_customers.findMany();

      if (!result || result.length === 0) {
        throw new NotFoundException();
      }

      return result;
    } catch (error) {
      throw error;
    }
  }

  async createPasienBaru(createPemeriksaanDto: CreatePemeriksaanDto) {
    console.log(createPemeriksaanDto);
    try {
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

  async createPemeriksaanInstansiBaru(data: CreatePemeriksaanInstansiBaruDto) {
    try {
      const user = await this.userPasienService.createInstansiBaru(data.user);

      if (!user) {
        throw new Error('Terjadi kesalahan');
      }

      // create pemeriksaan
      const pemeriksaan = await this.antriannPasienService.createAntrianPasien(
        data.pemeriksaan,
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
          OR: [
            {
              kode_pendaftaran: createPemeriksaanPasienLamaDto.kode_pendaftaran,
            },
            {
              nik: createPemeriksaanPasienLamaDto.kode_pendaftaran,
            },
          ],
        },
        select: {
          id: true,
          kode_pendaftaran: true,
          name: true,
          tanggal_lahir: true,
          noHP: true,
          email: true,
          alamat_domisili: true,
          status_verif_email: true,
          status_verif_noPhone: true,
        },
      });

      if (!foundUser || !foundUser.id) {
        throw new NotFoundException('Kode pendaftaran tidak ditemukan');
      }

      const result = await this.antriannPasienService.createAntrianPasienLama(
        createPemeriksaanPasienLamaDto.tanggal_kunjungan,
        foundUser.id,
      );

      if (!result || !result.no_antrian) {
        throw new Error('Terjadi kesalahan');
      }

      return {
        user: foundUser,
        pemeriksaan: result,
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

  async getHasilPemeriksaan(kodePendaftaran: string) {
    try {
      const foundUser = await this.prisma.tbl_user_customers.findFirst({
        where: {
          kode_pendaftaran: kodePendaftaran,
        },
      });

      if (!foundUser || !foundUser.id) {
        throw new NotFoundException('Kode pemeriksaan tidak ditemukan');
      }

      const foundPemeriksaan =
        await this.antriannPasienService.getAntrianPasienByKodePemeriksaan(
          foundUser.id,
        );

      if (!foundPemeriksaan) {
        throw new Error('Terjadi kesalahan');
      }

      return foundPemeriksaan;
    } catch (error) {
      throw error;
    }
  }
}
