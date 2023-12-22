import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateAntrianPasienDto } from './dto/create-antrian-pasien.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AntrianPasienService {
  constructor(readonly prisma: PrismaService) {}

  async createAntrianPasien(
    createAntrianPasienDto: CreateAntrianPasienDto,
    pasien_id: bigint,
    isMou: boolean = false,
  ) {
    try {
      return await this.prisma.tbl_antrian_pasiens.create({
        data: {
          ...createAntrianPasienDto,
          no_antrian: await this.generateNoAntrian(),
          pasien_id: pasien_id,
          tipe_pasien_id: isMou ? 2 : 1,
        },
        select: {
          no_antrian: true,
          waktu_kunjungan: true,
        },
      });
    } catch (error) {
      throw error;
    }
  }

  async createAntrianPasienLama(waktu_kunjungan: Date, pasien_id: bigint) {
    try {
      const result = await this.prisma.tbl_antrian_pasiens.create({
        data: {
          waktu_kunjungan,
          no_antrian: await this.generateNoAntrian(),
          pasien_id: pasien_id,
          tipe_pasien_id: 1,
        },
        select: {
          no_antrian: true,
          waktu_kunjungan: true,
        },
      });

      if (!result) {
        throw new Error('Terjadi kesalahan');
      }

      console.log(result);

      return result;
    } catch (error) {
      throw error;
    }
  }

  async getAntrianPasienByKodePemeriksaan(kodePemeriksaan: bigint) {
    try {
      const result = await this.prisma.tbl_antrian_pasiens.findFirst({
        where: {
          kode_pemeriksaan: kodePemeriksaan.toString(),
        },
        select: {
          id: true,
          kode_pemeriksaan: true,
          status_pembayaran_id: true,
          status_pemeriksaan_id: true,
          waktu_kunjungan: true,
          tipe_pasien_id: true,
          sample_jenis: true,
          pasien_id: true,
        },
      });

      if (!result) {
        throw new NotFoundException('Kode pemeriksaan tidak ditemukan');
      }

      return result;
    } catch (error) {
      throw error;
    }
  }

  async getPemeriksaanByUserId(userId: bigint) {
    try {
      const result = await this.prisma.tbl_antrian_pasiens.findMany({
        where: {
          pasien_id: userId,
        },
        select: {
          id: true,
          kode_pemeriksaan: true,
          status_pembayaran_id: true,
          status_pemeriksaan_id: true,
          waktu_kunjungan: true,
          tipe_pasien_id: true,
          sample_jenis: true,
        },
      });

      if (!result || result.length === 0) {
        throw new NotFoundException();
      }

      return result;
    } catch (error) {
      throw error;
    }
  }

  async generateNoAntrian() {
    try {
      const result = await this.prisma.tbl_antrian_pasiens.findFirst({
        orderBy: {
          no_antrian: 'desc',
        },
      });

      if (!result) {
        return 1;
      }

      return result.no_antrian + 1;
    } catch (error) {
      throw error;
    }
  }
}
