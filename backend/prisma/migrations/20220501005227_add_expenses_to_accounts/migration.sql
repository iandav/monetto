/*
  Warnings:

  - Made the column `accountId` on table `Earning` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE `Earning` DROP FOREIGN KEY `Earning_accountId_fkey`;

-- AlterTable
ALTER TABLE `Earning` MODIFY `accountId` INTEGER NOT NULL;

-- CreateTable
CREATE TABLE `Expense` (
    `expense_id` INTEGER NOT NULL AUTO_INCREMENT,
    `description` VARCHAR(191) NULL,
    `date` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `value` DECIMAL(65, 30) NOT NULL,
    `accountId` INTEGER NOT NULL,

    PRIMARY KEY (`expense_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Earning` ADD CONSTRAINT `Earning_accountId_fkey` FOREIGN KEY (`accountId`) REFERENCES `Account`(`account_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Expense` ADD CONSTRAINT `Expense_accountId_fkey` FOREIGN KEY (`accountId`) REFERENCES `Account`(`account_id`) ON DELETE RESTRICT ON UPDATE CASCADE;
