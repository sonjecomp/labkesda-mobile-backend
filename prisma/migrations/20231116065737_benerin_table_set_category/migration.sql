/*
  Warnings:

  - You are about to drop the `set_category` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `set_libraries` DROP FOREIGN KEY `set_libraries_category_id_fkey`;

-- DropTable
DROP TABLE `set_category`;

-- CreateTable
CREATE TABLE `set_categories` (
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `created_at` TIMESTAMP(0) NULL,
    `updated_at` TIMESTAMP(0) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- -- AddForeignKey
-- ALTER TABLE `set_libraries` ADD CONSTRAINT `set_libraries_category_id_fkey` FOREIGN KEY (`category_id`) REFERENCES `set_categories`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- -- RenameIndex
-- ALTER TABLE `set_libraries` RENAME INDEX `set_libraries_category_id_fkey` TO `set_libraries_categories_id_fkey`;
