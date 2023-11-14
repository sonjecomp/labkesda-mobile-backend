import { Injectable } from '@nestjs/common';
import { CreateAntrianPasienDto } from './dto/create-antrian-pasien.dto';
import { UpdateAntrianPasienDto } from './dto/update-antrian-pasien.dto';

@Injectable()
export class AntrianPasienService {
  create(createAntrianPasienDto: CreateAntrianPasienDto) {
    return 'This action adds a new antrianPasien';
  }

  findAll() {
    return `This action returns all antrianPasien`;
  }

  findOne(id: number) {
    return `This action returns a #${id} antrianPasien`;
  }

  update(id: number, updateAntrianPasienDto: UpdateAntrianPasienDto) {
    return `This action updates a #${id} antrianPasien`;
  }

  remove(id: number) {
    return `This action removes a #${id} antrianPasien`;
  }
}
