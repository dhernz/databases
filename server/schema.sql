



-- ---
-- Globals
-- ---

-- SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
-- SET FOREIGN_KEY_CHECKS=0;

-- ---
-- Table 'Users'
-- 
-- ---
USE `chat`

DROP TABLE IF EXISTS `Messages`;
DROP TABLE IF EXISTS `Users`;
    
CREATE TABLE `Users` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `Name` VARCHAR(20) NOT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'Room'
-- 
-- ---

DROP TABLE IF EXISTS `Room`;
    
CREATE TABLE `Room` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `Name` VARCHAR(20) NOT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'Messages'
-- 
-- ---


CREATE TABLE `Messages` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `id_Room` INTEGER NULL DEFAULT NULL,
  `id_Users` INTEGER NULL DEFAULT NULL,
  `Message` VARCHAR(200) NOT NULL,
  
  PRIMARY KEY (`id`)
);
    
-- CREATE TABLE `Messages` (
--   `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
--   `id_Room` INTEGER NULL DEFAULT NULL,
--   `id_Users` INTEGER NULL DEFAULT NULL,
--   `Message` VARCHAR(200) NOT NULL,
--   PRIMARY KEY (`id`)
-- );

-- ---
-- Foreign Keys 
-- ---

ALTER TABLE `Messages` ADD FOREIGN KEY (id_Room) REFERENCES `Room` (`id`);
ALTER TABLE `Messages` ADD FOREIGN KEY (id_Users) REFERENCES `Users` (`id`);

-- ---
-- Table Properties
-- ---

-- ALTER TABLE `Users` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `Room` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `Messages` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ---
-- Test Data
-- ---

-- INSERT INTO `Users` (`id`,`Name`) VALUES
-- ('','');
-- INSERT INTO `Room` (`id`,`Name`) VALUES
-- ('','');
-- INSERT INTO `Messages` (`id`,`id_Room`,`id_Users`,`Message`) VALUES
-- ('','','','');

