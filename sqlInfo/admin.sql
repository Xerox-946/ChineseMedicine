/*
 Navicat Premium Dump SQL

 Source Server         : xinchang20.11
 Source Server Type    : MySQL
 Source Server Version : 50743 (5.7.43-log)
 Source Host           : 192.168.20.11:3306
 Source Schema         : tendo_backstage

 Target Server Type    : MySQL
 Target Server Version : 50743 (5.7.43-log)
 File Encoding         : 65001

 Date: 29/05/2025 23:49:35
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for admin
-- ----------------------------
DROP TABLE IF EXISTS `admin`;
CREATE TABLE `admin`  (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `UserName` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `NickName` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `PlatformID` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '' COMMENT '[可以查看的平台]关联platform表的id',
  `RoleID` int(10) UNSIGNED NOT NULL DEFAULT 0 COMMENT '角色ID',
  `Sex` tinyint(1) NOT NULL,
  `Password` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `Salt` char(8) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `Telphone` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `Status` tinyint(1) UNSIGNED NOT NULL DEFAULT 1,
  `Dateline` int(10) UNSIGNED NOT NULL,
  `LoginTime` int(10) UNSIGNED NOT NULL DEFAULT 0,
  `LoginIP` varchar(15) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '0.0.0.0',
  `PowerID` tinyint(1) NULL DEFAULT 0 COMMENT '特殊权限设置，不开放配置，仅内部超级admin帐号设为1',
  PRIMARY KEY (`ID`) USING BTREE,
  UNIQUE INDEX `username`(`UserName`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 7 CHARACTER SET = utf8 COLLATE = utf8_general_ci COMMENT = '帐号信息' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of admin
-- ----------------------------
INSERT INTO `admin` VALUES (1, 'admin', '系统       ', '1,2,3,4', 1, 1, '274df22c4933ed3b778d1516a8b66a3c', 'CwrFTvWR', '13758177576', 1, 1739958408, 1742819044, '192.168.15.103', 1);
INSERT INTO `admin` VALUES (2, 'wzt', '测试     ', '1', 1, 0, '8814594d12c9b92987e6c90c5c343270', 'CwrFTvWR', NULL, 1, 1739869380, 1740390905, '192.168.184.111', 0);

SET FOREIGN_KEY_CHECKS = 1;
