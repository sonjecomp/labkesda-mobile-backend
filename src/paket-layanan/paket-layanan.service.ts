import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PaketLayananService {
  constructor(readonly prisma: PrismaService) {}

  async findAll(): Promise<any> {
    try {
      const result = await this.prisma.set_pakets.findMany();

      if (!result || result.length === 0) {
        throw new NotFoundException();
      }

      return result;
    } catch (error) {
      throw error;
    }
  }

  async findOne(id: number): Promise<any> {
    try {
      const result = await this.prisma.set_pakets.findUnique({
        where: {
          id: id,
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
