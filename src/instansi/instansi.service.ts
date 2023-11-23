import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Instansi } from './entities/instansi.entity';

@Injectable()
export class InstansiService {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<Instansi[]> {
    try {
      const result = (await this.prisma.set_instansi_rujuks.findMany({
        select: {
          id: true,
          name: true,
        },
      })) as Instansi[];

      if (!result || result.length === 0) {
        throw new NotFoundException('Instansi not found');
      }

      return result;
    } catch (error) {
      throw error;
    }
  }

  async findOne(id: number): Promise<Instansi> {
    try {
      const result = (await this.prisma.set_instansi_rujuks.findUnique({
        where: {
          id: BigInt(id),
        },
        select: {
          id: true,
          name: true,
        },
      })) as Instansi;

      if (!result) {
        throw new NotFoundException(`Instansi with id ${id} not found`);
      }

      return result;
    } catch (error) {
      throw error;
    }
  }
}
