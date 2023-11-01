import { Injectable } from '@nestjs/common';
import { CreatePemeriksaanDto } from './dto/create-pemeriksaan.dto';
import { UpdatePemeriksaanDto } from './dto/update-pemeriksaan.dto';

@Injectable()
export class PemeriksaanService {
  create(createPemeriksaanDto: CreatePemeriksaanDto) {
    return 'This action adds a new pemeriksaan';
  }

  findAll() {
    return `This action returns all pemeriksaan`;
  }

  findOne(id: number) {
    return `This action returns a #${id} pemeriksaan`;
  }

  update(id: number, updatePemeriksaanDto: UpdatePemeriksaanDto) {
    return `This action updates a #${id} pemeriksaan`;
  }

  remove(id: number) {
    return `This action removes a #${id} pemeriksaan`;
  }
}
