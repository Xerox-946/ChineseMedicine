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

 Date: 29/05/2025 23:49:54
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for admin_purview
-- ----------------------------
DROP TABLE IF EXISTS `admin_purview`;
CREATE TABLE `admin_purview`  (
  `PurviewID` int(10) UNSIGNED NOT NULL AUTO_INCREMENT COMMENT '数据访问权限ID',
  `Name` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '' COMMENT '权限名',
  `EN_name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `VN_name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `JP_name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `Purview` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '',
  PRIMARY KEY (`PurviewID`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 6 CHARACTER SET = utf8 COLLATE = utf8_general_ci COMMENT = '后台基础功能配置表' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of admin_purview
-- ----------------------------
INSERT INTO `admin_purview` VALUES (1, '指定玩家信息查询 ', NULL, NULL, NULL, 'QueryPlayer');
INSERT INTO `admin_purview` VALUES (2, '道具明细', NULL, NULL, NULL, 'QueryItem');
INSERT INTO `admin_purview` VALUES (3, '货币明细', NULL, NULL, NULL, 'QueryCoin');
INSERT INTO `admin_purview` VALUES (4, '订单查询', NULL, NULL, NULL, 'QueryOrder');
INSERT INTO `admin_purview` VALUES (5, '结构一览', NULL, NULL, NULL, 'QueryStructure');

SET FOREIGN_KEY_CHECKS = 1;
