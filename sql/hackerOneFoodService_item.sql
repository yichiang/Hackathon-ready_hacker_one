CREATE DATABASE  IF NOT EXISTS `hackerOneFoodService` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `hackerOneFoodService`;
-- MySQL dump 10.13  Distrib 5.7.17, for macos10.12 (x86_64)
--
-- Host: readyhack.cqti1tc8lxbn.us-east-1.rds.amazonaws.com    Database: hackerOneFoodService
-- ------------------------------------------------------
-- Server version	5.6.39-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `item`
--

DROP TABLE IF EXISTS `item`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `item` (
  `itemId` int(11) NOT NULL DEFAULT '0',
  `name` varchar(32) DEFAULT NULL,
  `imgUrl` varchar(128) DEFAULT NULL,
  `description` varchar(512) DEFAULT NULL,
  `price` decimal(5,2) DEFAULT NULL,
  PRIMARY KEY (`itemId`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `item`
--

LOCK TABLES `item` WRITE;
/*!40000 ALTER TABLE `item` DISABLE KEYS */;
INSERT INTO `item` VALUES (1,'Back-To-Basics Breakfast','https://img.trycaviar.com/bJd2uCG0RJHtvJIuw4HtlIGpEq4=/700x466/https://s3.amazonaws.com/trycaviar.com/offers/56/2023.jpg','Wayward’s signature scrambled tofu, hashbrowns, toast, and steamed greens. Classic!',23.00),(2,'The Wayward Sampler','https://img.trycaviar.com/ewitVXCFdZuPks3i2yO80sRyOCo=/700x466/https://s3.amazonaws.com/trycaviar.com/offers/56/2053.jpg','Fried mozzarella wedges, tater tots, and buffalo chicken drumsticks. Served with warm marinara, ranch dressing, and celery sticks.',12.00),(3,'Fried Artichokes','https://img.trycaviar.com/VtPwkRo3DVFUvB1Ycv6hV4Ngn_Y=/700x466/https://s3.amazonaws.com/trycaviar.com/offers/56/2055.jpg','A hearty plate of lightly-floured and deep-fried marinated artichokes. Served with a side of our house made ranch sauce for dipping.',9.00),(4,'Basket of French Fries','https://img.trycaviar.com/0adrJcONBgrtXONmED_U9doeoIs=/700x466/https://s3.amazonaws.com/trycaviar.com/offers/56/2054.jpg','Choose from ranch, BBQ, 1000 island dressing, chipotle-tahini dressing, or hunny mustard.',6.00),(5,'Fried Mozzarella Wedges','https://img.trycaviar.com/WTuV90AklAeelyaZR-xTAGRWQoI=/700x466/https://s3.amazonaws.com/trycaviar.com/offers/56/2056.jpg','Mozzarella cheese, battered, breaded and fried to a golden brown. Served with warm marinara.',9.00),(6,'Tofuevos Rancheros','https://img.trycaviar.com/6UQwZQ7vC5wLbRNkyjcckHLvxjQ=/700x466/https://s3.amazonaws.com/trycaviar.com/offers/56/2024.jpg','A crunchy tostada covered with seasoned tofu scrambled with peppers, onion, and black beans. Topped off with fire-roasted enchilada sauce, avacado, and cheddar cheese sauce.  Served with home fries.',10.00),(7,'Country Fried Burrito','https://img.trycaviar.com/SILZDHzuBEwNKjE0T1R5_KrcoZc=/700x466/https://s3.amazonaws.com/trycaviar.com/offers/56/2025.jpg','A field roast hazelnut cutlet, hashbrowns, and grilled onions and peppers rolled inside a warm flour tortilla. Topped with country gravy and cheddar cheese sauce. Served with homefries.',7.65),(8,'McWayward','https://img.trycaviar.com/c5m2E151wPqqAoO0RCRufNSX6c0=/700x466/https://s3.amazonaws.com/trycaviar.com/offers/56/2026.jpg','A toasted sourdough English muffin with grilled ham, cheddar cheese, mayo, and an “eggy” omelet round. Served with hashbrowns.',9.25),(9,'Farmer\'s Hash','https://img.trycaviar.com/_6sB65bWBPuVXlelG-dWTBuXvwU=/700x466/https://s3.amazonaws.com/trycaviar.com/offers/56/2027.jpg','Our seasoned curry tofu scrambled together with chopped sausage, savory diced potatoes, peppers and onions, then topped with a dollop of country gravy and sprinkled with cheddar cheese. Served with toast.',10.25),(10,'The Lumberjack','https://img.trycaviar.com/qKZIx21dgYgtl6qQnG4K9CA6Jcw=/700x466/https://s3.amazonaws.com/trycaviar.com/offers/56/2028.jpg','Our seasoned tofu, hashbrowns, tempeh bacon, and sausage links. Served with three silver-dollar pancakes. Burly!',1.25),(11,'Pancakes','https://img.trycaviar.com/K3KYH_bXok-6jVkyPFN8ijz9sM8=/700x466/https://s3.amazonaws.com/trycaviar.com/offers/56/2029.jpg','Served with butter and maple syrup.',12.20);
/*!40000 ALTER TABLE `item` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-07-01 14:52:01
