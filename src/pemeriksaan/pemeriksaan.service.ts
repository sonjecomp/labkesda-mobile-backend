import { Injectable } from '@nestjs/common';
import { CreatePemeriksaanDto } from './dto/create-pemeriksaan.dto';

@Injectable()
export class PemeriksaanService {
  create(createPemeriksaanDto: CreatePemeriksaanDto) {
    return createPemeriksaanDto;
  }

  findAll() {
    return `This action returns all pemeriksaan`;
  }

  findOne(id: number) {
    return `This action returns a #${id} pemeriksaan`;
  }

  remove(id: number) {
    return `This action removes a #${id} pemeriksaan`;
  }
}
