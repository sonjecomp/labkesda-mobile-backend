import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateKabupatenDto } from './dto/create-kabupaten.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Kabupaten } from './entities/kabupaten.entity';

@Injectable()
export class KabupatenService {
  constructor(private prisma: PrismaService) {}

  async create(createKabupatenDto: CreateKabupatenDto): Promise<Kabupaten> {
    try {
      const result = await this.prisma.set_kota_kabupatens.create({
        data: createKabupatenDto,
      });

      return result;
    } catch (error) {
      throw error;
    }
  }

  async findAll(id: number): Promise<Kabupaten[]> {
    try {
      if (!id) {
        throw new NotFoundException('Provinsi id tidak boleh kosong');
      }

      const result = (await this.prisma.set_kota_kabupatens.findMany({
        where: {
          provinsi_id: BigInt(id),
        },
        select: {
          id: true,
          provinsi_id: true,
          name: true,
        },
      })) as Kabupaten[];

      if (!result || result.length === 0) {
        throw new NotFoundException(
          `Kabupaten dengan provinsi id ${id} tidak ditemukan`,
        );
      }

      return result;
    } catch (error) {
      throw error;
    }
  }

  async findOne(id: number): Promise<Kabupaten> {
    try {
      const result = await this.prisma.set_kota_kabupatens.findUnique({
        where: {
          id: BigInt(id),
        },
      });

      if (!result) {
        throw new NotFoundException(
          `Kabupaten dengan id ${id} tidak ditemukan`,
        );
      }

      return result;
    } catch (error) {
      throw error;
    }
  }
}
