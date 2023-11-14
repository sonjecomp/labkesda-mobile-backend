/*
  Warnings:

  - You are about to drop the `tbl_data_pemeriksaan` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `tbl_pembayaran` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `tbl_data_pemeriksaan`;

-- DropTable
DROP TABLE `tbl_pembayaran`;

-- CreateTable
CREATE TABLE `tbl_data_pemeriksaans` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `pasien_id` BIGINT NULL,
    `antrian_id` BIGINT NULL,
    `lab_id` BIGINT NULL,
    `bidang_tindakan_id` BIGINT NULL,
    `tinda_id` BIGINT NULL,
    `parent_id` BIGINT NULL,
    `parameter_id` BIGINT NULL,
    `paket_id` BIGINT NULL,
    `sample_no` INTEGER NULL,
    `data_sample_id` INTEGER NULL,
    `hasil` VARCHAR(191) NULL,
    `hasil_keterangan` VARCHAR(191) NULL,
    `validasi_id` BIGINT NOT NULL DEFAULT 42,
    `hasil_pemeriksaan_id` BIGINT NULL,
    `catatan_bawah_hasil` LONGTEXT NULL,
    `deleted_at` DATETIME(3) NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tbl_pembayarans` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `employee_id` BIGINT NULL,
    `pasien_id` BIGINT NOT NULL,
    `antrian_id` BIGINT NOT NULL,
    `group_code` LONGTEXT NULL,
    `total_pembayaran` VARCHAR(255) NOT NULL,
    `kembalian` VARCHAR(255) NULL,
    `potongan` VARCHAR(255) NULL,
    `total_hutang` VARCHAR(255) NULL,
    `pembayaran_setor_id` BIGINT NULL,
    `jenis_pembayaran_id` BIGINT NULL,
    `status_pembayaran_id` BIGINT NULL,
    `status_setor` INTEGER NOT NULL DEFAULT 0,
    `validasi_setor` INTEGER NOT NULL DEFAULT 0,
    `validasi_batal_bayar` INTEGER NOT NULL DEFAULT 0,
    `alasan_batal_bayar` LONGTEXT NULL,
    `tanggal_pembayaran` DATETIME(3) NULL,
    `deleted_at` DATETIME(3) NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
