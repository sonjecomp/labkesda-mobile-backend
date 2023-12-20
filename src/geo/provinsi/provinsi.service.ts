import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProvinsiDto } from './dto/create-provinsi.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Provinsi } from './entities/provinsi.entity';

@Injectable()
export class ProvinsiService {
  constructor(private prisma: PrismaService) {}

  async create(createProvinsiDto: CreateProvinsiDto): Promise<Provinsi> {
    try {
      const result = await this.prisma.set_provinsis.create({
        data: createProvinsiDto,
      });

      return result;
    } catch (error) {
      throw error;
    }
  }

  async findAll(): Promise<Provinsi[]> {
    try {
      const result = (await this.prisma.set_provinsis.findMany({
        select: {
          id: true,
          name: true,
        },
      })) as Provinsi[];

      return result;
    } catch (error) {
      throw error;
    }
  }

  async findOne(id: number): Promise<Provinsi> {
    try {
      const result = await this.prisma.set_provinsis.findUnique({
        where: {
          id: BigInt(id),
        },
      });

      if (!result) {
        throw new NotFoundException(`Provinsi dengan id ${id} tidak ditemukan`);
      }

      return result;
    } catch (error) {
      throw error;
    }
  }
}
