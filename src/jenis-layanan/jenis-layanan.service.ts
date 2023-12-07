import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class JenisLayananService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    try {
      const result = await this.prisma.set_jenis_tindakans.findMany({
        select: {
          id: true,
          name: true,
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
      const result = await this.prisma.set_jenis_tindakans.findUnique({
        where: {
          id: id,
        },
        select: {
          id: true,
          name: true,
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
