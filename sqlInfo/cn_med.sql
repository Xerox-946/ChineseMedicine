/*
 Navicat Premium Dump SQL

 Source Server         : mysql
 Source Server Type    : MySQL
 Source Server Version : 80042 (8.0.42)
 Source Host           : localhost:3306
 Source Schema         : cn_med

 Target Server Type    : MySQL
 Target Server Version : 80042 (8.0.42)
 File Encoding         : 65001

 Date: 14/06/2025 11:03:11
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for admin
-- ----------------------------
DROP TABLE IF EXISTS `admin`;
CREATE TABLE `admin`  (
  `ID` int NOT NULL AUTO_INCREMENT,
  `UserName` varchar(200) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL,
  `RoleID` int UNSIGNED NOT NULL DEFAULT 0 COMMENT '角色ID',
  `Sex` tinyint(1) NOT NULL,
  `Password` varchar(32) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL,
  `Salt` char(8) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL,
  `Telphone` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL,
  `Status` tinyint UNSIGNED NOT NULL DEFAULT 1,
  `Dateline` int UNSIGNED NOT NULL,
  `LoginTime` int UNSIGNED NOT NULL DEFAULT 0,
  `LoginIP` varchar(15) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL DEFAULT '0.0.0.0',
  `PowerID` tinyint(1) NULL DEFAULT 0 COMMENT '特殊权限设置，不开放配置，仅内部超级admin帐号设为1',
  PRIMARY KEY (`ID`) USING BTREE,
  UNIQUE INDEX `username`(`UserName` ASC) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 7 CHARACTER SET = utf8mb3 COLLATE = utf8mb3_general_ci COMMENT = '帐号信息' ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of admin
-- ----------------------------
INSERT INTO `admin` VALUES (1, 'admin', 1, 1, '274df22c4933ed3b778d1516a8b66a3c', 'CwrFTvWR', '13758177576', 1, 1739958408, 1742819044, '192.168.15.103', 1);
INSERT INTO `admin` VALUES (2, 'xhn', 1, 0, '8814594d12c9b92987e6c90c5c343270', 'CwrFTvWR', NULL, 1, 1739869380, 1740390905, '192.168.184.111', 0);

-- ----------------------------
-- Table structure for admin_actions
-- ----------------------------
DROP TABLE IF EXISTS `admin_actions`;
CREATE TABLE `admin_actions`  (
  `id` int UNSIGNED NOT NULL AUTO_INCREMENT COMMENT '能否被编辑，跟admin的power_id操作与',
  `parent_id` int UNSIGNED NOT NULL DEFAULT 0,
  `action_name` varchar(32) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL DEFAULT '' COMMENT '方法名',
  `controller` varchar(32) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL DEFAULT '' COMMENT '控制器',
  `action` varchar(32) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL DEFAULT '' COMMENT '方法',
  `desc` varchar(32) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL,
  `status` tinyint UNSIGNED NOT NULL DEFAULT 1 COMMENT '状态',
  `orderby` smallint NULL DEFAULT 0 COMMENT '0时不显示在左侧导航栏，>0时，越小排序越靠前',
  `navid` int NULL DEFAULT NULL COMMENT '被操作时导航栏选中的栏目',
  `isManage` tinyint(1) NOT NULL DEFAULT 0 COMMENT '配置是否被管控',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 268 CHARACTER SET = utf8mb3 COLLATE = utf8mb3_general_ci COMMENT = '后台基础功能配置表' ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of admin_actions
-- ----------------------------
INSERT INTO `admin_actions` VALUES (2, 0, '管理平台', 'server', 'manage-platform', 'C', 5, 1, 2, 0);
INSERT INTO `admin_actions` VALUES (3, 2, '结构一览', 'server', 'structure', 'A', 1, 1, 3, 0);
INSERT INTO `admin_actions` VALUES (4, 2, '平台管理', 'server', 'platform', 'A', 1, 2, 4, 1);
INSERT INTO `admin_actions` VALUES (5, 2, '添加平台', 'server', 'platform:add', 'A', 1, 0, 4, 1);
INSERT INTO `admin_actions` VALUES (7, 2, '删除', 'server', 'platform:delete', 'A', 1, 0, 4, 1);
INSERT INTO `admin_actions` VALUES (8, 2, '编辑平台', 'server', 'platform:edit', 'A', 1, 0, 4, 1);
INSERT INTO `admin_actions` VALUES (48, 0, '系统配置', 'admin', 'system-configurations', 'C', 1, 8, 48, 0);
INSERT INTO `admin_actions` VALUES (49, 48, '角色管理', 'admin', 'role', 'A', 1, 1, 49, 0);
INSERT INTO `admin_actions` VALUES (50, 48, '添加角色', 'admin', 'role:add', 'A', 1, 0, 49, 0);
INSERT INTO `admin_actions` VALUES (51, 48, '编辑角色', 'admin', 'role:edit', 'A', 1, 0, 49, 0);
INSERT INTO `admin_actions` VALUES (52, 48, '删除角色', 'admin', 'role:delete', 'A', 1, 0, 49, 0);
INSERT INTO `admin_actions` VALUES (53, 48, '用户列表', 'admin', 'user', 'A', 1, 2, 53, 0);
INSERT INTO `admin_actions` VALUES (54, 48, '添加用户', 'admin', 'addAdmin', 'A', 1, 0, 54, 0);
INSERT INTO `admin_actions` VALUES (55, 48, '编辑用户', 'admin', 'user:edit', 'A', 1, 0, 53, 0);
INSERT INTO `admin_actions` VALUES (56, 48, '控制器列表', 'admin', 'permitAction', 'A', 1, 4, 56, 0);
INSERT INTO `admin_actions` VALUES (57, 48, '添加控制器', 'admin', 'permitAction:add', 'A', 1, 0, 56, 0);
INSERT INTO `admin_actions` VALUES (58, 48, '删除用户', 'admin', 'user:delete', 'A', 1, 0, 53, 0);
INSERT INTO `admin_actions` VALUES (122, 48, '静态数据列表', 'admin', 'staticDataList', 'A', 1, 5, 122, 0);
INSERT INTO `admin_actions` VALUES (123, 48, '静态数据表删除', 'admin', 'staticDataList:delete', 'A', 1, 0, 122, 0);
INSERT INTO `admin_actions` VALUES (124, 48, '静态数据表修改', 'admin', 'staticDataList:edit', 'A', 1, 0, 122, 0);
INSERT INTO `admin_actions` VALUES (125, 48, '静态数据表添加', 'admin', 'staticDataList:add', 'A', 1, 0, 122, 0);
INSERT INTO `admin_actions` VALUES (228, 48, '修改密码', 'admin', 'changePassword', 'A', 1, 0, 228, 0);
INSERT INTO `admin_actions` VALUES (236, 48, '查看静态数据表详细', 'admin', 'staticDataList:query', 'A', 1, 0, 122, 0);
INSERT INTO `admin_actions` VALUES (237, 48, '新增静态数据详情', 'admin', 'teleport:add', 'A', 1, 0, 122, 0);
INSERT INTO `admin_actions` VALUES (238, 48, '编辑静态数据详情', 'admin', 'teleport:edit', 'A', 1, 0, 122, 0);
INSERT INTO `admin_actions` VALUES (239, 48, '删除静态数据详情', 'admin', 'teleport:delete', 'A', 1, 0, 122, 0);
INSERT INTO `admin_actions` VALUES (266, 48, '添加用户', 'admin', 'user:add', 'A', 1, 0, 53, 0);
INSERT INTO `admin_actions` VALUES (267, 48, '启用控制器', 'admin', 'permitAction:enabled', 'A', 1, 0, 56, 0);

-- ----------------------------
-- Table structure for admin_purview
-- ----------------------------
DROP TABLE IF EXISTS `admin_purview`;
CREATE TABLE `admin_purview`  (
  `PurviewID` int UNSIGNED NOT NULL AUTO_INCREMENT COMMENT '数据访问权限ID',
  `Name` varchar(32) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL DEFAULT '' COMMENT '权限名',
  `Purview` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL DEFAULT '',
  PRIMARY KEY (`PurviewID`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 6 CHARACTER SET = utf8mb3 COLLATE = utf8mb3_general_ci COMMENT = '后台基础功能配置表' ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of admin_purview
-- ----------------------------
INSERT INTO `admin_purview` VALUES (1, '指定玩家信息查询 ', 'QueryPlayer');
INSERT INTO `admin_purview` VALUES (2, '道具明细', 'QueryItem');
INSERT INTO `admin_purview` VALUES (3, '货币明细', 'QueryCoin');
INSERT INTO `admin_purview` VALUES (4, '订单查询', 'QueryOrder');
INSERT INTO `admin_purview` VALUES (5, '结构一览', 'QueryStructure');

-- ----------------------------
-- Table structure for admin_role
-- ----------------------------
DROP TABLE IF EXISTS `admin_role`;
CREATE TABLE `admin_role`  (
  `ID` int UNSIGNED NOT NULL AUTO_INCREMENT COMMENT '角色表【主键】',
  `RoleName` varchar(32) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL DEFAULT '' COMMENT '角色名',
  `Desc` varchar(32) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL DEFAULT '' COMMENT '注释',
  `AddTime` int UNSIGNED NOT NULL DEFAULT 0 COMMENT '添加时间',
  PRIMARY KEY (`ID`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 9 CHARACTER SET = utf8mb3 COLLATE = utf8mb3_general_ci COMMENT = '角色信息' ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of admin_role
-- ----------------------------
INSERT INTO `admin_role` VALUES (1, '超级管理员', 'aaa', 1742353480);
INSERT INTO `admin_role` VALUES (2, '运营管理', 'A', 1739339617);

-- ----------------------------
-- Table structure for admin_role_action
-- ----------------------------
DROP TABLE IF EXISTS `admin_role_action`;
CREATE TABLE `admin_role_action`  (
  `role_id` int UNSIGNED NOT NULL COMMENT '角色表ID',
  `action_id` int UNSIGNED NOT NULL COMMENT '控制器ID',
  PRIMARY KEY (`role_id`, `action_id`) USING BTREE,
  INDEX `action_id`(`action_id` ASC) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb3 COLLATE = utf8mb3_general_ci COMMENT = '角色权限' ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of admin_role_action
-- ----------------------------
INSERT INTO `admin_role_action` VALUES (1, 48);
INSERT INTO `admin_role_action` VALUES (1, 49);
INSERT INTO `admin_role_action` VALUES (1, 50);
INSERT INTO `admin_role_action` VALUES (1, 51);
INSERT INTO `admin_role_action` VALUES (1, 52);
INSERT INTO `admin_role_action` VALUES (1, 53);
INSERT INTO `admin_role_action` VALUES (1, 54);
INSERT INTO `admin_role_action` VALUES (1, 55);
INSERT INTO `admin_role_action` VALUES (1, 56);
INSERT INTO `admin_role_action` VALUES (1, 57);
INSERT INTO `admin_role_action` VALUES (1, 58);
INSERT INTO `admin_role_action` VALUES (1, 122);
INSERT INTO `admin_role_action` VALUES (1, 123);
INSERT INTO `admin_role_action` VALUES (1, 124);
INSERT INTO `admin_role_action` VALUES (1, 125);
INSERT INTO `admin_role_action` VALUES (1, 228);
INSERT INTO `admin_role_action` VALUES (1, 236);
INSERT INTO `admin_role_action` VALUES (1, 237);
INSERT INTO `admin_role_action` VALUES (1, 238);
INSERT INTO `admin_role_action` VALUES (1, 239);
INSERT INTO `admin_role_action` VALUES (1, 266);
INSERT INTO `admin_role_action` VALUES (1, 267);

-- ----------------------------
-- Table structure for admin_role_purview
-- ----------------------------
DROP TABLE IF EXISTS `admin_role_purview`;
CREATE TABLE `admin_role_purview`  (
  `RoleID` int UNSIGNED NOT NULL COMMENT '角色表ID',
  `Purview` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL DEFAULT '' COMMENT '权限名',
  PRIMARY KEY (`RoleID`, `Purview`) USING BTREE,
  INDEX `PurviewID`(`Purview` ASC) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb3 COLLATE = utf8mb3_general_ci COMMENT = '角色权限' ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of admin_role_purview
-- ----------------------------
INSERT INTO `admin_role_purview` VALUES (1, 'DataMonitorByHero');
INSERT INTO `admin_role_purview` VALUES (1, 'QueryOrder');
INSERT INTO `admin_role_purview` VALUES (1, 'QueryPlayer');
INSERT INTO `admin_role_purview` VALUES (1, 'QueryStructure');

-- ----------------------------
-- Table structure for ancient
-- ----------------------------
DROP TABLE IF EXISTS `ancient`;
CREATE TABLE `ancient`  (
  `ID` int NOT NULL COMMENT '主键',
  `Name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '古籍名称',
  `Author` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '作者',
  `Dynasty` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '朝代',
  PRIMARY KEY (`ID`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci COMMENT = '古籍表\r\n' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of ancient
-- ----------------------------

-- ----------------------------
-- Table structure for centre_static_data
-- ----------------------------
DROP TABLE IF EXISTS `centre_static_data`;
CREATE TABLE `centre_static_data`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL COMMENT '表名',
  `desc` varchar(200) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL COMMENT '描述',
  `updatetime` int NOT NULL,
  `isEdit` tinyint(1) NULL DEFAULT 0 COMMENT '是否可编辑的',
  `enabled` tinyint(1) NOT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `IDX_NAME`(`name` ASC) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 49 CHARACTER SET = utf8mb3 COLLATE = utf8mb3_general_ci COMMENT = '静态表表名（读取redis数据使用）' ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of centre_static_data
-- ----------------------------

-- ----------------------------
-- Table structure for illness_case
-- ----------------------------
DROP TABLE IF EXISTS `illness_case`;
CREATE TABLE `illness_case`  (
  `ID` int NOT NULL COMMENT '主键',
  `AID` int NULL DEFAULT NULL COMMENT '对应古籍ID',
  `Case` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '病例',
  `Medication` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '用药队列',
  PRIMARY KEY (`ID`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci COMMENT = '病例表' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of illness_case
-- ----------------------------

-- ----------------------------
-- Table structure for medication
-- ----------------------------
DROP TABLE IF EXISTS `medication`;
CREATE TABLE `medication`  (
  `ID` int NOT NULL COMMENT '主键',
  `Name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '药名',
  `Desc` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '功效描述',
  PRIMARY KEY (`ID`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci COMMENT = '药物表' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of medication
-- ----------------------------

SET FOREIGN_KEY_CHECKS = 1;
