-- CreateTable
CREATE TABLE `driver` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `namaDriver` VARCHAR(191) NOT NULL,
    `nomorTelepon` VARCHAR(191) NOT NULL,
    `nomorSIM` VARCHAR(191) NOT NULL,
    `status` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `mobil` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `namaMobil` VARCHAR(191) NOT NULL,
    `merek` VARCHAR(191) NOT NULL,
    `platNomor` VARCHAR(191) NOT NULL,
    `kapasitas` VARCHAR(191) NOT NULL,
    `statusMobil` VARCHAR(191) NOT NULL,
    `foto` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `reservasis` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `pemesan` VARCHAR(191) NOT NULL,
    `platMobil` VARCHAR(191) NOT NULL,
    `driver` VARCHAR(191) NOT NULL,
    `startDate` DATETIME(3) NOT NULL,
    `endDate` DATETIME(3) NOT NULL,
    `harga` INTEGER NOT NULL,
    `status` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

