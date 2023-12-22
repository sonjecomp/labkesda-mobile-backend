import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class LibraryService {
  constructor(private readonly prisma: PrismaService) {}
  findAll() {
    try {
      return this.prisma.set_libraries.findMany({
        select: {
          id: true,
          name: true,
        },
      });
    } catch (error) {
      throw error;
    }
  }

  findOne(id: number) {
    try {
      return this.prisma.set_libraries.findUnique({
        where: {
          id: id,
        },
        select: {
          id: true,
          name: true,
        },
      });
    } catch (error) {
      throw error;
    }
  }
}
