import { tbl_user_customers } from '@prisma/client';

export class UserPasien implements tbl_user_customers {
  id: bigint;
  name: string;
  name_petugas: string;
  name_instansi: string;
  instansi_mou_id: bigint;
  is_instansi: boolean;
  email: string;
  code_verification_email: number;
  code_verification_noPhone: number;
  status_verif_email: boolean;
  status_verif_noPhone: boolean;
  kode_pendaftaran: string;
  nik: string;
  type_account_id: bigint;
  jenis_kelamin_id: bigint;
  golongan_darah_id: bigint;
  tempat_lahir: string;
  tanggal_lahir: Date;
  status_perkawinan_id: bigint;
  pendidikan_id: bigint;
  pekerjaan: string;
  alamat_domisili: string;
  agama: bigint;
  provinsi_id: bigint;
  kotaKabupaten_id: bigint;
  kecamatan_id: bigint;
  kelurahan_id: bigint;
  kode_pos: string;
  warga_negara_id: bigint;
  noHP: string;
  remember_token: string;
  created_at: Date;
  updated_at: Date;
}
