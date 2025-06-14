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

 Date: 30/05/2025 12:07:38
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for centre_static_data
-- ----------------------------
DROP TABLE IF EXISTS `centre_static_data`;
CREATE TABLE `centre_static_data`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '表名',
  `desc` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '描述',
  `updatetime` int(11) NOT NULL,
  `isEdit` tinyint(1) NULL DEFAULT 0 COMMENT '是否可编辑的',
  `enabled` tinyint(1) NOT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `IDX_NAME`(`name`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 48 CHARACTER SET = utf8 COLLATE = utf8_general_ci COMMENT = '静态表表名（读取redis数据使用）' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of centre_static_data
-- ----------------------------
INSERT INTO `centre_static_data` VALUES (25, 'centre_sys_hero', '静态武将表', 1747376780, 0, 1);
INSERT INTO `centre_static_data` VALUES (26, 'centre_sys_skill', '静态技能表', 1746611702, 0, 1);
INSERT INTO `centre_static_data` VALUES (29, 'centre_sys_equip', '装备静态表', 1746611727, 0, 1);
INSERT INTO `centre_static_data` VALUES (30, 'centre_sys_hero_career', '武将职业静态表（从语言包导出）', 1746692627, 0, 1);
INSERT INTO `centre_static_data` VALUES (31, 'centre_sys_league_rank', '静态官员职称表', 1746692628, 0, 1);
INSERT INTO `centre_static_data` VALUES (32, 'centre_sys_effect_fight', '静态战斗效果描述表', 1746692630, 0, 1);
INSERT INTO `centre_static_data` VALUES (33, 'centre_sys_effect_tag', '静态战斗效果表', 1746692632, 0, 1);
INSERT INTO `centre_static_data` VALUES (34, 'centre_sys_item', '道具静态表', 1746668344, 0, 1);
INSERT INTO `centre_static_data` VALUES (35, 'centre_sys_faction', '静态势力信息表', 1746682549, 0, 1);
INSERT INTO `centre_static_data` VALUES (37, 'centre_sys_rechargeclass', '充值类型静态表', 1746774837, 1, 1);
INSERT INTO `centre_static_data` VALUES (46, 'centre_sys_profile', '头像静态表', 1747377104, 0, 1);
INSERT INTO `centre_static_data` VALUES (47, 'centre_sys_emoji', '表情静态表', 1747377133, 0, 1);

SET FOREIGN_KEY_CHECKS = 1;
