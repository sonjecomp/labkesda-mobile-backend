import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Category, Library } from './entities/category.entity';

@Injectable()
export class CategoryService {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<Category[]> {
    try {
      const result = (await this.prisma.set_categories.findMany({
        select: {
          id: true,
          name: true,
          set_libraries: {
            select: {
              id: true,
              name: true,
            },
          },
        },
      })) as Category[];

      if (!result || result.length === 0) {
        throw new NotFoundException('Category not found');
      }

      return result;
    } catch (error) {
      throw error;
    }
  }

  async findOne(id: number): Promise<Library[]> {
    try {
      const result = (await this.prisma.set_libraries.findMany({
        where: {
          category_id: BigInt(id),
        },
        select: {
          id: true,
          name: true,
        },
      })) as Library[];

      if (!result || result.length === 0) {
        throw new NotFoundException(`Category with id ${id} not found`);
      }

      return result;
    } catch (error) {
      throw error;
    }
  }

  async getPekerjaanById(id: string): Promise<string> {
    try {
      const result = await this.prisma.set_libraries.findUnique({
        where: {
          id: BigInt(parseInt(id)),
        },
        select: {
          name: true,
        },
      });

      if (!result || !result.name) {
        throw new NotFoundException(`Pekerjaan with id ${id} not found`);
      }

      return result.name;
    } catch (error) {
      throw error;
    }
  }
}
