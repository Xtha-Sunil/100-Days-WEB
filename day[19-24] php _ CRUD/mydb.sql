-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Dec 25, 2022 at 06:29 PM
-- Server version: 5.7.34
-- PHP Version: 8.0.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `mydb`
--

-- --------------------------------------------------------

--
-- Table structure for table `marks`
--

CREATE TABLE `marks` (
`Std. ID` int(11) NOT NULL,
`Physics` int(11) NOT NULL,
`Computer` int(11) NOT NULL,
`English` int(11) NOT NULL,
`Nepali` int(11) NOT NULL,
`Chemistry` int(11) NOT NULL,
`Math` int(11) NOT NULL
) ENGINE = MyISAM DEFAULT CHARSET = utf8;

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
`ID` int(11) NOT NULL,
`Name` varchar(11) NOT NULL,
`Email` varchar(11) NOT NULL,
`Pasword` varchar(11) NOT NULL,
`Contact` int(11) NOT NULL
) ENGINE = MyISAM DEFAULT CHARSET = utf8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;