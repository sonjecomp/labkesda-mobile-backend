/*
  Warnings:

  - The primary key for the `set_categories` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `set_categories` table. The data in that column could be lost. The data in that column will be cast from `UnsignedBigInt` to `BigInt`.

*/
-- DropIndex
DROP INDEX `set_libraries_category_id_fkey` ON `set_libraries`;

-- AlterTable
ALTER TABLE `set_categories` DROP PRIMARY KEY,
    MODIFY `id` BIGINT NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`id`);

-- AddForeignKey
ALTER TABLE `set_libraries` ADD CONSTRAINT `set_libraries_category_id_fkey` FOREIGN KEY (`category_id`) REFERENCES `set_categories`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
