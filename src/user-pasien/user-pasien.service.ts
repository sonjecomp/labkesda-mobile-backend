import { Injectable } from '@nestjs/common';
import { CreateUserPasienDto } from './dto/create-user-pasien.dto';
import { PrismaClient } from '@prisma/client';
import { CategoryService } from 'src/category/category.service';

@Injectable()
export class UserPasienService {
  constructor(
    private readonly prisma: PrismaClient,
    readonly categoryService: CategoryService,
  ) {}

  async createPasienBaru(createUserPasienDto: CreateUserPasienDto) {
    try {
      const pekerjaanName = await this.categoryService.getPekerjaanById(
        createUserPasienDto.pekerjaan,
      );

      const result = await this.prisma.tbl_user_customers.create({
        data: {
          ...createUserPasienDto,
          pekerjaan: pekerjaanName,
          kode_pendaftaran: await this.generateKodePendaftaran(),
          name_instansi: '',
          is_instansi: false,
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

      if (!result) {
        throw new Error('Failed to create user pasien');
      }

      return result;
    } catch (error) {
      throw error;
    }
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

  getYear(): string {
    const now = new Date();
    return now.getFullYear().toString().slice(2);
  }

  getMonth(): string {
    const now = new Date();
    return (now.getMonth() + 1).toString().padStart(2, '0');
  }
}
