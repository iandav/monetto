-- DropForeignKey
ALTER TABLE `Earning` DROP FOREIGN KEY `Earning_accountId_fkey`;

-- DropForeignKey
ALTER TABLE `Expense` DROP FOREIGN KEY `Expense_accountId_fkey`;

-- AddForeignKey
ALTER TABLE `Earning` ADD CONSTRAINT `Earning_accountId_fkey` FOREIGN KEY (`accountId`) REFERENCES `Account`(`account_id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Expense` ADD CONSTRAINT `Expense_accountId_fkey` FOREIGN KEY (`accountId`) REFERENCES `Account`(`account_id`) ON DELETE CASCADE ON UPDATE CASCADE;
