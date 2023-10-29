-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: localhost    Database: webdienthoai
-- ------------------------------------------------------
-- Server version	8.0.34

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `cart`
--

DROP TABLE IF EXISTS `cart`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cart` (
  `cart_id` int NOT NULL AUTO_INCREMENT,
  `user_id` int DEFAULT NULL,
  `product_id` int DEFAULT NULL,
  `quantity` int DEFAULT NULL,
  PRIMARY KEY (`cart_id`),
  KEY `fk_user_idx` (`user_id`),
  KEY `fk_product_idx` (`product_id`),
  CONSTRAINT `fk_product` FOREIGN KEY (`product_id`) REFERENCES `products` (`product_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_user` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=79 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cart`
--

LOCK TABLES `cart` WRITE;
/*!40000 ALTER TABLE `cart` DISABLE KEYS */;
INSERT INTO `cart` VALUES (3,16,7,2),(14,17,7,3),(15,17,4,8),(45,17,2,1),(46,17,11,2),(47,17,44,2);
/*!40000 ALTER TABLE `cart` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `category`
--

DROP TABLE IF EXISTS `category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `category` (
  `category_id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`category_id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `category`
--

LOCK TABLES `category` WRITE;
/*!40000 ALTER TABLE `category` DISABLE KEYS */;
INSERT INTO `category` VALUES (1,'Samsung','samsung'),(2,'Xiaomi','xiaomi'),(3,'Oppo','oppo'),(4,'Nokia','nokia'),(5,'Apple','apple'),(6,'Mobiistar','mobiistar'),(7,'Huawei','huawei'),(8,'Realme','realme'),(9,'Philips','philips'),(10,'Vivo','vivo'),(11,'Mobell','mobell'),(12,'Itel','itel'),(13,'Coolpad','collpad'),(14,'HTC','htc'),(15,'Motorola','motorola');
/*!40000 ALTER TABLE `category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `media`
--

DROP TABLE IF EXISTS `media`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `media` (
  `media_id` int NOT NULL AUTO_INCREMENT,
  `product_id` int DEFAULT NULL,
  `img` varchar(255) DEFAULT NULL,
  `video` varchar(255) DEFAULT NULL,
  `sound` longtext,
  PRIMARY KEY (`media_id`),
  KEY `fk_produc_idx` (`product_id`),
  CONSTRAINT `fk_produc` FOREIGN KEY (`product_id`) REFERENCES `products` (`product_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=52 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `media`
--

LOCK TABLES `media` WRITE;
/*!40000 ALTER TABLE `media` DISABLE KEYS */;
INSERT INTO `media` VALUES (1,1,'https://cdn.tgdd.vn/Products/Images/42/267984/xiaomi-13-xanh-glr-1.jpg',NULL,NULL),(2,2,'https://cdn.tgdd.vn/Products/Images/42/264060/samsung-galaxy-s23-tim-glr-1.jpg',NULL,NULL),(3,3,'https://cdn.tgdd.vn/Products/Images/42/307891/oppo-a98-5g-xnah-1.jpg',NULL,NULL),(4,4,'https://cdn.tgdd.vn/Products/Images/42/249948/samsung-galaxy-s-ultra-tim-1.jpg',NULL,NULL),(5,5,'https://cdn.tgdd.vn/Products/Images/42/306979/oppo-reno10-pro-tim-1-2.jpg',NULL,NULL),(6,6,'https://cdn.tgdd.vn/Products/Images/42/303937/nokia-g22-xanh-1-1.jpg',NULL,NULL),(7,7,'https://cdn.tgdd.vn/Products/Images/42/223602/iphone-13-1-3.jpg',NULL,NULL),(8,8,'https://cdn.tgdd.vn/Products/Images/42/298377/samsung-galaxy-a34-den-1.jpg',NULL,NULL),(9,9,'https://cdn.tgdd.vn/Products/Images/42/289705/iphone-14-pro-max-purple-1.jpg',NULL,NULL),(10,10,'https://cdn.tgdd.vn/Products/Images/42/289710/iphone-14-plus-gold-1.jpeg',NULL,NULL),(11,11,'https://cdn.tgdd.vn/Products/Images/42/273335/xiaomi-redmi-note-12s-xanh-1-1.jpg',NULL,NULL),(12,12,'https://cdn.tgdd.vn/Products/Images/42/188846/mobiistar-x-1-3-org.jpg',NULL,NULL),(13,13,'https://cdn.tgdd.vn/Products/Images/42/278886/xiaomi-redmi-note-12-pro-xanh-1-1.jpg',NULL,NULL),(14,14,'https://cdn.tgdd.vn/Products/Images/42/309722/oppo-reno10-xanh-128gb-1.jpg',NULL,NULL),(15,15,'https://cdn.tgdd.vn/Products/Images/42/291623/xiaomi-12t-glr-den-1.jpg',NULL,NULL),(16,16,'https://cdn.tgdd.vn/Products/Images/42/302531/xiaomi-13-xanh-1.jpg',NULL,NULL),(17,17,'https://cdn.tgdd.vn/Products/Images/42/278886/xiaomi-redmi-note-12-pro-xanh-1-1.jpg',NULL,NULL),(18,18,'https://cdn.tgdd.vn/Products/Images/42/230217/huawei-y7a-600jpg-600x600.jpg',NULL,NULL),(19,19,'https://cdn.tgdd.vn/Products/Images/42/221983/huawei-y8s-1-600x600.jpg',NULL,NULL),(20,20,'https://cdn.tgdd.vn/Products/Images/42/189785/huawei-p30-den-1-org.jpg',NULL,NULL),(21,21,'https://cdn.tgdd.vn/Products/Images/42/22701/dien-thoai-di-dong-Nokia-1280-dienmay.com-l.jpg',NULL,NULL),(22,22,'https://cdn.tgdd.vn/Products/Images/42/194327/samsung-galaxy-a7-2018-128gb-black-400x400.jpg',NULL,NULL),(23,23,'https://cdn.tgdd.vn/Products/Images/42/192002/oppo-realme-2-pro-black-600x600.jpg',NULL,NULL),(24,24,'https://cdn.tgdd.vn/Products/Images/42/193462/realme-2-4gb-64gb-docquyen-600x600.jpg',NULL,NULL),(25,25,'https://cdn.tgdd.vn/Products/Images/42/193286/realme-c1-black-600x600.jpg',NULL,NULL),(26,26,'https://cdn.tgdd.vn/Products/Images/42/143146/philips-s329-2-300x300.jpg',NULL,NULL),(27,27,'https://cdn.tgdd.vn/Products/Images/42/193464/realme-2-pro-4gb-64gb-blue-600x600.jpg',NULL,NULL),(28,28,'https://cdn.tgdd.vn/Products/Images/42/139742/philips-e331-xenium-300-300x300.jpg',NULL,NULL),(29,29,'https://cdn.tgdd.vn/Products/Images/42/188828/vivo-v11-600x600.jpg',NULL,NULL),(30,30,'https://cdn.tgdd.vn/Products/Images/42/73727/philips-e103-9-300x300.jpg',NULL,NULL),(31,31,'https://cdn.tgdd.vn/Products/Images/42/155047/vivo-v9-2-1-600x600-600x600.jpg',NULL,NULL),(32,32,'https://cdn.tgdd.vn/Products/Images/42/156205/vivo-y85-red-docquyen-600x600.jpg',NULL,NULL),(33,33,'https://cdn.tgdd.vn/Products/Images/42/158585/vivo-y71-docquyen-600x600.jpg',NULL,NULL),(34,34,'https://cdn.tgdd.vn/Products/Images/42/92016/mobell-m789-8-300x300.jpg',NULL,NULL),(35,35,'https://cdn.tgdd.vn/Products/Images/42/112837/mobell-rock-3-2-300x300.jpg',NULL,NULL),(36,36,'https://cdn.tgdd.vn/Products/Images/42/193271/mobell-s60-red-1-600x600.jpg',NULL,NULL),(37,37,'https://cdn.tgdd.vn/Products/Images/42/146651/itel-it2123-d-300-300x300.jpg',NULL,NULL),(38,38,'https://cdn.tgdd.vn/Products/Images/42/186851/itel-p32-gold-600x600.jpg',NULL,NULL),(39,39,'https://cdn.tgdd.vn/Products/Images/42/193990/itel-a32f-pink-gold-600x600.jpg',NULL,NULL),(40,40,'https://cdn.tgdd.vn/Products/Images/42/193989/itel-it2161-600x600.jpg',NULL,NULL),(41,41,'https://cdn.tgdd.vn/Products/Images/42/193504/coolpad-n3d-blue-600x600.jpg',NULL,NULL),(42,42,'https://cdn.tgdd.vn/Products/Images/42/193502/coolpad-n3-gray-1-600x600.jpg',NULL,NULL),(43,43,'https://cdn.tgdd.vn/Products/Images/42/193503/coolpad-n3-mini-600x600.jpg',NULL,NULL),(44,44,'https://cdn.tgdd.vn/Products/Images/42/186397/htc-u12-life-1-600x600.jpg',NULL,NULL),(45,45,'https://cdn.tgdd.vn/Products/Images/42/109099/motorola-moto-c-4g-300-300x300.jpg',NULL,NULL),(46,46,'https://cdn.tgdd.vn/Products/Images/42/191483/iphone-xr-128gb-red-600x600.jpg',NULL,NULL),(47,47,'https://cdn.tgdd.vn/Products/Images/42/114110/iphone-8-plus-hh-600x600.jpg',NULL,NULL),(48,48,'https://cdn.tgdd.vn/Products/Images/42/114114/iphone-8-plus-256gb-red-600x600.jpg',NULL,NULL),(49,49,'https://cdn.tgdd.vn/Products/Images/42/190325/iphone-xr-black-400x460.png',NULL,NULL),(50,50,'https://cdn.tgdd.vn/Products/Images/42/157031/samsung-galaxy-a6-2018-2-600x600.jpg',NULL,NULL);
/*!40000 ALTER TABLE `media` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `order_product`
--

DROP TABLE IF EXISTS `order_product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `order_product` (
  `order_product_id` int NOT NULL AUTO_INCREMENT,
  `order_id` int DEFAULT NULL,
  `product_id` int DEFAULT NULL,
  `product_name` varchar(255) DEFAULT NULL,
  `product_img` varchar(255) DEFAULT NULL,
  `product_quantity` int DEFAULT NULL,
  `product_price` int DEFAULT NULL,
  `product_sale` double DEFAULT NULL,
  PRIMARY KEY (`order_product_id`),
  KEY `fk_oderrr_idx` (`order_id`),
  KEY `fk_productttt_idx` (`product_id`),
  CONSTRAINT `fk_oderrr` FOREIGN KEY (`order_id`) REFERENCES `orderr` (`order_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_productttt` FOREIGN KEY (`product_id`) REFERENCES `products` (`product_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=40 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `order_product`
--

LOCK TABLES `order_product` WRITE;
/*!40000 ALTER TABLE `order_product` DISABLE KEYS */;
INSERT INTO `order_product` VALUES (26,33,8,'Samsung Galaxy A34 5G',NULL,4,6290000,0.3),(27,33,3,'Oppo A98 5G',NULL,2,7690000,0.2),(28,34,5,'Galaxy S23 Ultra 5G 256GB',NULL,2,11990000,0.2),(29,34,13,'Xiaomi Redmi Note 12 Pro 5G',NULL,3,2850000,0.2),(31,36,17,'Xiaomi 12T 5G 256GB',NULL,4,4790000,0.2),(32,36,21,'Nokia black future',NULL,4,999999000,0.2);
/*!40000 ALTER TABLE `order_product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orderr`
--

DROP TABLE IF EXISTS `orderr`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `orderr` (
  `order_id` int NOT NULL AUTO_INCREMENT,
  `user_id` int DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `create_at` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `phone` varchar(45) DEFAULT NULL,
  `province` varchar(255) DEFAULT NULL,
  `district` varchar(255) DEFAULT NULL,
  `ward` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`order_id`),
  KEY `fk_user_idx` (`user_id`),
  CONSTRAINT `fk_userrrr` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=54 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orderr`
--

LOCK TABLES `orderr` WRITE;
/*!40000 ALTER TABLE `orderr` DISABLE KEYS */;
INSERT INTO `orderr` VALUES (33,25,'Hoàn thành','08:58:00 26/09/2023','Giang','giang@giand','0132432432','Tỉnh Cao Bằng','Huyện Bảo Lâm','Xã Lý Bôn','11'),(34,28,'Chờ xác nhận','09:11:57 26/09/2023','giiang','giang@giang','1243234','Tỉnh Hà Giang','Huyện Đồng Văn','Thị trấn Phó Bảng','11'),(36,29,'Đang vận chuyển','10:26:17 26/09/2023','Hông Anh','dsfsa@dsfdsa.sad','0213123021','Thành phố Hà Nội','Quận Tây Hồ','Phường Nhật Tân','11');
/*!40000 ALTER TABLE `orderr` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product_detail`
--

DROP TABLE IF EXISTS `product_detail`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product_detail` (
  `product_id` int NOT NULL,
  `screen` varchar(255) DEFAULT NULL,
  `os` varchar(255) DEFAULT NULL,
  `camara` varchar(255) DEFAULT NULL,
  `camaraFront` varchar(255) DEFAULT NULL,
  `cpu` varchar(255) DEFAULT NULL,
  `ram` varchar(255) DEFAULT NULL,
  `rom` varchar(255) DEFAULT NULL,
  `sim` varchar(255) DEFAULT NULL,
  `battery` varchar(255) DEFAULT NULL,
  `star` int DEFAULT NULL,
  PRIMARY KEY (`product_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_detail`
--

LOCK TABLES `product_detail` WRITE;
/*!40000 ALTER TABLE `product_detail` DISABLE KEYS */;
INSERT INTO `product_detail` VALUES (1,'Dynamic AMOLED 2X6.1\' Full HD+','Android 13','Chính 50 MP & Phụ 12 MP, 10 MP','12 MP','Snapdragon 8 Gen 2 for Galaxy','8 GB','128 GB','2 Nano SIM hoặc 1 Nano SIM + 1 eSIMHỗ trợ 5G','3900 mAh25 W',4),(2,'AMOLED6.36\' Full HD+','Android 13','Chính 50 MP & Phụ 12 MP, 10 MP','32 MP','Snapdragon 8 Gen 2 8 nhân','8 GB','256 GB','2 Nano SIM, Hỗ trợ 5G','4500 mAh67 W',4),(3,'LTPS LCD6.72\' Full HD+','Android 13','Chính 64 MP & Phụ 2 MP, 2 MP','32 MP','Snapdragon 695 5G','8 GB','256 GB','2 Nano SIM (SIM 2 chung khe thẻ nhớ)Hỗ trợ 5G','5000 mAh67 W',5),(4,'IPS LCD, 5.8\', HD+','Android One','13 MP và 5 MP (2 camera)','8 MP','MediaTek Helio P60 8 nhân 64-bit','3 GB','32 GB','2 Nano SIM hoặc 1 Nano SIM, Hỗ trợ 5G','3060 mAh, có sạc nhanh',4),(5,'Super AMOLED, 6\', Full HD+','Android 7.1 (Nougat)','16 MP','16 MP và 8 MP (2 camera)','Exynos 7885 8 nhân 64-bit','6 GB','64 GB','2 Nano SIM hoặc 1 Nano SIM + 1 eSIM, Hỗ trợ 5G','3500 mAh, có sạc nhanh',5),(6,'OLED, 5.8\', Super Retina','iOS 11','2 camera 12 MP','7 MP','Apple A11 Bionic 6 nhân','3 GB','256 GB','1 Nano SIM & 1 eSIM, Hỗ trợ 5G','2716 mAh, có sạc nhanh',5),(7,'IPS LCD, 6.2\', HD+','Android 8.1 (Oreo)','13 MP và 2 MP (2 camera)','8 MP','Qualcomm Snapdragon 450 8 nhân 64-bit','3 GB','32 GB','2 Nano SIM, Hỗ trợ 5G','4230 mAh',4),(8,'Super AMOLED, 6.0\', HD+','Android 8.0 (Oreo)','16 MP và 5 MP (2 camera)','16 MP','Qualcomm Snapdragon 450 8 nhân 64-bit','3 GB','32 GB','2 Nano SIM, Hỗ trợ 5G','3500 mAh',5),(9,'LED-backlit LCD, 9.7p\'\'','	iOS 11.3','8 MP','1.2 MP','Apple A10 Fusion, 2.34 GHz','2 GB','32 GB','2 Nano SIM, Hỗ trợ 5G','Chưa có thông số cụ thể',4),(10,'LED-backlit IPS LCD, 5.5\', Retina HD','iOS 11','2 camera 12 MP','7 MP','Apple A10 Fusion 4 nhân 64-bit','3 GB','32 GB','2 Nano SIM, Hỗ trợ 5G','2900 mAh',5),(11,'IPS LCD, 6.26\', Full HD+','Android 8.1 (Oreo)','12 MP và 5 MP (2 camera)','24 MP','Qualcomm Snapdragon 660 8 nhân','4 GB','64 GB','2 Nano SIM, Hỗ trợ 5G','3300 mAh, có sạc nhanh',4),(12,'IPS LCD, 5.86\', HD+','Android 8.1 (Oreo)','16 MP và 5 MP (2 camera)','16 MP','MediaTek MT6762 8 nhân 64-bit (Helio P22)','4 GB','32 GB','2 Nano SIM, Hỗ trợ 5G','3000 mAh',5),(13,'IPS LCD, 5.5\', Full HD','Android 7.0 (Nougat)','13 MP','13 MP và 8 MP (2 camera)','MT6737T, 4 nhân','3 GB','32 GB','2 Nano SIM, Hỗ trợ 5G','3000 mAh',4),(14,'IPS LCD, 6.0\', HD+','Android 7.0 (Nougat)','13 MP','13 MP','MediaTek MT6739 4 nhân 64-bit','2 GB','16 GB','2 Nano SIM, Hỗ trợ 5G','3900 mAh',5),(15,'AMOLED6.67\' Full HD+ ','Android 12','Chính 50 MP & Phụ 8 MP, 2 MP','16 MP','MediaTek Dimensity 1080 8 nhân','8 GB','256 GB','2 Nano SIM, Hỗ trợ 5G','5000 mAh67 W',5),(16,'IPS LCD, 5.99\', Full HD+','Android 8.1 (Oreo)','12 MP và 5 MP (2 camera)','13 MP','Snapdragon 7 Gen 1 8 nhân','8 GB','256 GB','2 Nano SIM, Hỗ trợ 5G','4000 mAh, có sạc nhanh',4),(17,'IPS LCD, 5.99\', Full HD+','Android 7.1 (Nougat)','12 MP','5 MP','Snapdragon 625 8 nhân 64-bit','4 GB','64 GB','2 Nano SIM, Hỗ trợ 5G','4000 mAh',5),(18,'OLED, 6.39\', Quad HD+ (2K+)','Android 9.0 (Pie)','40 MP, 20 MP và 8 MP (3 camera)','24 MP','Hisilicon Kirin 980 8 nhân 64-bit','6 GB','128 GB','2 Nano SIM, Hỗ trợ 5G','4200 mAh, có sạc nhanh',5),(19,'LTPS LCD, 6.3\', Full HD+','Android 8.1 (Oreo)','24 MP và 16 MP (2 camera)','24 MP và 2 MP (2 camera)','Hisilicon Kirin 970 8 nhân','6 GB','128 GB','2 Nano SIM, Hỗ trợ 5G','3750 mAh, có sạc nhanh',4),(20,'IPS LCD, 5\', HD','Android 6.0 (Marshmallow)','8 MP','5 MP','MT6737T, 4 nhân','2 GB','16 GB','2 Nano SIM, Hỗ trợ 5G','3000 mAh',5),(21,'4K, Chống nước, Chống trầy','iOS + Android song song','Bộ tứ camara tàng hình','Chuẩn thế giới 50MP','16 nhân 128 bit','Không giới hạn','Dùng thoải mái','2 Nano SIM, Hỗ trợ 5G','Không cần sạc',4),(22,'Super AMOLED, 6.0\', Full HD+','Android 8.0 (Oreo)','24 MP, 8 MP và 5 MP (3 camera)','24 MP','Exynos 7885 8 nhân 64-bit','4 GB','64 GB','2 Nano SIM, Hỗ trợ 5G','3300 mAh',5),(23,'IPS LCD, 6.3\', Full HD+','ColorOS 5.2 (Android 8.1)','16 MP và 2 MP (2 camera)','16 MP','Qualcomm Snapdragon 660 8 nhân','8 GB','128 GB','2 Nano SIM, Hỗ trợ 5G','3500 mAh',4),(24,'IPS LCD, 6.2\', HD+','Android 8.1 (Oreo)','13 MP và 2 MP (2 camera)','8 MP','Qualcomm Snapdragon 450 8 nhân 64-bit','4 GB','64 GB','2 Nano SIM, Hỗ trợ 5G','4230 mAh',5),(25,'IPS LCD, 6.2\', HD+','Android 8.1 (Oreo)','13 MP và 2 MP (2 camera)','5 MP','Qualcomm Snapdragon 450 8 nhân 64-bit','2 GB','16 GB','2 Nano SIM, Hỗ trợ 5G','4230 mAh',4),(26,'IPS LCD, 6.3\', Full HD+','ColorOS 5.2 (Android 8.1)','16 MP và 2 MP (2 camera)','16 MP','Qualcomm Snapdragon 660 8 nhân','4 GB','64 GB','2 Nano SIM, Hỗ trợ 5G','3500 mAh',5),(27,'TFT, 2.4\', QVGA','Không','0.3 MP','Không','Không','Không','Không','2 Nano SIM, Hỗ trợ 5G','1600 mAh',4),(28,'IPS LCD, 5\', HD','Android 7.0 (Nougat)','13 MP','5 MP','Mediatek MT6750 8 nhân','3 GB','16 GB','2 Nano SIM, Hỗ trợ 5G','3000 mAh',4),(29,'TFT, 1.77\', 65.536 màu','Không','Không','Không','Không','Không','Không','2 Nano SIM, Hỗ trợ 5G','1050 mAh',5),(30,'Super AMOLED, 6.41\', Full HD+','Android 8.1 (Oreo)','12 MP và 5 MP (2 camera)','25 MP','Qualcomm Snapdragon 660 8 nhân','6 GB','128 GB','2 Nano SIM, Hỗ trợ 5G','3400 mAh, có sạc nhanh',5),(31,'IPS LCD, 6.3\', Full HD+','Android 8.1 (Oreo)','16 MP và 5 MP (2 camera)','24 MP','Snapdragon 626 8 nhân 64-bit','4 GB','64 GB','2 Nano SIM, Hỗ trợ 5G','3260 mAh',4),(32,'IPS LCD, 6.22\', HD+','Android 8.1 (Oreo)','13 MP và 2 MP (2 camera)','8 MP','MediaTek MT6762 8 nhân 64-bit (Helio P22)','4 GB','32 GB','2 Nano SIM, Hỗ trợ 5G','3260 mAh',5),(33,'IPS LCD, 6.0\', HD+','Android 8.1 (Oreo)','13 MP','5 MP','Qualcomm Snapdragon 425 4 nhân 64-bit','3 GB','16 GB','2 Nano SIM, Hỗ trợ 5G','3360 mAh',4),(34,'TFT, 2.4\', 65.536 màu','Không','Không','Không','Không','Không','Không','2 Nano SIM, Hỗ trợ 5G','1200 mAh',5),(35,'TFT, 2.4\', 65.536 màu','Không','Không','Không','Không','Không','Không','2 Nano SIM, Hỗ trợ 5G','5000 mAh',5),(36,'LCD, 5.5\', FWVGA','Android 8.1 (Oreo)','8 MP và 2 MP (2 camera)','5 MP','MT6580 4 nhân 32-bit','1 GB','16 GB','2 Nano SIM, Hỗ trợ 5G','2650 mAh',5),(37,'IPS LCD, 5.45\', qHD','Android 8.1 (Oreo)','5 MP và 0.3 MP (2 camera)','5 MP','MT6580 4 nhân 32-bit','1 GB','8 GB','2 Nano SIM, Hỗ trợ 5G','4000 mAh',4),(38,'TFT, 5\', FWVGA','Android Go Edition','5 MP','2 MP','MediaTek MT6580 4 nhân 32-bit','1 GB','8 GB','2 Nano SIM, Hỗ trợ 5G','2050 mAh',5),(39,'TFT, 1.77\', 65.536 màu','Không','Không','Không','Không','Không','Không','2 Nano SIM, Hỗ trợ 5G','1000 mAh',4),(40,'TFT, 1.77\', WVGA','Không','Không','Không','Không','Không','Không','2 Nano SIM, Hỗ trợ 5G','1000 mAh',5),(41,'IPS LCD, 5.45\', HD+','Android 8.1 (Oreo)','8 MP và 0.3 MP (2 camera)','5 MP','Spreadtrum SC9850K 4 nhân','2 GB','16 GB','2 Nano SIM, Hỗ trợ 5G','2500 mAh',4),(42,'IPS LCD, 5.45\', HD+','Android Go Edition','5 MP và 0.3 MP (2 camera)','2 MP','Spreadtrum SC9850K 4 nhân','1 GB','16 GB','2 Nano SIM, Hỗ trợ 5G','2300 mAh',5),(43,'IPS LCD, 5\', WVGA','Android Go Edition','5 MP và 0.3 MP (2 camera)','2 MP','MT6580 4 nhân 32-bit','1 GB','8 GB','2 Nano SIM, Hỗ trợ 5G','2000 mAh',4),(44,'Super LCD, 6\', Full HD+','Android 8.1 (Oreo)','16 MP và 5 MP (2 camera)','13 MP','Qualcomm Snapdragon 636 8 nhân','4 GB','64 GB','2 Nano SIM, Hỗ trợ 5G','3600 mAh',5),(45,'TFT, 5\', FWVGA','Android 7.1 (Nougat)','5 MP','2 MP','MT6737 4 nhân','1 GB','16 GB','2 Nano SIM, Hỗ trợ 5G','2350 mAh',5),(46,'IPS LCD, 6.1\', IPS LCD, 16 triệu màu','iOS 12','12 MP','7 MP','Apple A12 Bionic 6 nhân','3 GB','128 GB','2 Nano SIM, Hỗ trợ 5G','2942 mAh, có sạc nhanh',4),(47,'LED-backlit IPS LCD, 5.5\', Retina HD','iOS 11','2 camera 12 MP','7 MP','Apple A11 Bionic 6 nhân','3 GB','64 GB','2 Nano SIM, Hỗ trợ 5G','2691 mAh, có sạc nhanh',5),(48,'LED-backlit IPS LCD, 4.7\', Retina HD','iOS 11','12 MP','7 MP','Apple A11 Bionic 6 nhân','2 GB','256 GB','2 Nano SIM, Hỗ trợ 5G','1821 mAh, có sạc nhanh',4),(49,'IPS LCD, 6.1\', IPS LCD, 16 triệu màu','iOS 12','12 MP','7 MP','Apple A12 Bionic 6 nhân','3 GB','64 GB','2 Nano SIM, Hỗ trợ 5G','2942 mAh, có sạc nhanh',5),(50,'IPS LCD, 5.9\', Full HD+','Android 7.0 (Nougat)','16 MP và 2 MP (2 camera)','13 MP và 2 MP (2 camera)','HiSilicon Kirin 659 8 nhân','4 GB','64 GB','2 Nano SIM, Hỗ trợ 5G','3340 mAh',4),(51,'ưqeqư','ưqe','ưqeqư','ưqewqe','ưqưqe',NULL,NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `product_detail` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product_rate`
--

DROP TABLE IF EXISTS `product_rate`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product_rate` (
  `rate_id` int NOT NULL AUTO_INCREMENT,
  `comment` longtext,
  `product_id` int DEFAULT NULL,
  `user_id` int DEFAULT NULL,
  `create_at` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`rate_id`),
  KEY `fk_producst_idx` (`product_id`),
  KEY `fk_userrr_idx` (`user_id`),
  CONSTRAINT `fk_producst` FOREIGN KEY (`product_id`) REFERENCES `products` (`product_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_uewrew` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_rate`
--

LOCK TABLES `product_rate` WRITE;
/*!40000 ALTER TABLE `product_rate` DISABLE KEYS */;
INSERT INTO `product_rate` VALUES (1,'máy sịn quá anh ơi',17,18,'22:03:52 25/09/2023'),(2,'Máy đẹp quá anh ơi',5,18,'01:21:42 26/09/2023'),(3,'Máy này gọi facetime nét lắm ạ',21,18,'01:23:24 26/09/2023'),(4,'máy đẹp quá',8,25,'08:56:26 26/09/2023'),(5,'cho e 2 máy',3,25,'08:56:38 26/09/2023'),(6,'Máy đẹp vl',21,29,'10:25:49 26/09/2023');
/*!40000 ALTER TABLE `product_rate` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `product_id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `category_id` int DEFAULT NULL,
  `price` int NOT NULL,
  `sale` double DEFAULT NULL,
  `count` int DEFAULT NULL,
  PRIMARY KEY (`product_id`),
  KEY `fk_category_idx` (`category_id`),
  CONSTRAINT `fk_category` FOREIGN KEY (`category_id`) REFERENCES `category` (`category_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_product_detail` FOREIGN KEY (`product_id`) REFERENCES `product_detail` (`product_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=101 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'Xiaomi 13 5Ga',2,6690000,0.2,20),(2,'Samsung Galaxy S23 5G 128GB',1,16990000,0.3,22),(3,'Oppo A98 5G',3,7690000,0.2,21),(4,'Nokia G22',4,4790000,0.3,221),(5,'Galaxy S23 Ultra 5G 256GB',1,11990000,0.2,24),(6,'iPhone 13 128GB',5,31990000,0.3,52),(7,'OPPO Reno10 Pro 5G',3,4690000,0.2,32),(8,'Samsung Galaxy A34 5G',1,6290000,0.3,20),(9,'iPhone 14 Plus 256GB',5,8990000,0.2,14),(10,'iPhone 14 Pro Max 1TB',5,17000000,0.2,52),(11,'Xiaomi Redmi Note 12S',2,12990000,0.3,20),(12,'Mobiistar X',6,3490000,0.2,10),(13,'Xiaomi Redmi Note 12 Pro 5G',2,2850000,0.2,10),(14,'OPPO Reno10 5G 128GB',3,2490000,0.3,12),(15,'Xiaomi Redmi Note 12 Pro 5G',2,260000,0.2,17),(16,'Xiaomi 13 Lite 5G',2,5690000,0.3,13),(17,'Xiaomi 12T 5G 256GB',2,4790000,0.2,18),(18,'Huawei Y7a ',7,21990000,0.2,18),(19,'Huawei P30',7,9990000,0.3,16),(20,'Huawei Y8',7,1990000,0.2,22),(21,'Nokia black future',4,999999000,0.2,27),(22,'Samsung Galaxy A7 (2018)',1,8990000,0.3,85),(23,'Realme 2 Pro 8GB/128GB',8,6990000,0.2,24),(24,'Realme 2 4GB/64GB',8,4490000,0.3,51),(25,'Realme C1',8,2490000,0.2,43),(26,'Realme 2 Pro 4GB/64GB',8,5590000,0.3,31),(27,'Philips E331',9,890000,0.3,45),(28,'Philips S329',9,2390000,0.2,56),(29,'Philips E103',9,260000,0.3,45),(30,'Vivo V11',10,10990000,0.2,24),(31,'Vivo V9',10,7490000,0.3,34),(32,'Vivo Y85',10,4990000,0.3,45),(33,'Vivo Y71',10,3290000,0.2,42),(34,'Mobell M789',11,550000,0.2,45),(35,'Mobell Rock 3',11,590000,0.2,31),(36,'Mobell S60',11,1790000,0.3,3),(37,'Itel P32',12,1890000,0.2,72),(38,'Itel A32F',12,1350000,0.3,5),(39,'Itel it2123',12,160000,0.2,5),(40,'Itel it2161',12,170000,0.2,3),(41,'Coolpad N3D',13,2390000,0.2,40),(42,'Coolpad N3',13,1890000,0.3,8),(43,'Coolpad N3 mini',13,1390000,0.2,47),(44,'HTC U12 life',14,7690000,0.3,42),(45,'Motorola Moto C 4G',15,1290000,0.2,32),(46,'iPhone Xr 128GB',5,24990000,0.3,42),(47,'iPhone 8 Plus 64GB',5,20990000,0.2,41),(48,'iPhone 8 Plus 256GB',5,25790000,0.3,25),(49,'iPhone Xr 64GB',5,22990000,0.2,46),(50,'Huawei Nova 2i',7,4490000,0.3,45);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `profile`
--

DROP TABLE IF EXISTS `profile`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `profile` (
  `user_id` int NOT NULL,
  `province` varchar(255) DEFAULT NULL,
  `district` varchar(255) DEFAULT NULL,
  `ward` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `phone` varchar(45) DEFAULT NULL,
  `avatar` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`user_id`),
  CONSTRAINT `fk_userrr` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `profile`
--

LOCK TABLES `profile` WRITE;
/*!40000 ALTER TABLE `profile` DISABLE KEYS */;
INSERT INTO `profile` VALUES (13,'Ha Giang','Gau Gau','cc','31','032156588',NULL),(15,'Ha Bac','Cac Cac','vv','412','035464',NULL),(16,'Ha Noi','Meo Meo','bbb','12','035464897','https://firebasestorage.googleapis.com/v0/b/fir-upload-img-ea911.appspot.com/o/333097779_219466827207749_5700242245209787662_n.jpg?alt=media&token=64867c66-058e-4ae9-98f0-254fde9b4185'),(17,'Ha Dong','Chut Chut','bb','21','06546',NULL),(18,'Ha Ha','Chit cHit','đ','12','0684698','https://firebasestorage.googleapis.com/v0/b/fir-upload-img-ea911.appspot.com/o/314480150_4974213032681277_4766409431247520692_n.jpg?alt=media&token=dbb6f4c2-7994-44e9-9301-2ceca0afbf13'),(27,NULL,NULL,NULL,NULL,NULL,NULL),(28,NULL,NULL,NULL,NULL,NULL,NULL),(29,NULL,NULL,NULL,NULL,NULL,NULL),(57,NULL,NULL,NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `profile` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `user_id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(255) NOT NULL,
  `passwords` varchar(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  `status` int NOT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=58 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (13,'cuong@cuong','$2b$10$HXARn8AJVOX0uavfkqlgCeqCtrrRqHlJrBeCk2vxg8MoMsxI2sLcK','Giang',0),(15,'cuong@cuong.com','$2b$10$6KO3F.WPAWITfI5jLsZH5OKVliLLwnOhxAPUYwxgk3Td0QQZUvW/e','Minh Cường',1),(16,'namhn1996@gmail.com','$2b$10$Zwanxg/7C.DzQ.WGMACj8uBmSJqUUMQ.SkS0tQTJBoFI3QKyPpS7S','Nam',1),(17,'namhn96@gmail.com','$2b$10$tPkX47mLqPgEiQ3T15BQZeNkXdhQWSlYQmqJSfwjBQ5olxcX2Eo3K','Minh Cường',1),(18,'nam@a','$2b$10$ObrA2NpcpDHSLsB75qoBBO5p8kUh4dz4.Rl4UY3S5Xh/4MQTsdVcO','Nguyễn Phương Nam',1),(19,'phuc@a','$2b$10$pcfieknQdtsyEtiZk3UHzu2X7qlca.y9yFJI1PKDDGoejm87zbrjS','Phúc',0),(25,'giang@giang.a','$2b$10$TyJcPfq5WPuyff2o9jutt.XVYO9Yemb47RdR1mBpm2LJQQ/bB2MjK','Giang',0),(26,'nam@nam.q','$2b$10$7OA5PC0od.HAzkxgxKAYXOwOaDL9XHz/Yma1dK7MoHqs.jn6llPKS','Cường',0),(27,'cuong@cuong.a','$2b$10$BpZYAqz7q11knhINNfXME.FpEYP81l0aTmuCLfrXClRVkN5cTKjbS','Minh Cường',0),(28,'giang@a.a','$2b$10$DoqOt5kcrPWgecLDvVFGYe6.lbJridxAGHi9LzieFgZCPLSn4IVTG','Giang',0),(29,'giang@gmail.com','$2b$10$bWhwoZeCL4Ml7TjlGAyq8eVUhf.Ghihdl/wc9LP3bAlyYEgABtkkm','Hông Anh',1),(53,'nam@aa.a','$2b$10$.g45y/.uQahlHUUPdcAwguCwJzJJxr1PrwYLldR61JCpFdCy88Cyq','nam',0),(54,'nam@aa.aa','$2b$10$wCN17E7txticT9qcOdrzj.2dAhwxsfMY6YoninI6axA.ImTWCMtOa','nam',0),(55,'nam@aa.a1','$2b$10$8blB6nHq941pZPUbs7ZpPeBWcFUzlZNGKW4C3s6aGBvvr/0MZshLy','nam',0),(56,'nam@aa.aaa','$2b$10$MZuri.5emgFPLf35kl64IeUfE0Kw/9p/BA7nTArRjcouIXPHII1OC','nam',0),(57,'laptop1@a.a','$2b$10$LISn1l0kzw2NQQSqdEu6me7UuGg7Vow7cFNPRP60jer6CyZCQTX2O','Laptop',0);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-10-29 20:54:45
