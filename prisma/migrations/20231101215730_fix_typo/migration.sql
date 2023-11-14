/*
  Warnings:

  - You are about to drop the column `tinda_id` on the `tbl_data_pemeriksaans` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `tbl_data_pemeriksaans` DROP COLUMN `tinda_id`,
    ADD COLUMN `tindakan_id` BIGINT NULL;
