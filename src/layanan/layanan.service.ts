import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class LayananService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(page: number): Promise<any> {
    try {
      const result = await this.prisma.set_tindakans.findMany({
        take: 10,
        skip: page ? (page - 1) * 10 : 0,
        select: {
          id: true,
          name: true,
          harga: true,
          jenis_tindakan_id: true,
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

  async findOne(id: number) {
    try {
      const result = await this.prisma.set_tindakans.findUnique({
        where: {
          id: id,
        },
        select: {
          id: true,
          name: true,
          harga: true,
          jenis_tindakan_id: true,
        },
      });

      if (!result) {
        throw new NotFoundException();
      }

      return result;
    } catch (error) {
      throw error;
    }
  }
}
