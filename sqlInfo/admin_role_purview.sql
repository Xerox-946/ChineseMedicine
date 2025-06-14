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

 Date: 29/05/2025 23:50:16
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for admin_role_purview
-- ----------------------------
DROP TABLE IF EXISTS `admin_role_purview`;
CREATE TABLE `admin_role_purview`  (
  `RoleID` int(10) UNSIGNED NOT NULL COMMENT '角色表ID',
  `Purview` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '' COMMENT '权限名',
  PRIMARY KEY (`RoleID`, `Purview`) USING BTREE,
  INDEX `PurviewID`(`Purview`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci COMMENT = '角色权限' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of admin_role_purview
-- ----------------------------
INSERT INTO `admin_role_purview` VALUES (1, 'DataMonitorByHero');
INSERT INTO `admin_role_purview` VALUES (1, 'QueryOrder');
INSERT INTO `admin_role_purview` VALUES (1, 'QueryPlayer');
INSERT INTO `admin_role_purview` VALUES (1, 'QueryStructure');

SET FOREIGN_KEY_CHECKS = 1;
