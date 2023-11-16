import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserPasienDto } from './dto/create-user-pasien.dto';
import { PrismaClient } from '@prisma/client';
import { UserPasien } from './entities/user-pasien.entity';

@Injectable()
export class UserPasienService {
  constructor(private readonly prisma: PrismaClient) {}
  create(createUserPasienDto: CreateUserPasienDto) {
    return 'This action adds a new userPasien';
  }

  async findAll(): Promise<UserPasien[]> {
    try {
      const result = (await this.prisma.tbl_user_customers.findMany(
        {},
      )) as UserPasien[];

      if (!result || result.length === 0) {
        throw new NotFoundException('User Pasien not found');
      }

      return result;
    } catch (error) {
      throw error;
    }
  }

  async findOne(id: number): Promise<UserPasien> {
    try {
      const result = await this.prisma.tbl_user_customers.findUnique({
        where: {
          id: BigInt(id),
        },
      });

      if (!result) {
        throw new NotFoundException(`User Pasien with id ${id} not found`);
      }

      return result;
    } catch (error) {
      throw error;
    }
  }
}
