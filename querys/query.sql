CREATE DATABASE employmentDB;

USE employmentDB;

CREATE TABLE `employmentDB`.`area` (
  `nArea` INT NOT NULL AUTO_INCREMENT COMMENT 'ID de registro del área',
  `cDescription` VARCHAR(50) NOT NULL COMMENT 'Descripción del área, es obligatorio',
  `bActive` TINYINT(4) NULL DEFAULT 1,
  `dRegisterDate` DATETIME NULL DEFAULT NULL,
  `dLastDate` DATETIME NULL DEFAULT NULL,
  `dDeleteDate` DATETIME NULL DEFAULT NULL,
  PRIMARY KEY (`nArea`)
)
ENGINE = InnoDB
DEFAULT CHARACTER SET = latin1
COLLATE = latin1_general_ci
COMMENT = 'Tabla de información de áreas';

CREATE TABLE `employmentDB`.`Country` (
  `nCountry` INT NOT NULL AUTO_INCREMENT COMMENT 'ID de registro del país',
  `cDescription` VARCHAR(50) NOT NULL COMMENT 'Descripción del área, es obligatorio',
  `bActive` TINYINT(4) NULL DEFAULT 1,
  `dRegisterDate` DATETIME NULL DEFAULT NULL,
  `dLastDate` DATETIME NULL DEFAULT NULL,
  `dDeleteDate` DATETIME NULL DEFAULT NULL,
  PRIMARY KEY (`nCountry`)
)
ENGINE = InnoDB
DEFAULT CHARACTER SET = latin1
COLLATE = latin1_general_ci
COMMENT = 'Tabla de información de países';

CREATE TABLE `employmentDB`.`typeID` (
  `nTypeID` INT NOT NULL AUTO_INCREMENT COMMENT 'ID de registro del tipo de identificación',
  `cDescription` VARCHAR(50) NOT NULL COMMENT 'Descripción del tipo, es obligatorio',
  `bActive` TINYINT(4) NULL DEFAULT 1,
  `dRegisterDate` DATETIME NULL DEFAULT NULL,
  `dLastDate` DATETIME NULL DEFAULT NULL,
  `dDeleteDate` DATETIME NULL DEFAULT NULL,
  PRIMARY KEY (`nTypeID`)
)
ENGINE = InnoDB
DEFAULT CHARACTER SET = latin1
COLLATE = latin1_general_ci
COMMENT = 'Tabla de información de typeid de identificación';

CREATE TABLE `employmentDB`.`employee` (
  `nId` INT NOT NULL AUTO_INCREMENT  COMMENT 'ID de registro del empleado',
  `cFirstName` VARCHAR(20) NOT NULL COMMENT 'Primer nombre del empleado, es obligatorio',
  `cOthersName` VARCHAR(50) NULL COMMENT 'Otros nombres del empleado, es opcional',
  `cSurname` VARCHAR(20) NOT NULL COMMENT 'Primer apellido del empleado, es obligatorio',
  `cSecondSurname` VARCHAR(20) NOT NULL,
  `nCountry` INT(11) NULL DEFAULT NULL,
  `nTypeID` INT(11) NULL DEFAULT NULL,
  `cNumberID` VARCHAR(20) NULL,
  `cEmail` VARCHAR(300) NULL,
  `dAdmissionDate` DATETIME NULL DEFAULT NULL,
  `nArea` INT(11) NULL DEFAULT NULL,
  `bStatus` TINYINT(4) NULL DEFAULT 1,
  `bActive` TINYINT(4) NULL DEFAULT 1,
  `dRegisterDate` DATETIME NULL DEFAULT NULL,
  `dLastDate` DATETIME NULL DEFAULT NULL,
  `dDeleteDate` DATETIME NULL DEFAULT NULL,
  PRIMARY KEY (`nId`)
)
ENGINE = InnoDB
DEFAULT CHARACTER SET = latin1
COLLATE = latin1_general_ci
COMMENT = 'Tabla de información de employment';

ALTER TABLE `employmentDB`.`employee` 
ADD INDEX `FK_employee_area_idx` (`nArea` ASC) VISIBLE,
ADD INDEX `FK_employee_typeid_idx` (`nTypeID` ASC) VISIBLE,
ADD INDEX `FK_employee_country_idx` (`nCountry` ASC) VISIBLE;
;
ALTER TABLE `employmentDB`.`employee` 
ADD CONSTRAINT `FK_employee_area`
  FOREIGN KEY (`nArea`)
  REFERENCES `employmentDB`.`area` (`nArea`)
  ON DELETE NO ACTION
  ON UPDATE NO ACTION,
