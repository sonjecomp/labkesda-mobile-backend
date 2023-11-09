import { Injectable } from '@nestjs/common';
import { CreateKelurahanDto } from './dto/create-kelurahan.dto';
import { UpdateKelurahanDto } from './dto/update-kelurahan.dto';

@Injectable()
export class KelurahanService {
  create(createKelurahanDto: CreateKelurahanDto) {
    return 'This action adds a new kelurahan';
  }

  findAll() {
    return `This action returns all kelurahan`;
  }

  findOne(id: number) {
    return `This action returns a #${id} kelurahan`;
  }

  update(id: number, updateKelurahanDto: UpdateKelurahanDto) {
    return `This action updates a #${id} kelurahan`;
  }

  remove(id: number) {
    return `This action removes a #${id} kelurahan`;
  }
}
