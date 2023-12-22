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
              kode_pendaftaran:
                createPemeriksaanPasienLamaDto.user.kodePendaftaran,
            },
            {
              nik: createPemeriksaanPasienLamaDto.user.kodePendaftaran,
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
        throw new NotFoundException(
          'Kode pendaftaran atau NIK tidak ditemukan',
        );
      }

      const result = await this.antriannPasienService.createAntrianPasien(
        createPemeriksaanPasienLamaDto.pemeriksaan,
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

  async checkNikOrKodePendaftaran(kodePendaftaran: string) {
    try {
      const foundUser = await this.prisma.tbl_user_customers.findFirst({
        where: {
          OR: [
            {
              kode_pendaftaran: kodePendaftaran,
            },
            {
              nik: kodePendaftaran,
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
          nik: true,
          jenis_kelamin_id: true,
        },
      });

      if (!foundUser || !foundUser.id) {
        throw new NotFoundException(
          'Kode pendaftaran atau NIK tidak ditemukan',
        );
      }

      return foundUser;
    } catch (error) {
      throw error;
    }
  }

  async getRiwayatPemeriksaan(kodePendaftaran: string) {
    try {
      const foundUser = await this.checkNikOrKodePendaftaran(kodePendaftaran);

      const result = await this.antriannPasienService.getPemeriksaanByUserId(
        foundUser.id,
      );

      return result.map((item) => {
        return {
          user: foundUser,
          pemeriksaan: item,
        };
      });
    } catch (error) {
      throw error;
    }
  }

  async getHasilPemeriksaan(kodePemeriksaan: string) {
    try {
      const foundPemeriksaan =
        await this.antriannPasienService.getAntrianPasienByKodePemeriksaan(
          BigInt(kodePemeriksaan),
        );

      const user = await this.prisma.tbl_user_customers.findFirst({
        where: {
          id: foundPemeriksaan.pasien_id,
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
          nik: true,
          jenis_kelamin_id: true,
        },
      });

      return {
        user,
        pemeriksaan: foundPemeriksaan,
      };
    } catch (error) {
      throw error;
    }
  }
}
