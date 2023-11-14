import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateKelurahanDto } from './dto/create-kelurahan.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Kelurahan } from './entities/kelurahan.entity';

@Injectable()
export class KelurahanService {
  constructor(private prisma: PrismaService) {}

  async create(createKelurahanDto: CreateKelurahanDto): Promise<Kelurahan> {
    try {
      return this.prisma.set_kelurahan.create({
        data: createKelurahanDto,
      });
    } catch (error) {
      throw error;
    }
  }

  async findAll(id: number): Promise<Kelurahan[]> {
    try {
      if (!id) {
        throw new NotFoundException('Kecamatan id tidak boleh kosong');
      }

      const result = (await this.prisma.set_kelurahan.findMany({
        where: {
          kecamatan_id: BigInt(id),
        },
        select: {
          id: true,
          kecamatan_id: true,
          name: true,
        },
      })) as Kelurahan[];

      if (!result || result.length === 0) {
        throw new NotFoundException(
          `Kelurahan dengan kecamatan id ${id} tidak ditemukan`,
        );
      }

      return result;
    } catch (error) {
      throw error;
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} kelurahan`;
  }
}
