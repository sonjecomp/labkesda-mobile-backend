import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

export interface ILayanan {
  id?: string | bigint;
  name?: string;
  harga?: string;
  jenis_tindakan_id?: number | bigint | null;
}

export interface IPaketLayanan {
  id: string | bigint;
  name: string;
  harga: string;
  sample_jenis_default: string | null;
  layanans?: ILayanan[];
}

@Injectable()
export class PaketLayananService {
  constructor(readonly prisma: PrismaService) {}

  async findAll(page: number): Promise<IPaketLayanan[]> {
    try {
      let results = (await this.prisma.set_pakets.findMany({
        take: 10,
        skip: page ? (page - 1) * 10 : 0,
        select: {
          id: true,
          name: true,
          harga: true,
          sample_jenis_default: true,
        },
      })) as IPaketLayanan[];

      if (!results || results.length === 0) {
        throw new NotFoundException();
      }

      results = await Promise.all(
        results.map((result) => {
          return this.sumHargaPemeriksaan(result);
        }),
      );

      results = await Promise.all(
        results.map(async (result) => {
          return {
            ...result,
            layanans: (await this.findLayananByPaketId(
              Number(result.id),
            )) as ILayanan[],
          };
        }),
      );

      return results;
    } catch (error) {
      throw error;
    }
  }

  async findOne(id: number): Promise<IPaketLayanan> {
    try {
      let result = (await this.prisma.set_pakets.findUnique({
        where: {
          id: id,
        },
        select: {
          id: true,
          name: true,
          harga: true,
          sample_jenis_default: true,
        },
      })) as IPaketLayanan;

      if (!result) {
        throw new NotFoundException();
      }

      result = await this.sumHargaPemeriksaan(result);

      result = {
        ...result,
        layanans: (await this.findLayananByPaketId(id)) as ILayanan[],
      };

      return result;
    } catch (error) {
      throw error;
    }
  }

  async sumHargaPemeriksaan(pemeriksaan: any): Promise<any> {
    const layanans = await this.prisma.set_paket_tindakans.findMany({
      where: {
        paket_id: pemeriksaan.id,
      },
      select: {
        tindakan_id: true,
      },
    });

    const hargaLayanans = await Promise.all(
      layanans.map(async (layanan) => {
        const harga = await this.findHargaLayanan(
          layanan.tindakan_id.toString(),
        );

        if (!harga) {
          return 0;
        }

        return +harga.harga;
      }),
    ).then((harga) => harga);

    const totalHarga = hargaLayanans.reduce((a, b) => a + b, 0);

    return {
      ...pemeriksaan,
      harga: totalHarga.toString(),
    };
  }

  async findHargaLayanan(id: string): Promise<any> {
    try {
      const result = await this.prisma.set_tindakans.findUnique({
        where: {
          id: +id,
        },
        select: {
          harga: true,
        },
      });

      if (!result) {
        return {
          harga: '0',
        };
      }

      return result;
    } catch (error) {
      throw error;
    }
  }

  async findLayananByPaketId(id: number): Promise<ILayanan[]> {
    try {
      const results = await this.prisma.set_paket_tindakans.findMany({
        where: {
          paket_id: id,
        },
        select: {
          tindakan_id: true,
        },
      });

      if (!results || results.length === 0) {
        throw new NotFoundException();
      }

      const layanans = await Promise.all(
        results.map(async (result) => {
          const layanan = await this.prisma.set_tindakans.findUnique({
            where: {
              id: result.tindakan_id,
            },
            select: {
              id: true,
              name: true,
              harga: true,
              jenis_tindakan_id: true,
            },
          });

          if (!layanan) {
            return {
              id: result.tindakan_id,
              name: '',
              harga: '',
              jenis_tindakan_id: null,
            };
          }

          return layanan;
        }),
      ).then((layanans) => layanans);

      return layanans;
    } catch (error) {
      throw error;
    }
  }
}
