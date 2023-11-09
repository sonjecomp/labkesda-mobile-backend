import { Injectable } from '@nestjs/common';
import { CreateUserPasienDto } from './dto/create-user-pasien.dto';
import { UpdateUserPasienDto } from './dto/update-user-pasien.dto';

@Injectable()
export class UserPasienService {
  create(createUserPasienDto: CreateUserPasienDto) {
    return 'This action adds a new userPasien';
  }

  findAll() {
    return `This action returns all userPasien`;
  }

  findOne(id: number) {
    return `This action returns a #${id} userPasien`;
  }

  update(id: number, updateUserPasienDto: UpdateUserPasienDto) {
    return `This action updates a #${id} userPasien`;
  }

  remove(id: number) {
    return `This action removes a #${id} userPasien`;
  }
}
