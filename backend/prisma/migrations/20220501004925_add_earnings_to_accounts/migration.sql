-- CreateTable
CREATE TABLE `Earning` (
    `earning_id` INTEGER NOT NULL AUTO_INCREMENT,
    `description` VARCHAR(191) NULL,
    `date` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `value` DECIMAL(65, 30) NOT NULL,
    `accountId` INTEGER NULL,

    PRIMARY KEY (`earning_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Earning` ADD CONSTRAINT `Earning_accountId_fkey` FOREIGN KEY (`accountId`) REFERENCES `Account`(`account_id`) ON DELETE SET NULL ON UPDATE CASCADE;
