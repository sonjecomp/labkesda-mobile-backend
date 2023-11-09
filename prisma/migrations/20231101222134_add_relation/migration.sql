-- AddForeignKey
ALTER TABLE `set_kelurahan` ADD CONSTRAINT `set_kelurahan_kecamatan_id_fkey` FOREIGN KEY (`kecamatan_id`) REFERENCES `set_kecamatan`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `set_kecamatan` ADD CONSTRAINT `set_kecamatan_kota_kabupaten_id_fkey` FOREIGN KEY (`kota_kabupaten_id`) REFERENCES `set_kota`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `set_kota` ADD CONSTRAINT `set_kota_provinsi_id_fkey` FOREIGN KEY (`provinsi_id`) REFERENCES `set_provinsi`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `set_libraries` ADD CONSTRAINT `set_libraries_category_id_fkey` FOREIGN KEY (`category_id`) REFERENCES `set_category`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
