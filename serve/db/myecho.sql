/*
 Navicat MySQL Data Transfer

 Source Server         : localhost_3306
 Source Server Type    : MySQL
 Source Server Version : 80012
 Source Host           : localhost:3306
 Source Schema         : myecho

 Target Server Type    : MySQL
 Target Server Version : 80012
 File Encoding         : 65001

 Date: 02/07/2022 02:39:10
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for base
-- ----------------------------
DROP TABLE IF EXISTS `base`;
CREATE TABLE `base`  (
  `id` int(11) UNSIGNED ZEROFILL NOT NULL AUTO_INCREMENT,
  `usename` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  `company` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  `address` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  `phone` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  `sex` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  `createTime` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  `state` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  `cover` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of base
-- ----------------------------
INSERT INTO `base` VALUES (00000000001, '张健', '郑州宇通客车', '河南郑州', '18145661685', '男 ', '1977-03-19 17:32:28', 'true', 'https://file.ertuba.com/2022/0629/0c18fbea51ce85bd001a8cd71acafa1e.jpg');
INSERT INTO `base` VALUES (00000000002, '声当商济极金', 'eu incididunt', '湖北省丹东市民乐县', '18198982587', '女', '1970-03-04 16:21:06', 'false', NULL);
INSERT INTO `base` VALUES (00000000012, '总且作六', 'cillum', '西藏自治区清远市葵青区', '18171281764', '男', '2017-01-26 13:36:21', 'true', NULL);
INSERT INTO `base` VALUES (00000000011, '法育种集', 'ex', '海外辽阳市长岭县', '19870024536', '女', '1971-09-23 04:31:21', 'true', NULL);
INSERT INTO `base` VALUES (00000000010, '矿数把', 'Duis magna aliquip minim nisi', '吉林省衡阳市双峰县', '19895754471', '女', '1994-12-22 09:11:36', 'false', NULL);
INSERT INTO `base` VALUES (00000000006, '张例备亲队节', 'do consequat officia', '香港特别行政区七台河市南沙群岛', '18117233063', '男', '1994-09-23 16:24:21', 'true', NULL);
INSERT INTO `base` VALUES (00000000007, '手头相', 'nulla', '甘肃省新界长宁县', '18165258638', '女', '1997-08-29 22:25:59', 'true', NULL);
INSERT INTO `base` VALUES (00000000019, '层识加车群', 'enim ut nulla', '河北省台东县沙坪坝区', '18168419338', '女', '1997-05-22 01:19:40', 'false', NULL);
INSERT INTO `base` VALUES (00000000009, '心边动第七将照', 'eu culpa commodo', '江西省菏泽市鄂托克旗', '18112211986', '女', '1978-03-22 11:07:04', 'false', NULL);
INSERT INTO `base` VALUES (00000000013, '电期次通', 'dolore voluptate eu Excepteur ad', '山西省长治市丰城市', '18162623981', '男', '1995-05-24 07:20:38', 'false', NULL);
INSERT INTO `base` VALUES (00000000014, '才具感取院报', 'in consequat in in', '上海曲靖市西吉县', '18683297671', '男', '2010-05-24 23:55:43', 'true', NULL);
INSERT INTO `base` VALUES (00000000015, '称同相每权自', 'amet sit nulla labore adipisicing', '甘肃省重庆市静安区', '18121995494', '女', '1984-12-02 12:21:01', 'false', NULL);
INSERT INTO `base` VALUES (00000000016, '学千形率权美', 'Excepteur sit officia', '西藏自治区毕节市措美县', '13422612933', '女', '1991-06-26 15:57:51', 'true', NULL);
INSERT INTO `base` VALUES (00000000017, '情好低西', 'labore', '重庆西双版纳傣族自治州抚远县', '18105864546', '女', '1988-09-24 14:00:09', 'true', NULL);
INSERT INTO `base` VALUES (00000000018, '金消道', 'in enim do est', '四川省张家口市耀州区', '18154154623', '男', '2016-10-28 07:42:07', 'true', NULL);
INSERT INTO `base` VALUES (00000000020, '华装时验', 'deserunt eiusmod est eu', '河北省承德市万州区', '19857447456', '男', '1990-08-20 04:26:44', 'true', NULL);
INSERT INTO `base` VALUES (00000000021, '它把革率眼九', 'sed', '上海伊春市海原县', '18186566682', '女', '1982-07-28 10:03:41', 'true', NULL);
INSERT INTO `base` VALUES (00000000022, '金个手可事', 'qui occaecat tempor laboris dolor', '台湾包头市斗门区', '13527133757', '男', '1989-10-14 01:29:44', 'false', NULL);
INSERT INTO `base` VALUES (00000000023, '总基可', 'fugiat id in', '青海省开封市中宁县', '19863381719', '女', '1986-06-07 12:00:44', 'true', NULL);
INSERT INTO `base` VALUES (00000000024, '必周表华具上', 'Ut deserunt magna', '四川省重庆市万盛区', '18686252372', '男', '2021-03-21 00:46:53', 'true', NULL);
INSERT INTO `base` VALUES (00000000025, '话改则', 'in sed', '海南省天津市隆昌县', '13215748616', '男', '2014-03-08 19:47:47', 'true', NULL);
INSERT INTO `base` VALUES (00000000026, '任线清西', 'in aliquip irure mollit', '四川省娄底市怀远县', '18682420315', '男', '1971-01-19 22:06:26', 'false', NULL);
INSERT INTO `base` VALUES (00000000027, '少音会矿表都', 'id do esse laborum sint', '江苏省台州市湾仔', '18174715943', '男', '1992-06-17 04:08:03', 'false', NULL);
INSERT INTO `base` VALUES (00000000028, '计每于提', 'proident laboris occaecat sint ad', '新疆维吾尔自治区三亚市贵德县', '18691315420', '女', '2010-05-27 15:37:47', 'true', NULL);
INSERT INTO `base` VALUES (00000000029, '连指空铁', 'et quis tempor sint non', '海南省莆田市其它区', '18179232396', '女', '2005-02-04 20:51:23', 'true', NULL);
INSERT INTO `base` VALUES (00000000030, '近劳属按面口', 'nostrud nisi', '台湾离岛清河区', '18686258375', '女', '2019-11-27 20:19:03', 'false', NULL);
INSERT INTO `base` VALUES (00000000031, '影今任', 'cillum', '吉林省淮安市凭祥市', '18692055319', '女', '2017-01-26 19:14:39', 'true', NULL);
INSERT INTO `base` VALUES (00000000032, '为区便打', 'non dolor sunt', '云南省上海市贞丰县', '18167573687', '男', '1985-10-08 05:52:46', 'true', NULL);
INSERT INTO `base` VALUES (00000000033, '动部济', 'labore dolore', '湖南省山南地区武夷山市', '18160572171', '女', '2014-02-23 05:10:20', 'true', NULL);

SET FOREIGN_KEY_CHECKS = 1;
