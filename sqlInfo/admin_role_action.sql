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

 Date: 29/05/2025 23:50:09
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for admin_role_action
-- ----------------------------
DROP TABLE IF EXISTS `admin_role_action`;
CREATE TABLE `admin_role_action`  (
  `role_id` int(10) UNSIGNED NOT NULL COMMENT '角色表ID',
  `action_id` int(10) UNSIGNED NOT NULL COMMENT '控制器ID',
  PRIMARY KEY (`role_id`, `action_id`) USING BTREE,
  INDEX `action_id`(`action_id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci COMMENT = '角色权限' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of admin_role_action
-- ----------------------------
INSERT INTO `admin_role_action` VALUES (1, 2);
INSERT INTO `admin_role_action` VALUES (1, 3);
INSERT INTO `admin_role_action` VALUES (2, 3);
INSERT INTO `admin_role_action` VALUES (1, 4);
INSERT INTO `admin_role_action` VALUES (2, 4);
INSERT INTO `admin_role_action` VALUES (1, 5);
INSERT INTO `admin_role_action` VALUES (2, 5);
INSERT INTO `admin_role_action` VALUES (1, 7);
INSERT INTO `admin_role_action` VALUES (2, 7);
INSERT INTO `admin_role_action` VALUES (1, 8);
INSERT INTO `admin_role_action` VALUES (2, 8);
INSERT INTO `admin_role_action` VALUES (1, 9);
INSERT INTO `admin_role_action` VALUES (2, 9);
INSERT INTO `admin_role_action` VALUES (1, 10);
INSERT INTO `admin_role_action` VALUES (2, 10);
INSERT INTO `admin_role_action` VALUES (1, 11);
INSERT INTO `admin_role_action` VALUES (2, 11);
INSERT INTO `admin_role_action` VALUES (1, 23);
INSERT INTO `admin_role_action` VALUES (1, 26);
INSERT INTO `admin_role_action` VALUES (1, 27);
INSERT INTO `admin_role_action` VALUES (2, 27);
INSERT INTO `admin_role_action` VALUES (1, 28);
INSERT INTO `admin_role_action` VALUES (2, 28);
INSERT INTO `admin_role_action` VALUES (1, 30);
INSERT INTO `admin_role_action` VALUES (2, 30);
INSERT INTO `admin_role_action` VALUES (1, 31);
INSERT INTO `admin_role_action` VALUES (2, 31);
INSERT INTO `admin_role_action` VALUES (1, 32);
INSERT INTO `admin_role_action` VALUES (1, 33);
INSERT INTO `admin_role_action` VALUES (2, 33);
INSERT INTO `admin_role_action` VALUES (1, 40);
INSERT INTO `admin_role_action` VALUES (1, 41);
INSERT INTO `admin_role_action` VALUES (2, 41);
INSERT INTO `admin_role_action` VALUES (1, 42);
INSERT INTO `admin_role_action` VALUES (2, 42);
INSERT INTO `admin_role_action` VALUES (1, 43);
INSERT INTO `admin_role_action` VALUES (2, 43);
INSERT INTO `admin_role_action` VALUES (1, 44);
INSERT INTO `admin_role_action` VALUES (2, 44);
INSERT INTO `admin_role_action` VALUES (1, 45);
INSERT INTO `admin_role_action` VALUES (2, 45);
INSERT INTO `admin_role_action` VALUES (1, 47);
INSERT INTO `admin_role_action` VALUES (2, 47);
INSERT INTO `admin_role_action` VALUES (1, 48);
INSERT INTO `admin_role_action` VALUES (1, 49);
INSERT INTO `admin_role_action` VALUES (2, 49);
INSERT INTO `admin_role_action` VALUES (1, 50);
INSERT INTO `admin_role_action` VALUES (2, 50);
INSERT INTO `admin_role_action` VALUES (1, 51);
INSERT INTO `admin_role_action` VALUES (2, 51);
INSERT INTO `admin_role_action` VALUES (1, 52);
INSERT INTO `admin_role_action` VALUES (2, 52);
INSERT INTO `admin_role_action` VALUES (1, 53);
INSERT INTO `admin_role_action` VALUES (2, 53);
INSERT INTO `admin_role_action` VALUES (1, 54);
INSERT INTO `admin_role_action` VALUES (2, 54);
INSERT INTO `admin_role_action` VALUES (1, 55);
INSERT INTO `admin_role_action` VALUES (2, 55);
INSERT INTO `admin_role_action` VALUES (1, 56);
INSERT INTO `admin_role_action` VALUES (2, 56);
INSERT INTO `admin_role_action` VALUES (1, 57);
INSERT INTO `admin_role_action` VALUES (2, 57);
INSERT INTO `admin_role_action` VALUES (1, 58);
INSERT INTO `admin_role_action` VALUES (2, 58);
INSERT INTO `admin_role_action` VALUES (1, 61);
INSERT INTO `admin_role_action` VALUES (2, 61);
INSERT INTO `admin_role_action` VALUES (1, 65);
INSERT INTO `admin_role_action` VALUES (2, 65);
INSERT INTO `admin_role_action` VALUES (1, 66);
INSERT INTO `admin_role_action` VALUES (2, 66);
INSERT INTO `admin_role_action` VALUES (1, 67);
INSERT INTO `admin_role_action` VALUES (2, 67);
INSERT INTO `admin_role_action` VALUES (1, 68);
INSERT INTO `admin_role_action` VALUES (2, 68);
INSERT INTO `admin_role_action` VALUES (1, 75);
INSERT INTO `admin_role_action` VALUES (2, 75);
INSERT INTO `admin_role_action` VALUES (1, 76);
INSERT INTO `admin_role_action` VALUES (2, 76);
INSERT INTO `admin_role_action` VALUES (1, 77);
INSERT INTO `admin_role_action` VALUES (2, 77);
INSERT INTO `admin_role_action` VALUES (1, 91);
INSERT INTO `admin_role_action` VALUES (2, 91);
INSERT INTO `admin_role_action` VALUES (1, 94);
INSERT INTO `admin_role_action` VALUES (2, 94);
INSERT INTO `admin_role_action` VALUES (1, 95);
INSERT INTO `admin_role_action` VALUES (2, 95);
INSERT INTO `admin_role_action` VALUES (1, 121);
INSERT INTO `admin_role_action` VALUES (2, 121);
INSERT INTO `admin_role_action` VALUES (1, 122);
INSERT INTO `admin_role_action` VALUES (2, 122);
INSERT INTO `admin_role_action` VALUES (1, 123);
INSERT INTO `admin_role_action` VALUES (2, 123);
INSERT INTO `admin_role_action` VALUES (1, 124);
INSERT INTO `admin_role_action` VALUES (2, 124);
INSERT INTO `admin_role_action` VALUES (1, 125);
INSERT INTO `admin_role_action` VALUES (2, 125);
INSERT INTO `admin_role_action` VALUES (1, 126);
INSERT INTO `admin_role_action` VALUES (2, 126);
INSERT INTO `admin_role_action` VALUES (1, 127);
INSERT INTO `admin_role_action` VALUES (2, 127);
INSERT INTO `admin_role_action` VALUES (1, 128);
INSERT INTO `admin_role_action` VALUES (2, 128);
INSERT INTO `admin_role_action` VALUES (1, 130);
INSERT INTO `admin_role_action` VALUES (2, 130);
INSERT INTO `admin_role_action` VALUES (1, 136);
INSERT INTO `admin_role_action` VALUES (2, 136);
INSERT INTO `admin_role_action` VALUES (1, 137);
INSERT INTO `admin_role_action` VALUES (2, 137);
INSERT INTO `admin_role_action` VALUES (1, 142);
INSERT INTO `admin_role_action` VALUES (2, 142);
INSERT INTO `admin_role_action` VALUES (1, 145);
INSERT INTO `admin_role_action` VALUES (2, 145);
INSERT INTO `admin_role_action` VALUES (1, 202);
INSERT INTO `admin_role_action` VALUES (1, 205);
INSERT INTO `admin_role_action` VALUES (2, 205);
INSERT INTO `admin_role_action` VALUES (1, 206);
INSERT INTO `admin_role_action` VALUES (2, 206);
INSERT INTO `admin_role_action` VALUES (1, 208);
INSERT INTO `admin_role_action` VALUES (2, 208);
INSERT INTO `admin_role_action` VALUES (1, 209);
INSERT INTO `admin_role_action` VALUES (2, 209);
INSERT INTO `admin_role_action` VALUES (1, 213);
INSERT INTO `admin_role_action` VALUES (1, 214);
INSERT INTO `admin_role_action` VALUES (1, 215);
INSERT INTO `admin_role_action` VALUES (1, 216);
INSERT INTO `admin_role_action` VALUES (1, 217);
INSERT INTO `admin_role_action` VALUES (1, 218);
INSERT INTO `admin_role_action` VALUES (1, 219);
INSERT INTO `admin_role_action` VALUES (1, 220);
INSERT INTO `admin_role_action` VALUES (1, 221);
INSERT INTO `admin_role_action` VALUES (1, 222);
INSERT INTO `admin_role_action` VALUES (2, 222);
INSERT INTO `admin_role_action` VALUES (1, 225);
INSERT INTO `admin_role_action` VALUES (2, 225);
INSERT INTO `admin_role_action` VALUES (1, 226);
INSERT INTO `admin_role_action` VALUES (1, 227);
INSERT INTO `admin_role_action` VALUES (1, 228);
INSERT INTO `admin_role_action` VALUES (2, 228);
INSERT INTO `admin_role_action` VALUES (1, 229);
INSERT INTO `admin_role_action` VALUES (2, 229);
INSERT INTO `admin_role_action` VALUES (1, 230);
INSERT INTO `admin_role_action` VALUES (2, 230);
INSERT INTO `admin_role_action` VALUES (1, 231);
INSERT INTO `admin_role_action` VALUES (2, 231);
INSERT INTO `admin_role_action` VALUES (1, 232);
INSERT INTO `admin_role_action` VALUES (2, 232);
INSERT INTO `admin_role_action` VALUES (1, 235);
INSERT INTO `admin_role_action` VALUES (1, 236);
INSERT INTO `admin_role_action` VALUES (2, 236);
INSERT INTO `admin_role_action` VALUES (1, 237);
INSERT INTO `admin_role_action` VALUES (2, 237);
INSERT INTO `admin_role_action` VALUES (1, 238);
INSERT INTO `admin_role_action` VALUES (2, 238);
INSERT INTO `admin_role_action` VALUES (1, 239);
INSERT INTO `admin_role_action` VALUES (2, 239);
INSERT INTO `admin_role_action` VALUES (1, 241);
INSERT INTO `admin_role_action` VALUES (1, 242);
INSERT INTO `admin_role_action` VALUES (1, 243);
INSERT INTO `admin_role_action` VALUES (1, 244);
INSERT INTO `admin_role_action` VALUES (1, 245);
INSERT INTO `admin_role_action` VALUES (1, 246);
INSERT INTO `admin_role_action` VALUES (1, 247);
INSERT INTO `admin_role_action` VALUES (1, 248);
INSERT INTO `admin_role_action` VALUES (1, 249);
INSERT INTO `admin_role_action` VALUES (1, 250);
INSERT INTO `admin_role_action` VALUES (1, 251);
INSERT INTO `admin_role_action` VALUES (1, 252);
INSERT INTO `admin_role_action` VALUES (1, 253);
INSERT INTO `admin_role_action` VALUES (1, 254);
INSERT INTO `admin_role_action` VALUES (1, 255);
INSERT INTO `admin_role_action` VALUES (1, 256);
INSERT INTO `admin_role_action` VALUES (1, 257);

SET FOREIGN_KEY_CHECKS = 1;
