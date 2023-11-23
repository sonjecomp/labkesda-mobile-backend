import { Injectable } from '@nestjs/common';
import { CreatePemeriksaanDto } from './dto/create-pemeriksaan.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PemeriksaanService {
  constructor(readonly prisma: PrismaService) {}

  create(createPemeriksaanDto: CreatePemeriksaanDto) {
    return createPemeriksaanDto;
  }

  findAll() {
    return `This action returns all pemeriksaan`;
  }

  findOne(id: number) {
    return `This action returns a #${id} pemeriksaan`;
  }

  remove(id: number) {
    return `This action removes a #${id} pemeriksaan`;
  }

  // function to generate kode pendaftaran
  async generateKodePendaftaran(): Promise<string> {
    // get last kode pendaftaran
    const lastKodePendaftaran = await this.prisma.tbl_user_customers.findFirst({
      orderBy: {
        kode_pendaftaran: 'desc',
      },
      select: {
        kode_pendaftaran: true,
      },
    });

    // check if last kode pendaftaran is null
    if (!lastKodePendaftaran || !lastKodePendaftaran.kode_pendaftaran) {
      return this.getYear() + this.getMonth() + '0001';
    }

    // convert to number
    const lastKodePendaftaranNumber = parseInt(
      lastKodePendaftaran.kode_pendaftaran.slice(4),
    );

    // increment last kode pendaftaran number
    const newKodePendaftaranNumber = lastKodePendaftaranNumber + 1;

    // return new kode pendaftaran
    return (
      lastKodePendaftaran.kode_pendaftaran.slice(0, 4) +
      newKodePendaftaranNumber
    );
  }

  // function to generate kode pemeriksaan
  async generateKodePemeriksaan(isInstansi: boolean): Promise<string> {
    // get last kode pemeriksaan
    const lastKodePemeriksaan = await this.prisma.tbl_antrian_pasiens.findFirst(
      {
        orderBy: {
          kode_pemeriksaan: 'desc',
        },
        select: {
          kode_pemeriksaan: true,
        },
      },
    );

    // check if last kode pemeriksaan is null
    if (!lastKodePemeriksaan || !lastKodePemeriksaan.kode_pemeriksaan) {
      return isInstansi
        ? 'M-' + this.getYear() + this.getMonth() + '0001'
        : this.getYear() + this.getMonth() + '0001';
    }

    // check if last kode pendaftaran year is same with current year
    if (lastKodePemeriksaan.kode_pemeriksaan.slice(0, 2) === this.getYear()) {
      // get last kode pemeriksaan number
      const lastKodePemeriksaanNumber =
        lastKodePemeriksaan.kode_pemeriksaan.slice(4);

      // increment last kode pendaftaran number
      const newKodePemeriksaanNumber = (
        parseInt(lastKodePemeriksaanNumber) + 1
      ).toString();

      // return new kode pendaftaran
      return isInstansi
        ? 'M-' + this.getYear() + this.getMonth() + newKodePemeriksaanNumber
        : this.getYear() + this.getMonth() + newKodePemeriksaanNumber;
    }

    // return new kode pendaftaran
    return isInstansi
      ? 'M-' + this.getYear() + this.getMonth() + '0001'
      : this.getYear() + this.getMonth() + '0001';
  }

  getYear(): string {
    const now = new Date();
    return now.getFullYear().toString().slice(2);
  }

  getMonth(): string {
    const now = new Date();
    return (now.getMonth() + 1).toString().padStart(2, '0');
  }
}
