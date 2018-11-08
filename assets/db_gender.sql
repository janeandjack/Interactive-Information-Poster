-- phpMyAdmin SQL Dump
-- version 4.7.9
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Nov 08, 2018 at 02:04 AM
-- Server version: 5.7.21
-- PHP Version: 5.6.35

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_demographic_canada`
--

-- --------------------------------------------------------

--
-- Table structure for table `db_gender`
--

DROP TABLE IF EXISTS `db_gender`;
CREATE TABLE IF NOT EXISTS `db_gender` (
  `age_range` varchar(30) NOT NULL,
  `male` int(30) NOT NULL,
  `female` int(30) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `db_gender`
--

INSERT INTO `db_gender` (`age_range`, `male`, `female`) VALUES
('0-14', 2819279, 2680024),
('15-24', 2171703, 2048546),
('25-54', 7227145, 7020156),
('54-64', 2492120, 2529652),
('65+', 2958721, 3676334);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
