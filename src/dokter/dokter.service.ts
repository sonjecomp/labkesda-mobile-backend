import { Injectable, NotFoundException } from '@nestjs/common';
import { Dokter } from './entities/dokter.entity';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class DokterService {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<Dokter[]> {
    try {
      const result = (await this.prisma.set_dokter_rujuks.findMany({
        select: {
          id: true,
          name: true,
        },
      })) as Dokter[];

      if (!result || result.length === 0) {
        throw new NotFoundException('Dokter not found');
      }

      return result;
    } catch (error) {
      throw error;
    }
  }

  async findOne(id: number): Promise<Dokter> {
    try {
      const result = (await this.prisma.set_dokter_rujuks.findUnique({
        where: {
          id: BigInt(id),
        },
        select: {
          id: true,
          name: true,
        },
      })) as Dokter;

      if (!result) {
        throw new NotFoundException(`Dokter with id ${id} not found`);
      }

      return result;
    } catch (error) {
      throw error;
    }
  }
}