ADD CONSTRAINT `FK_employee_country`
  FOREIGN KEY (`nCountry`)
  REFERENCES `employmentDB`.`country` (`nCountry`)
  ON DELETE NO ACTION
  ON UPDATE NO ACTION,
ADD CONSTRAINT `FK_employee_typeid`
  FOREIGN KEY (`nTypeID`)
  REFERENCES `employmentDB`.`typeID` (`nTypeID`)
  ON DELETE NO ACTION
  ON UPDATE NO ACTION;

ALTER TABLE `employmentDB`.`employee` 
DROP FOREIGN KEY `FK_employee_area`;
ALTER TABLE `employmentDB`.`employee` 
ADD CONSTRAINT `FK_employee_area`
  FOREIGN KEY (`nArea`)
  REFERENCES `employmentDB`.`area` (`nArea`)
  ON DELETE NO ACTION
  ON UPDATE NO ACTION;

ALTER TABLE `employmentDB`.`employee` 
DROP FOREIGN KEY `FK_employee_country`;
ALTER TABLE `employmentDB`.`employee` 
ADD CONSTRAINT `FK_employee_country`
  FOREIGN KEY (`nCountry`)
  REFERENCES `employmentDB`.`country` (`nCountry`)
  ON DELETE NO ACTION
  ON UPDATE NO ACTION;

ALTER TABLE `employmentDB`.`employee` 
DROP FOREIGN KEY `FK_employee_typeid`;
ALTER TABLE `employmentDB`.`employee` 
ADD CONSTRAINT `FK_employee_typeid`
  FOREIGN KEY (`nTypeID`)
  REFERENCES `employmentDB`.`typeID` (`nTypeID`)
  ON DELETE NO ACTION
  ON UPDATE NO ACTION;

INSERT INTO `employmentDB`.`area` (`cDescription`, `bActive`, `dRegisterDate`) VALUES ('Administración', '1', '2022/07/02 23:53:00');
INSERT INTO `employmentDB`.`area` (`cDescription`, `bActive`, `dRegisterDate`) VALUES ('Compras', '1', '2022/07/02 23:53:00');
INSERT INTO `employmentDB`.`area` (`cDescription`, `bActive`, `dRegisterDate`) VALUES ('Financiera', '1', '2022/07/02 23:53:00');
INSERT INTO `employmentDB`.`area` (`cDescription`, `bActive`, `dRegisterDate`) VALUES ('Infraestructura', '1', '2022/07/02 23:53:00');
INSERT INTO `employmentDB`.`area` (`cDescription`, `bActive`, `dRegisterDate`) VALUES ('Servicios Varios', '1', '2022/07/02 23:53:00');
INSERT INTO `employmentDB`.`area` (`cDescription`, `bActive`, `dRegisterDate`) VALUES ('Talento Humano', '1', '2022/07/02 23:53:00');

INSERT INTO `employmentDB`.`country` (`cDescription`, `bActive`, `dRegisterDate`) VALUES ('Colombia', '1', '2022/07/02 23:53:00');
INSERT INTO `employmentDB`.`country` (`cDescription`, `bActive`, `dRegisterDate`) VALUES ('Estados Unidos de América', '1', '2022/07/02 23:53:00');

INSERT INTO `employmentDB`.`typeID` (`cDescription`, `bActive`, `dRegisterDate`) VALUES ('Cédula de Ciudadanía', '1', '2022/07/02 23:53:00');
INSERT INTO `employmentDB`.`typeID` (`cDescription`, `bActive`, `dRegisterDate`) VALUES ('Cédula de Extranjería', '1', '2022/07/02 23:53:00');
INSERT INTO `employmentDB`.`typeID` (`cDescription`, `bActive`, `dRegisterDate`) VALUES ('Pasaporte', '1', '2022/07/02 23:53:00');
INSERT INTO `employmentDB`.`typeID` (`cDescription`, `bActive`, `dRegisterDate`) VALUES ('Permiso Especial', '1', '2022/07/02 23:53:00');
