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

 Date: 29/05/2025 23:49:44
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for admin_actions
-- ----------------------------
DROP TABLE IF EXISTS `admin_actions`;
CREATE TABLE `admin_actions`  (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT COMMENT '能否被编辑，跟admin的power_id操作与',
  `parent_id` int(10) UNSIGNED NOT NULL DEFAULT 0,
  `action_name` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '' COMMENT '方法名',
  `controller` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '' COMMENT '控制器',
  `action` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '' COMMENT '方法',
  `desc` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `status` tinyint(1) UNSIGNED NOT NULL DEFAULT 1 COMMENT '状态',
  `EN_name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `VN_name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `JP_name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `orderby` smallint(6) NULL DEFAULT 0 COMMENT '0时不显示在左侧导航栏，>0时，越小排序越靠前',
  `navid` int(11) NULL DEFAULT NULL COMMENT '被操作时导航栏选中的栏目',
  `isManage` tinyint(1) NOT NULL DEFAULT 0 COMMENT '配置是否被管控',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 268 CHARACTER SET = utf8 COLLATE = utf8_general_ci COMMENT = '后台基础功能配置表' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of admin_actions
-- ----------------------------
INSERT INTO `admin_actions` VALUES (2, 0, '管理平台', 'server', 'manage-platform', 'C', 1, 'Manage Platform', 'Quản lý platform', '経営基盤', 1, 2, 0);
INSERT INTO `admin_actions` VALUES (3, 2, '结构一览', 'server', 'structure', 'A', 1, 'Structures', 'Giao', '一目でわかる構造', 1, 3, 0);
INSERT INTO `admin_actions` VALUES (4, 2, '平台管理', 'server', 'platform', 'A', 1, 'Manage Platform', 'Quản lý platform', 'プラットフォーム管理', 2, 4, 1);
INSERT INTO `admin_actions` VALUES (5, 2, '添加平台', 'server', 'platform:add', 'A', 1, 'Add Platform', 'Thêm kênh', 'プラットフォームの追加', 0, 4, 1);
INSERT INTO `admin_actions` VALUES (7, 2, '删除', 'server', 'platform:delete', 'A', 1, 'Delete', 'Xóa', '削除', 0, 4, 1);
INSERT INTO `admin_actions` VALUES (8, 2, '编辑平台', 'server', 'platform:edit', 'A', 1, 'Edit Platform', 'Edit kênh', 'プラットフォームの編集', 0, 4, 1);
INSERT INTO `admin_actions` VALUES (9, 2, '服务器管理', 'server', 'serverList', 'A', 0, 'Manage Server', 'Quản lý server', 'サーバー管理', 5, 9, 1);
INSERT INTO `admin_actions` VALUES (10, 2, '添加服务器', 'server', 'serverList:add', 'A', 0, 'Add Server', 'Thuộc kênh', 'サーバーの追加', 0, 9, 1);
INSERT INTO `admin_actions` VALUES (11, 2, '编辑服务器', 'server', 'serverList:edit', 'A', 0, 'Edit Server', 'Mất hiệu lực', 'サーバー編集', 0, 9, 1);
INSERT INTO `admin_actions` VALUES (12, 0, '游戏管理', 'game', 'manage-game', 'C', 0, 'Manage Game', 'Quản lý game', 'ゲーム管理', 0, 12, 0);
INSERT INTO `admin_actions` VALUES (13, 12, '系统公告', 'game', 'new_push', 'A', 0, 'Notices', 'Thông báo danh sách', 'システム告知', 0, 13, 0);
INSERT INTO `admin_actions` VALUES (14, 12, '添加系统公告', 'game', 'add_edit_new_push', 'A', 0, 'Add Notice', 'Thêm mới thưởng', 'システムアナウンスの追加', 0, 14, 0);
INSERT INTO `admin_actions` VALUES (15, 12, '重新发送', 'game', 'editPush', 'A', 0, 'Resend', 'Gửi lại', '再送', 0, 15, 0);
INSERT INTO `admin_actions` VALUES (18, 12, '编辑系统公告', 'game', 'add_edit_new_push', 'A', 0, 'Edit Notice', 'Edit thông báo', 'システム告知編集', 0, 18, 0);
INSERT INTO `admin_actions` VALUES (19, 12, '活动发布', 'game', 'event', 'A', 0, 'Publish Event', 'Công bố hoạt động', 'イベント告知', 0, 19, 0);
INSERT INTO `admin_actions` VALUES (20, 12, '添加活动', 'game', 'addEvent', 'A', 0, 'Add Event', 'Thêm hoạt động', 'イベントの追加', 0, 20, 0);
INSERT INTO `admin_actions` VALUES (21, 12, '编辑活动', 'game', 'editEvent', 'A', 0, 'Edit Event', 'Edit hoạt động', 'イベント編集', 0, 21, 0);
INSERT INTO `admin_actions` VALUES (22, 12, '删除', 'game', 'delete', 'A', 0, 'Delete', 'Xóa', '削除', 0, 22, 0);
INSERT INTO `admin_actions` VALUES (23, 0, '玩家管理', 'player', 'manage-player', 'C', 1, 'Player Action', 'Thao tác người chơi', '選手管理', 2, 23, 0);
INSERT INTO `admin_actions` VALUES (26, 0, '运营数据监控', 'monitor', 'monitor-operation', 'C', 1, 'Monitor Operation Data', 'Khống chế dữ liệu vận hành', '運営データ監視', 3, 26, 0);
INSERT INTO `admin_actions` VALUES (27, 26, '查看当前在线', 'monitor', 'checkOnlineData', 'A', 1, 'View Online', 'Xem online', '現在のオンラインを見る', 3, 27, 0);
INSERT INTO `admin_actions` VALUES (28, 26, '历史数据分布', 'monitor', 'onlineDataAvgDay', 'A', 1, 'Average Online Data', 'Dữ liệu online bình quân', '過去データ配信', 1, 28, 0);
INSERT INTO `admin_actions` VALUES (30, 26, '付费明细', 'monitor', 'recharge', 'A', 1, 'Recharge Details', 'Chi tiết nạp', '支払い詳細', 5, 30, 0);
INSERT INTO `admin_actions` VALUES (31, 26, '付费统计', 'monitor', 'rechargeCount', 'A', 1, 'Payment Statistics', 'Thống kê trả phí', '支払い統計', 6, 31, 0);
INSERT INTO `admin_actions` VALUES (32, 0, '运营管理操作', 'operation', 'operation-management', 'C', 1, 'Operation Management Action', 'Thứ tự', '運営管理', 5, 32, 0);
INSERT INTO `admin_actions` VALUES (33, 32, '删除系统信件', 'operation', 'sysMailList:delete', 'A', 1, 'Edit System Mail', 'Edit thư hệ thống', 'システムメール削除', 0, 127, 0);
INSERT INTO `admin_actions` VALUES (39, 32, '删除', 'operation', 'drop', 'A', 0, 'Delete', 'Xóa', '削除', 0, 39, 0);
INSERT INTO `admin_actions` VALUES (40, 0, 'KEY码管理', 'key', 'manage-key-code', 'C', 1, 'Manage Key Code', 'Quản lý KEY', 'キーコード管理', 6, 40, 0);
INSERT INTO `admin_actions` VALUES (41, 40, 'KEY码列表', 'key', 'keyList', 'A', 1, 'Key Code List', 'Danh sách KEY', 'キーコード一覧', 1, 41, 0);
INSERT INTO `admin_actions` VALUES (42, 40, 'key码生成', 'key', 'keyList:add', 'A', 1, 'Generate Key Code', 'Tạo mã KEY', 'キーコード生成', 0, 41, 0);
INSERT INTO `admin_actions` VALUES (43, 40, 'KEY码类别管理', 'key', 'keyClass', 'A', 1, 'Manage Key Code Category', 'Quản lý loại KEY', 'KEYコードカテゴリ管理', 2, 43, 0);
INSERT INTO `admin_actions` VALUES (44, 40, 'KEY码类别添加', 'key', 'keyClass:add', 'A', 1, 'Add Key Code Category', 'Thêm loại KEY', 'KEYコードカテゴリ追加', 0, 43, 0);
INSERT INTO `admin_actions` VALUES (45, 40, '编辑KEY码类别', 'key', 'keyClass:edit', 'A', 1, 'Edit Key Code Category', 'Edit mã KEY', 'KEYコードカテゴリの編集', 0, 43, 0);
INSERT INTO `admin_actions` VALUES (47, 40, '删除', 'key', 'keyClass:delete', 'A', 1, 'Delete', 'Xóa', '削除', 0, 43, 0);
INSERT INTO `admin_actions` VALUES (48, 0, '系统配置', 'admin', 'system-configurations', 'C', 1, 'System Configurations', 'Thời gian', 'システム構成', 8, 48, 0);
INSERT INTO `admin_actions` VALUES (49, 48, '角色管理', 'admin', 'role', 'A', 1, 'Manage Character', 'Tìm', '役割管理', 1, 49, 0);
INSERT INTO `admin_actions` VALUES (50, 48, '添加角色', 'admin', 'role:add', 'A', 1, 'Add Character', 'Thêm nhân vật', '役割の追加', 0, 49, 0);
INSERT INTO `admin_actions` VALUES (51, 48, '编辑角色', 'admin', 'role:edit', 'A', 1, 'Edit Character', 'Edit nhân vật', '役割の編集', 0, 49, 0);
INSERT INTO `admin_actions` VALUES (52, 48, '删除角色', 'admin', 'role:delete', 'A', 1, 'Delete Character', 'Xóa nhân vật', '役割の削除', 0, 49, 0);
INSERT INTO `admin_actions` VALUES (53, 48, '用户列表', 'admin', 'user', 'A', 1, 'Use List', 'Danh sách user', 'ユーザーリスト', 2, 53, 0);
INSERT INTO `admin_actions` VALUES (54, 48, '添加用户', 'admin', 'addAdmin', 'A', 1, 'Add User', 'Thêm user', 'ユーザー追加', 0, 54, 0);
INSERT INTO `admin_actions` VALUES (55, 48, '编辑用户', 'admin', 'user:edit', 'A', 1, 'Edit User', 'Edit user', 'ユーザー編集', 0, 53, 0);
INSERT INTO `admin_actions` VALUES (56, 48, '控制器列表', 'admin', 'permitAction', 'A', 1, 'Controller List', 'Danh sách controller', 'コントローラーリスト', 4, 56, 0);
INSERT INTO `admin_actions` VALUES (57, 48, '添加控制器', 'admin', 'permitAction:add', 'A', 1, 'Add Controller', 'Thêm bộ điều khiển', 'コントローラー追加', 0, 56, 0);
INSERT INTO `admin_actions` VALUES (58, 48, '删除用户', 'admin', 'user:delete', 'A', 1, 'Delete User', 'Xóa user', 'ユーザー削除', 0, 53, 0);
INSERT INTO `admin_actions` VALUES (61, 23, '指定玩家信息查询', 'player', 'getRoleList', 'A', 1, 'Search a specific player\'s info', 'Xem thông tin người chơi chỉ định', '選手情報クエリの指定', 1, 61, 0);
INSERT INTO `admin_actions` VALUES (65, 23, '道具明细', 'player', 'DataMonitorByItem', 'A', 1, 'Item Details', 'Chi tiết đạo cụ', '小道具の内訳', 7, 65, 1);
INSERT INTO `admin_actions` VALUES (66, 23, '货币明细', 'player', 'payLogList', 'A', 1, 'Currency Details', 'Chi tiết tiền', '通貨内訳', 6, 66, 1);
INSERT INTO `admin_actions` VALUES (67, 26, '角色创建统计', 'monitor', 'roleCreate', 'A', 1, 'Character Creation Data', 'Thống kê tạo nhân vật', 'キャラクター作成統計', 11, 67, 0);
INSERT INTO `admin_actions` VALUES (68, 26, '留存统计列表', 'monitor', 'playerSurvival', 'A', 1, 'Retention Statistics List', 'Danh sách thống kê tồn', 'リテンション統計', 10, 68, 0);
INSERT INTO `admin_actions` VALUES (75, 23, '指定玩家禁言/冻结', 'player', 'gameUserFreeze', 'A', 1, 'Ban a specific player to chat/suspend his account', 'Chỉ định người chơi cấm ngôn/đóng băng', '指定選手禁止/凍結', 2, 75, 0);
INSERT INTO `admin_actions` VALUES (76, 23, '玩家禁闭禁言列表', 'player', 'gameUserFreezeList', 'A', 1, 'Player\'s Ban List', 'Danh sách người chơi cấm nói', 'プレイヤーBANリスト', 3, 76, 0);
INSERT INTO `admin_actions` VALUES (77, 26, '付费排行', 'monitor', 'rechargeRanking', 'A', 1, 'Top-Up Ranking', 'Hạng nạp', '有料ランキング', 8, 77, 0);
INSERT INTO `admin_actions` VALUES (91, 26, '当日在线数据', 'monitor', 'onlineDataByFifteenStep', 'A', 1, 'View Online', 'Xem online', '今日のオンラインデータ', 2, 91, 0);
INSERT INTO `admin_actions` VALUES (93, 26, '新历史在线', 'monitor', 'historyOnlineData', 'A', 0, 'New History Online', 'Nhật ký online mới', '新着履歴オンライン', 0, 93, 0);
INSERT INTO `admin_actions` VALUES (94, 40, 'key码查询结果导出', 'key', 'keyList:export', 'A', 1, 'Export Key Code Search Result', 'Export kết quả tìm mã key', 'キーコード検索結果エクスポート', 0, 41, 0);
INSERT INTO `admin_actions` VALUES (95, 26, '全服付费一览', 'monitor', 'rechargeCountBySer', 'A', 1, 'Server Top-Up Review', 'Xem nạp toàn server', '支払いリスト', 4, 95, 0);
INSERT INTO `admin_actions` VALUES (121, 40, '启用KEY码类别', 'key', 'keyClass:enable', 'A', 1, 'Enable key code type', 'Mở loại mã KEY', 'KEYコードカテゴリの有効化', 0, 43, 0);
INSERT INTO `admin_actions` VALUES (122, 48, '静态数据列表', 'admin', 'staticDataList', 'A', 1, 'Static data list', 'Danh sách data tĩnh', '静的データ管理', 5, 122, 0);
INSERT INTO `admin_actions` VALUES (123, 48, '静态数据表删除', 'admin', 'staticDataList:delete', 'A', 1, 'Delete  static data list', 'Xóa danh sách dữ liệu tĩnh', '静的データテーブル削除', 0, 122, 0);
INSERT INTO `admin_actions` VALUES (124, 48, '静态数据表修改', 'admin', 'staticDataList:edit', 'A', 1, 'Update static data list', 'Xóa danh sách dữ liệu tĩnh', '静的データテーブル変更', 0, 122, 0);
INSERT INTO `admin_actions` VALUES (125, 48, '静态数据表添加', 'admin', 'staticDataList:add', 'A', 1, 'ADD static data list', 'Xóa danh sách dữ liệu tĩnh', '静的データテーブル追加', 0, 122, 0);
INSERT INTO `admin_actions` VALUES (126, 32, '增加系统信件', 'operation', 'sysMailList:add', 'A', 1, 'System mail', 'Thư hệ thống', 'システムレターの追加', 0, 127, 0);
INSERT INTO `admin_actions` VALUES (127, 32, '系统信件记录', 'operation', 'sysMailList', 'A', 1, 'System mail log', 'Nhật ký thư hệ thống', 'システム・メールの記録', 1, 127, 0);
INSERT INTO `admin_actions` VALUES (128, 32, '系统信件发送', 'operation', 'sysMailList:send', 'A', 1, 'Send system mail', 'Gửi thư hệ thống', 'システム・メール送信', 0, 127, 0);
INSERT INTO `admin_actions` VALUES (130, 23, '解禁', 'player', 'unfreeze', 'A', 1, 'Lift a ban', 'Mở khóa', 'ブロック解除', 0, 76, 0);
INSERT INTO `admin_actions` VALUES (131, 48, '添加平台换算比率', 'admin', 'addPaltRate', 'A', 0, 'Add platform exchange ratio', 'Thêm tỉ lệ chuyển đổi kênh', 'プラットフォーム転換率の追加', 0, 133, 0);
INSERT INTO `admin_actions` VALUES (132, 48, '编辑平台换算比率', 'admin', 'editPaltRate', 'A', 0, 'Edit platform exchange ratio', 'Edit tỉ lệ chuyển đổi kênh', 'プラットフォームコンバージョン率の編集', 0, 133, 0);
INSERT INTO `admin_actions` VALUES (133, 48, '换算比率管理', 'admin', 'paltRateList', 'A', 0, 'Platform exchange ratio list', 'Danh sách tỉ lệ chuyển đổi kênh', 'コンバージョン率の管理', 6, 133, 0);
INSERT INTO `admin_actions` VALUES (134, 48, '删除换算比率', 'admin', 'dropCom', 'A', 0, 'Delete exchange ratio', 'Xóa tỉ lệ chuyển đổi', 'コンバージョン率の削除', 0, 134, 0);
INSERT INTO `admin_actions` VALUES (136, 2, '清除指定服务器数据', 'server', 'serverList:delete', '', 1, 'Clear specified server data', 'Xóa dữ liệu server chỉ định', '指定サーバーデータのクリーニング', 0, 9, 1);
INSERT INTO `admin_actions` VALUES (137, 26, '月卡周卡明细', 'monitor', 'getVipCardsList', 'A', 1, 'Monthly VIP Card details', 'Chi tiết thẻ Thẻ VIP Tháng', '月次・週次カード明細', 0, 137, 0);
INSERT INTO `admin_actions` VALUES (138, 26, '查看整点在线', 'monitor', 'onlineDataByHour', 'A', 0, 'Check hourly online data', 'Xem online giờ chẵn', 'オンライン時間チェック', 0, 138, 0);
INSERT INTO `admin_actions` VALUES (139, 26, '服务器当前在线', 'monitor', 'onlineDataByServer', 'A', 0, 'Current online data', 'Server hiện đang online', '現在オンライン中のサーバー', 0, 139, 0);
INSERT INTO `admin_actions` VALUES (142, 32, '编辑系统信件', 'operation', 'sysMailList:edit', 'A', 1, 'Edit system mail', 'Edit thư hệ thống', 'システムメールの編集', 0, 127, 0);
INSERT INTO `admin_actions` VALUES (145, 26, '全服付费统计', 'monitor', 'rechargeCountAllSer', 'A', 1, 'Server paying statistics', 'Thống kê nạp toàn server', '全サービスの支払い統計', 7, 145, 0);
INSERT INTO `admin_actions` VALUES (168, 12, '发送公告', 'game', 'pushToServers', 'A', 0, 'Send notice', 'Gửi thông báo', 'お知らせの送信', 0, 168, 0);
INSERT INTO `admin_actions` VALUES (198, 48, '充值类型管理', 'admin', 'rechargeClassList', 'A', 0, NULL, NULL, 'リチャージタイプ管理', 0, 198, 0);
INSERT INTO `admin_actions` VALUES (199, 48, '新增充值类型', 'admin', 'addRechargeClass', 'A', 0, NULL, NULL, '新しいタイプの追加', 0, 199, 0);
INSERT INTO `admin_actions` VALUES (200, 48, '编辑充值类型', 'admin', 'editRechargeClass', 'A', 0, NULL, NULL, 'リチャージタイプの編集', 0, 200, 0);
INSERT INTO `admin_actions` VALUES (201, 48, '删除充值类型', 'admin', 'dropRechargeClass', 'A', 0, NULL, NULL, 'リチャージタイプの削除', 0, 201, 0);
INSERT INTO `admin_actions` VALUES (202, 0, '产品数据监控', 'pm_monitor', 'pm_monitor', 'C', 1, NULL, NULL, '製品データ監視', 4, 202, 0);
INSERT INTO `admin_actions` VALUES (203, 202, '道具销售', 'pm_monitor', 'itemSalesCount', 'A', 0, NULL, NULL, '小道具 買取価格', 0, 203, 0);
INSERT INTO `admin_actions` VALUES (204, 202, '道具购买价格', 'pm_monitor', 'getItemPriceSales', 'A', 0, NULL, NULL, '小道具購入価格', 0, 204, 0);
INSERT INTO `admin_actions` VALUES (205, 202, '消费数据', 'pm_monitor', 'creditSalesCount', 'A', 1, NULL, NULL, '消費データ', 1, 205, 0);
INSERT INTO `admin_actions` VALUES (206, 202, '用户加载数据', 'pm_monitor', 'userConversionRate', 'A', 1, NULL, NULL, 'ユーザー読み込みデータ', 2, 206, 0);
INSERT INTO `admin_actions` VALUES (207, 48, '游戏热更新', 'admin', 'hotupdate', 'A', 0, NULL, NULL, 'ゲームホットアップデート', 0, 207, 0);
INSERT INTO `admin_actions` VALUES (208, 26, '指定玩家付费查询', 'monitor', 'getRechargeByPlayer', 'A', 1, NULL, NULL, '特定選手支払い照会', 9, 208, 0);
INSERT INTO `admin_actions` VALUES (209, 26, '每日活跃', 'monitor', 'dailyActive', 'A', 1, NULL, NULL, '毎日のアクティビティ', 12, 209, 0);
INSERT INTO `admin_actions` VALUES (211, 48, '更新排行榜', 'admin', 'rankupdate', 'A', 0, NULL, NULL, '更新リーダーボード', 0, 211, 0);
INSERT INTO `admin_actions` VALUES (212, 26, '导量LTV数据', 'monitor', 'rechargeLTVList', 'A', 0, NULL, NULL, 'リードLTVデータ', 0, 212, 0);
INSERT INTO `admin_actions` VALUES (213, 0, '收入支出', 'income', 'income', 'C', 0, NULL, NULL, '収益支出', 7, 213, 0);
INSERT INTO `admin_actions` VALUES (214, 213, '钻石增加消耗一览', 'income', 'InOutList', 'A', 0, NULL, NULL, 'リチャージ増減', 0, 214, 0);
INSERT INTO `admin_actions` VALUES (215, 213, '钻石增加/消耗', 'income', 'getIncomeList', 'A', 0, NULL, NULL, 'クレジット増減', 0, 215, 0);
INSERT INTO `admin_actions` VALUES (216, 213, '运营活动消耗', 'income', 'getExpendActivity', 'A', 0, NULL, NULL, '営業活動消費', 0, 216, 0);
INSERT INTO `admin_actions` VALUES (217, 213, '付费档位统计', 'income', 'getClassRechage', 'A', 0, NULL, NULL, '有料出店統計', 0, 217, 0);
INSERT INTO `admin_actions` VALUES (218, 213, '小时收入', 'income', 'getHourRecharge', 'A', 0, NULL, NULL, '時間収入', 0, 218, 0);
INSERT INTO `admin_actions` VALUES (219, 213, 'TOP 500', 'income', 'getTop500', 'A', 0, NULL, NULL, 'トップ500', 0, 219, 0);
INSERT INTO `admin_actions` VALUES (220, 213, 'Top500近30周付费', 'income', 'getUserWeekRecharge', 'A', 0, NULL, NULL, 'トップ500 過去30週間の支払額', 0, 220, 0);
INSERT INTO `admin_actions` VALUES (221, 213, 'Top500近30日付费', 'income', 'getUserDaysRecharge', 'A', 0, NULL, NULL, '過去30日間の支払額トップ500', 0, 221, 0);
INSERT INTO `admin_actions` VALUES (222, 26, '运营数据一览', 'monitor', 'dayDataList', 'A', 1, NULL, NULL, '運営データ', 13, 222, 0);
INSERT INTO `admin_actions` VALUES (223, 202, '游戏加载监测', 'pm_monitor', 'gameLoading', 'A', 0, NULL, NULL, 'ゲーム負荷監視', 0, 223, 0);
INSERT INTO `admin_actions` VALUES (224, 202, '新增激活监测', 'pm_monitor', 'newerLoading', 'A', 0, NULL, NULL, '新規起動監視', 0, 224, 0);
INSERT INTO `admin_actions` VALUES (225, 32, '公告列表', 'operation', 'noticeList', 'A', 1, NULL, NULL, 'お知らせ一覧', 2, 225, 0);
INSERT INTO `admin_actions` VALUES (226, 32, '编辑公告', 'operation', 'noticeList:edit', 'A', 1, NULL, NULL, 'お知らせの追加・編集', 0, 225, 0);
INSERT INTO `admin_actions` VALUES (227, 32, '删除公告', 'operation', 'noticeList:delete', 'A', 1, NULL, NULL, 'アナウンス削除', 0, 225, 0);
INSERT INTO `admin_actions` VALUES (228, 48, '修改密码', 'admin', 'changePassword', 'A', 1, NULL, NULL, 'パスワード変更', 0, 228, 0);
INSERT INTO `admin_actions` VALUES (229, 23, '单个玩家详情', 'player', 'getRoleInfo', 'A', 1, NULL, NULL, '選手個人の詳細', 0, 61, 0);
INSERT INTO `admin_actions` VALUES (230, 23, '玩家个别详情查询', 'player', 'queryDetails', 'A', 1, NULL, NULL, '選手詳細お問い合わせ', 0, 61, 0);
INSERT INTO `admin_actions` VALUES (231, 23, '武将明细', 'player', 'DataMonitorByHero', 'A', 1, 'Hero Details', NULL, '軍の詳細', 8, 231, 1);
INSERT INTO `admin_actions` VALUES (232, 23, '家宝明细', 'player', 'DataMonitorByEquip', 'A', 1, 'Equip Details', NULL, '家宝の詳細', 9, 232, 1);
INSERT INTO `admin_actions` VALUES (235, 40, '设置自定义通码', 'Key', 'keyList:addFree', 'A', 1, NULL, NULL, '共通コードの設定', 0, 41, 0);
INSERT INTO `admin_actions` VALUES (236, 48, '查看静态数据表详细', 'admin', 'staticDataList:query', 'A', 1, NULL, NULL, '静的データテーブルの詳細を表示', 0, 122, 0);
INSERT INTO `admin_actions` VALUES (237, 48, '新增静态数据详情', 'admin', 'teleport:add', 'A', 1, NULL, NULL, '静的データの詳細を追加', 0, 122, 0);
INSERT INTO `admin_actions` VALUES (238, 48, '编辑静态数据详情', 'admin', 'teleport:edit', 'A', 1, NULL, NULL, '静的データの詳細を編集する', 0, 122, 0);
INSERT INTO `admin_actions` VALUES (239, 48, '删除静态数据详情', 'admin', 'teleport:delete', 'A', 1, NULL, NULL, '静的データの詳細を削除', 0, 122, 0);
INSERT INTO `admin_actions` VALUES (240, 32, '添加公告', 'operation', 'noticeList:add', 'A', 1, NULL, NULL, 'イネーブルメント通知', 0, 225, 0);
INSERT INTO `admin_actions` VALUES (241, 32, '附件信件', 'operation', 'sysMailList:base', 'A', 1, NULL, NULL, '付属しない文字の追加', 0, 127, 0);
INSERT INTO `admin_actions` VALUES (242, 32, '编辑无附件信件', 'operation', 'sysMailList:editBase', 'A', 1, NULL, NULL, '添付されていない手紙の編集', 0, 127, 0);
INSERT INTO `admin_actions` VALUES (243, 32, '发送公告', 'operation', 'noticeList:send', 'A', 1, NULL, NULL, 'お知らせの送信', 0, 225, 0);
INSERT INTO `admin_actions` VALUES (244, 23, '修改违禁名', 'player', 'changeName', 'A', 1, NULL, NULL, '名称の変更', 4, 244, 1);
INSERT INTO `admin_actions` VALUES (245, 48, '白名单', 'admin', 'getWhiteList', 'A', 1, NULL, NULL, 'ホワイトリスティング', 7, 245, 1);
INSERT INTO `admin_actions` VALUES (246, 48, '设置白名单', 'admin', 'getWhiteList:setWhite', 'A', 1, NULL, NULL, 'ホワイトリストの設定', 0, 245, 1);
INSERT INTO `admin_actions` VALUES (247, 48, '删除白名单用户', 'admin', 'getWhiteList:delete', 'A', 1, NULL, NULL, 'ホワイトリスト解除', 0, 245, 1);
INSERT INTO `admin_actions` VALUES (248, 2, '赛季管理', 'server', 'seasonList', 'A', 1, 'Manage Server Season', NULL, 'シーズン・マネジメント', 3, 248, 1);
INSERT INTO `admin_actions` VALUES (249, 2, '编辑赛季', 'server', 'seasonList:edit', 'A', 1, NULL, NULL, NULL, 0, 248, 1);
INSERT INTO `admin_actions` VALUES (250, 2, '新增赛季', 'server', 'seasonList:add', 'A', 1, NULL, NULL, NULL, 0, 248, 1);
INSERT INTO `admin_actions` VALUES (251, 2, '删除赛季', 'server', 'seasonList:delete', 'A', 1, NULL, NULL, NULL, 0, 248, 1);
INSERT INTO `admin_actions` VALUES (252, 2, '服务器组管理', 'server', 'groupList', 'A', 1, 'Manage Server Group', NULL, 'サーバーグループ管理', 4, 252, 1);
INSERT INTO `admin_actions` VALUES (253, 2, '新增服务器组', 'server', 'groupList:add', 'A', 1, NULL, NULL, NULL, 0, 252, 1);
INSERT INTO `admin_actions` VALUES (254, 2, '删除服务器组', 'server', 'groupList:delete', 'A', 1, NULL, NULL, NULL, 0, 252, 1);
INSERT INTO `admin_actions` VALUES (255, 23, '聊天记录查询', 'player', 'chatList', 'A', 1, NULL, NULL, 'チャット記録 お問い合わせ', 6, 255, 0);
INSERT INTO `admin_actions` VALUES (256, 23, '用户年龄', 'player', 'getAge', 'A', 1, NULL, NULL, 'ユーザー年齢 ', 5, 256, 0);
INSERT INTO `admin_actions` VALUES (257, 23, '设置用户年龄', 'player', 'setAge', 'A', 1, NULL, NULL, 'ユーザーの年齢設定', 0, 256, 0);
INSERT INTO `admin_actions` VALUES (258, 2, '服务器状态管理', 'server', 'serverStatusList', 'A', 1, NULL, NULL, 'サーバーステータス管理', 6, 258, 0);
INSERT INTO `admin_actions` VALUES (259, 2, '服务器状态编辑', 'server', 'editServerStatus', 'A', 1, NULL, NULL, NULL, 0, 258, 0);
INSERT INTO `admin_actions` VALUES (264, 32, '补发公告', 'operation', 'noticeList:resend', 'A', 1, NULL, NULL, NULL, 0, 225, 0);
INSERT INTO `admin_actions` VALUES (265, 2, '编辑服务器组', 'server', 'groupList:edit', 'A', 1, NULL, NULL, NULL, 0, 252, 1);
INSERT INTO `admin_actions` VALUES (266, 48, '添加用户', 'admin', 'user:add', 'A', 1, 'Add User', NULL, NULL, 0, 53, 0);
INSERT INTO `admin_actions` VALUES (267, 48, '启用控制器', 'admin', 'permitAction:enabled', 'A', 1, 'Enable Controller', NULL, NULL, 0, 56, 0);

SET FOREIGN_KEY_CHECKS = 1;
