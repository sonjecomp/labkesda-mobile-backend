import { Injectable } from '@nestjs/common';
import { CreateProvinsiDto } from './dto/create-provinsi.dto';
import { UpdateProvinsiDto } from './dto/update-provinsi.dto';

@Injectable()
export class ProvinsiService {
  create(createProvinsiDto: CreateProvinsiDto) {
    return 'This action adds a new provinsi';
  }

  findAll() {
    return `This action returns all provinsi`;
  }

  findOne(id: number) {
    return `This action returns a #${id} provinsi`;
  }

  update(id: number, updateProvinsiDto: UpdateProvinsiDto) {
    return `This action updates a #${id} provinsi`;
  }

  remove(id: number) {
    return `This action removes a #${id} provinsi`;
  }
}
