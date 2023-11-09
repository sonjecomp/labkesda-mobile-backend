-- CreateTable
CREATE TABLE `tbl_data_pemeriksaan` (
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
CREATE TABLE `tbl_pembayaran` (
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

-- CreateTable
CREATE TABLE `set_kode_pos` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `provinsi_id` BIGINT NOT NULL,
    `kota_kabupaten_id` BIGINT NOT NULL,
    `kecamatan_id` BIGINT NOT NULL,
    `kelurahan_id` BIGINT NOT NULL,
    `kode_pos` INTEGER NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `set_kelurahan` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `kecamatan_id` BIGINT NOT NULL,
    `name` VARCHAR(255) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `set_kecamatan` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `kota_kabupaten_id` BIGINT NOT NULL,
    `name` VARCHAR(255) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `set_kota` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `provinsi_id` BIGINT NOT NULL,
    `name` VARCHAR(255) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `set_provinsi` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `set_libraries` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `category_id` BIGINT NOT NULL,
    `name` VARCHAR(255) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `set_category` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tbl_antrian_pasien` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `no_antrian` INTEGER NOT NULL,
    `kode_pemeriksaan` VARCHAR(255) NULL,
    `pasien_id` BIGINT NOT NULL,
    `tipe_pasien_id` BIGINT NOT NULL,
    `rujukan_rs_id` BIGINT NULL,
    `instansi_id` BIGINT NULL,
    `dokter_id` BIGINT NULL,
    `umur` INTEGER NULL,
    `waktu_kunjungan` DATE NOT NULL,
    `status_pendaftaran_id` BIGINT NULL DEFAULT 29,
    `lab_validator_id` BIGINT NULL DEFAULT 8,
    `validasi_kesmas` INTEGER NULL DEFAULT 0,
    `waktu_proses_pendaftaran` DATETIME(3) NULL,
    `user_proses_pendaftaran` BIGINT NULL,
    `catatan` LONGTEXT NULL,
    `pembayaran_id` BIGINT NULL,
    `status_pembayaran_id` BIGINT NULL DEFAULT 31,
    `status_terima_sample_id` BIGINT NULL DEFAULT 32,
    `sample_pengambil` VARCHAR(255) NULL,
    `sample_waktu` VARCHAR(255) NULL,
    `sample_jenis` VARCHAR(255) NULL,
    `sample_lokasi` VARCHAR(255) NULL,
    `sample_kondisi` VARCHAR(255) NULL,
    `sample_wadah` VARCHAR(255) NULL,
    `waktu_terima_sample` DATETIME(3) NULL,
    `user_terima_sample` BIGINT NULL,
    `waktu_kirim_sample` DATETIME(3) NULL,
    `user_kirim_sample` BIGINT NULL,
    `catatan_sample` LONGTEXT NULL,
    `status_pemeriksaan_id` BIGINT NULL DEFAULT 34,
    `waktu_input_pemeriksaan` DATETIME(3) NULL,
    `user_input_pemeriksaan` BIGINT NULL,
    `catatan_pemeriksaan` LONGTEXT NULL,
    `waktu_validasi` DATETIME(3) NULL,
    `user_validasi` BIGINT NULL,
    `catatan_validasi` LONGTEXT NULL,
    `turn_around_time` VARCHAR(255) NULL,
    `deleted_at` DATETIME(3) NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
