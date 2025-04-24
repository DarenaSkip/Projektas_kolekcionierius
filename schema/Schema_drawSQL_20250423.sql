CREATE TABLE `Users`(
    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `username` VARCHAR(50) NOT NULL,
    `email` VARCHAR(100) NOT NULL,
    `password_hash` VARCHAR(255) NOT NULL,
    `role` ENUM('' USER '', '' admin '') NOT NULL DEFAULT '' USER '',
    `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);
CREATE TABLE `Items`(
    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `user_id` INT NOT NULL,
    `title` VARCHAR(100) NOT NULL,
    `description` TEXT NULL,
    `category_id` INT NOT NULL,
    `price` DECIMAL(10, 2) NOT NULL,
    `is_available` BOOLEAN NOT NULL DEFAULT '1',
    `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `related_table` ENUM(
        '' stamps '',
        '' coins '',
        '' banknotes '',
        '' postcards '',
        '' antique ''
    ) NOT NULL
);
CREATE TABLE `Categories`(
    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `name` VARCHAR(100) NOT NULL,
    `parent_id` INT NULL
);
CREATE TABLE `Stamps_items`(
    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `item_id` INT NOT NULL,
    `year` INT NULL,
    `country` VARCHAR(100) NULL,
    `nominal` VARCHAR(50) NULL,
    `theme` VARCHAR(100) NULL,
    `is_used` BOOLEAN NOT NULL DEFAULT '0',
    `condition` ENUM(
        '' mint '',
        '' excellent '',
        '' good '',
        '' fair '',
        '' poor ''
    ) NOT NULL DEFAULT '' good ''
);
CREATE TABLE `Item_images`(
    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `item_id` INT NOT NULL,
    `image_url` VARCHAR(255) NOT NULL,
    `alt_text` VARCHAR(255) NULL
);
CREATE TABLE `Postcard_items (future)`(
    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `item_id` INT NOT NULL,
    `year` INT NULL,
    `country` VARCHAR(100) NULL,
    `theme` VARCHAR(100) NULL,
    `is_written` BOOLEAN NOT NULL DEFAULT '0',
    `is_sent` BOOLEAN NOT NULL DEFAULT '0',
    `postmark_year` INT NULL,
    `notes` TEXT NULL,
    `condition` ENUM(
        '' mint '',
        '' excellent '',
        '' good '',
        '' fair '',
        '' poor ''
    ) NOT NULL DEFAULT '' good ''
);
CREATE TABLE `Coins_items (future)`(
    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `item_id` INT NOT NULL,
    `year` VARCHAR(100) NULL,
    `country` VARCHAR(100) NULL,
    `nominal` VARCHAR(50) NULL,
    `metal` VARCHAR(50) NULL,
    `is_circulated` BOOLEAN NOT NULL DEFAULT '0',
    `condition` ENUM(
        '' mint '',
        '' excellent '',
        '' good '',
        '' fair '',
        '' poor ''
    ) NOT NULL DEFAULT '' good ''
);
CREATE TABLE `Banknotes_items (future)`(
    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `item_id` INT NOT NULL,
    `year` INT NULL,
    `country` VARCHAR(100) NULL,
    `nominal` VARCHAR(50) NULL,
    `serial_number` VARCHAR(50) NULL,
    `is_circulated` BOOLEAN NOT NULL DEFAULT '0',
    `condition` ENUM(
        '' mint '',
        '' excellent '',
        '' good '',
        '' fair '',
        '' poor ''
    ) NOT NULL DEFAULT '' good '',
    `has_watermark` BOOLEAN NOT NULL DEFAULT '0',
    `signatures_count` TINYINT NULL
);
CREATE TABLE `Antique_items (future)`(
    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `item_id` INT NOT NULL,
    `year_estimated` INT NULL,
    `country_origin` VARCHAR(100) NULL,
    `item_type` VARCHAR(100) NULL,
    `material` VARCHAR(100) NULL,
    `is_functional` BOOLEAN NOT NULL DEFAULT '0',
    `condition` ENUM(
        '' mint '',
        '' excellent '',
        '' good '',
        '' fair '',
        '' poor ''
    ) NOT NULL
);
CREATE TABLE `Messages`(
    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY
);
CREATE TABLE `Auctions`(
    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY
);
CREATE TABLE `Favorites`(
    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY
);
ALTER TABLE
    `Coins_items (future)` ADD CONSTRAINT `coins_items (future)_item_id_foreign` FOREIGN KEY(`item_id`) REFERENCES `Items`(`id`);
ALTER TABLE
    `Stamps_items` ADD CONSTRAINT `stamps_items_item_id_foreign` FOREIGN KEY(`item_id`) REFERENCES `Items`(`id`);
ALTER TABLE
    `Banknotes_items (future)` ADD CONSTRAINT `banknotes_items (future)_item_id_foreign` FOREIGN KEY(`item_id`) REFERENCES `Items`(`id`);
ALTER TABLE
    `Item_images` ADD CONSTRAINT `item_images_item_id_foreign` FOREIGN KEY(`item_id`) REFERENCES `Items`(`id`);
ALTER TABLE
    `Antique_items (future)` ADD CONSTRAINT `antique_items (future)_item_id_foreign` FOREIGN KEY(`item_id`) REFERENCES `Items`(`id`);
ALTER TABLE
    `Items` ADD CONSTRAINT `items_user_id_foreign` FOREIGN KEY(`user_id`) REFERENCES `Users`(`id`);
ALTER TABLE
    `Postcard_items (future)` ADD CONSTRAINT `postcard_items (future)_item_id_foreign` FOREIGN KEY(`item_id`) REFERENCES `Items`(`id`);
ALTER TABLE
    `Items` ADD CONSTRAINT `items_category_id_foreign` FOREIGN KEY(`category_id`) REFERENCES `Categories`(`id`);