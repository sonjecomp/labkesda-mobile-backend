/*
  Warnings:

  - You are about to drop the column `tanggal_pembayaran` on the `tbl_pembayarans` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `tbl_pembayarans` DROP COLUMN `tanggal_pembayaran`,
    ADD COLUMN `tenggat_pembayaran` DATETIME(3) NULL;
