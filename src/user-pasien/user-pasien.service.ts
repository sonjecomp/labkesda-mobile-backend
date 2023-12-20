import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUserPasienDto } from './dto/create-user-pasien.dto';
import { PrismaClient } from '@prisma/client';
import { CategoryService } from 'src/category/category.service';
import { CreateUserInstansiDto } from './dto/create-user-instansi.dto';

@Injectable()
export class UserPasienService {
  constructor(
    private readonly prisma: PrismaClient,
    readonly categoryService: CategoryService,
  ) {}

  async createPasienBaru(createUserPasienDto: CreateUserPasienDto) {
    try {
      if (await this.checkEmailIsTaken(createUserPasienDto.email)) {
        throw new Error('Email sudah digunakan');
      }

      if (await this.checkNikIsTaken(createUserPasienDto.nik)) {
        throw new Error('NIK sudah digunakan');
      }

      const pekerjaanName = await this.categoryService.getPekerjaanById(
        createUserPasienDto.pekerjaan,
      );

      const result = await this.prisma.tbl_user_customers.create({
        data: {
          set_libraries_tbl_user_customers_jenis_kelamin_idToset_libraries: {
            connect: {
              id: createUserPasienDto.jenis_kelamin_id,
            },
          },
          set_libraries_tbl_user_customers_warga_negara_idToset_libraries: {
            connect: {
              id: createUserPasienDto.warga_negara_id,
            },
          },
          set_libraries_tbl_user_customers_golongan_darah_idToset_libraries: {
            connect: {
              id: createUserPasienDto.golongan_darah_id,
            },
          },
          set_libraries_tbl_user_customers_pendidikan_idToset_libraries: {
            connect: {
              id: createUserPasienDto.pendidikan_id,
            },
          },
          set_libraries_tbl_user_customers_status_perkawinan_idToset_libraries:
            {
              connect: {
                id: createUserPasienDto.status_perkawinan_id,
              },
            },
          set_provinsis: {
            connect: {
              id: createUserPasienDto.provinsi_id,
            },
          },
          set_kota_kabupatens: {
            connect: {
              id: createUserPasienDto.kotaKabupaten_id,
            },
          },

          set_kecamatans: {
            connect: {
              id: createUserPasienDto.kecamatan_id,
            },
          },

          set_kelurahans: {
            connect: {
              id: createUserPasienDto.kelurahan_id,
            },
          },

          kode_pos: createUserPasienDto.kode_pos,
          name: createUserPasienDto.name,
          tanggal_lahir: createUserPasienDto.tanggal_lahir,
          tempat_lahir: createUserPasienDto.tempat_lahir,
          nik: createUserPasienDto.nik,
          alamat_domisili: createUserPasienDto.alamat_domisili,
          email: createUserPasienDto.email,
          noHP: createUserPasienDto.noHP,
          agama: createUserPasienDto.agama,
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

  async createInstansiBaru(data: CreateUserInstansiDto) {
    try {
      if (await this.checkEmailIsTaken(data.email)) {
        throw new BadRequestException('Email sudah digunakan');
      }

      if (await this.checkNikIsTaken(data.nik)) {
        throw new BadRequestException('NIK sudah digunakan');
      }

      const user = await this.prisma.tbl_user_customers.create({
        data: {
          set_libraries_tbl_user_customers_jenis_kelamin_idToset_libraries: {
            connect: {
              id: data.jenis_kelamin_id,
            },
          },

          name: data.name,
          nik: data.nik,
          alamat_domisili: data.alamat_domisili,
          email: data.email,
          noHP: data.noHP,

          name_instansi: data.name_instansi,
          name_petugas: data.name_petugas,

          kode_pendaftaran: await this.generateKodePendaftaran(),
          is_instansi: true,
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

      if (!user) {
        throw new Error('Failed to create user instansi');
      }

      return user;
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

  async checkEmailIsTaken(email: string) {
    try {
      const result = await this.prisma.tbl_user_customers.findFirst({
        where: {
          email: email,
        },
      });

      if (!result) {
        return false;
      }

      return true;
    } catch (error) {
      throw error;
    }
  }

  async checkNikIsTaken(nik: string) {
    try {
      const result = await this.prisma.tbl_user_customers.findFirst({
        where: {
          nik: nik,
        },
      });

      if (!result) {
        return false;
      }

      return true;
    } catch (error) {
      throw error;
    }
  }
}
