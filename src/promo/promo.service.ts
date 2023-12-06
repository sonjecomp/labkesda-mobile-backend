import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Promo } from './entities/promo.entity';

@Injectable()
export class PromoService {
  constructor(readonly prisma: PrismaService) {}

  async create(createPromoDto: any): Promise<Promo> {
    try {
      return await this.prisma.tbl_events.create({
        data: {
          ...createPromoDto,
        },
      });
    } catch (error) {
      throw error;
    }
  }

  async findAll(): Promise<Promo[]> {
    try {
      const result = await this.prisma.tbl_events.findMany();

      if (!result || result.length === 0) {
        throw new NotFoundException();
      }

      return result;
    } catch (error) {
      throw error;
    }
  }

  async findOne(id: number): Promise<Promo> {
    try {
      const result = await this.prisma.tbl_events.findUnique({
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
