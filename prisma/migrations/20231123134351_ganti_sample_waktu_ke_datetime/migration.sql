/*
  Warnings:

  - You are about to alter the column `sample_waktu` on the `tbl_antrian_pasiens` table. The data in that column could be lost. The data in that column will be cast from `VarChar(255)` to `DateTime(0)`.

*/
-- AlterTable
ALTER TABLE `tbl_antrian_pasiens` MODIFY `sample_waktu` DATETIME(0) NULL;
