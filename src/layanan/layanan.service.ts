import { Injectable } from '@nestjs/common';
import { CreateLayananDto } from './dto/create-layanan.dto';
import { UpdateLayananDto } from './dto/update-layanan.dto';

@Injectable()
export class LayananService {
  create(createLayananDto: CreateLayananDto) {
    return 'This action adds a new layanan';
  }

  findAll() {
    return `This action returns all layanan`;
  }

  findOne(id: number) {
    return `This action returns a #${id} layanan`;
  }

  update(id: number, updateLayananDto: UpdateLayananDto) {
    return `This action updates a #${id} layanan`;
  }

  remove(id: number) {
    return `This action removes a #${id} layanan`;
  }
}
