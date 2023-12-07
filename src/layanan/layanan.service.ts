import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class LayananService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(): Promise<any> {
    try {
      const result = await this.prisma.set_tindakans.findMany();

      if (!result || result.length === 0) {
        throw new NotFoundException();
      }

      return result;
    } catch (error) {
      throw error;
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} layanan`;
  }
}
