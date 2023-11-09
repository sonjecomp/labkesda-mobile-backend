import { Injectable } from '@nestjs/common';
import { CreateKabupatenDto } from './dto/create-kabupaten.dto';
import { UpdateKabupatenDto } from './dto/update-kabupaten.dto';

@Injectable()
export class KabupatenService {
  create(createKabupatenDto: CreateKabupatenDto) {
    return 'This action adds a new kabupaten';
  }

  findAll() {
    return `This action returns all kabupaten`;
  }

  findOne(id: number) {
    return `This action returns a #${id} kabupaten`;
  }

  update(id: number, updateKabupatenDto: UpdateKabupatenDto) {
    return `This action updates a #${id} kabupaten`;
  }

  remove(id: number) {
    return `This action removes a #${id} kabupaten`;
  }
}
