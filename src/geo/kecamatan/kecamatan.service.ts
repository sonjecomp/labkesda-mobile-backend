import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateKecamatanDto } from './dto/create-kecamatan.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Kecamatan } from './entities/kecamatan.entity';

@Injectable()
export class KecamatanService {
  constructor(private prisma: PrismaService) {}

  async create(createKecamatanDto: CreateKecamatanDto): Promise<Kecamatan> {
    try {
      const result = await this.prisma.set_kecamatan.create({
        data: createKecamatanDto,
      });

      return result;
    } catch (error) {
      throw error;
    }
  }

  async findAll(id: number): Promise<Kecamatan[]> {
    try {
      if (!id) {
        throw new NotFoundException('Kabupaten id tidak boleh kosong');
      }

      const result = (await this.prisma.set_kecamatan.findMany({
        where: {
          kota_kabupaten_id: BigInt(id),
        },
        select: {
          id: true,
          kota_kabupaten_id: true,
          name: true,
        },
      })) as Kecamatan[];

      if (!result || result.length === 0) {
        throw new NotFoundException(
          `Kecamatan dengan kabupaten id ${id} tidak ditemukan`,
        );
      }

      return result;
    } catch (error) {
      throw error;
    }
  }

  async findOne(id: number): Promise<Kecamatan> {
    try {
      const result = await this.prisma.set_kecamatan.findUnique({
        where: {
          id: BigInt(id),
        },
      });

      if (!result) {
        throw new NotFoundException(
          `Kecamatan dengan id ${id} tidak ditemukan`,
        );
      }

      return result;
    } catch (error) {
      throw error;
    }
  }
}
