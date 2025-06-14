import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { PrismaClient as CnMedClient } from 'prisma/cn-med-client';

@Injectable()
@Injectable()
export class PrismaService implements OnModuleInit, OnModuleDestroy {
  public backstage: CnMedClient;

  constructor() {
    // 初始化两个 Prisma 客户端
    this.backstage = new CnMedClient();
  }

  async onModuleInit() {
    // 连接两个客户端
    await this.backstage.$connect();
  }

  async onModuleDestroy() {
    // 断开两个客户端的连接
    await this.backstage.$disconnect();
  }

  // 检查表是否存在
  async tableExists(schemaName: string, tableName: string): Promise<boolean> {
    const result = await this[schemaName].$queryRawUnsafe(`
    SELECT TABLE_NAME
    FROM information_schema.tables
    WHERE TABLE_SCHEMA = DATABASE() AND TABLE_NAME = '${tableName}'`);
    return result.length > 0;
  }

  // 动态创建表
  async createTableIfNotExists(schemaName: string, tableName: string, desc: string, columns: any[] = []) {
    if (await this.tableExists(schemaName, tableName)) return;
    // 执行原生 SQL 创建表
    switch (tableName) {
      case 'centre_sys_item':
        await this[schemaName].$executeRawUnsafe(`
          CREATE TABLE \`${tableName}\` (
            \`ItemID\` INT(11) NOT NULL AUTO_INCREMENT,
            \`Name\` VARCHAR(255),
            \`JP_Name\` VARCHAR(255) DEFAULT '',
            \`IsReward\` BOOLEAN DEFAULT FALSE,
            PRIMARY KEY (\`ItemID\`) USING BTREE
          ) ENGINE=InnoDB AUTO_INCREMENT=0 DEFAULT CHARSET=utf8 COMMENT='${desc}';
        `);
        break;
      case 'centre_sys_equip':
        await this[schemaName].$executeRawUnsafe(`
          CREATE TABLE \`${tableName}\` (
            \`EquipID\` int(11) NOT NULL AUTO_INCREMENT COMMENT '家宝ID',
            \`Name\` varchar(32) DEFAULT '' COMMENT '名称',
            \`Quality\` smallint(4) DEFAULT '0' COMMENT '品质，3：A，4：S，5：SS',
            \`JP_Name\` varchar(100) DEFAULT '' COMMENT '日文名称',
            PRIMARY KEY (\`EquipID\`) USING BTREE
          ) ENGINE=InnoDB AUTO_INCREMENT=0 DEFAULT CHARSET=utf8mb4 COMMENT='${desc}';
        `)
        break;
      case 'centre_sys_hero':
        await this[schemaName].$executeRawUnsafe(`
            CREATE TABLE \`${tableName}\` (
            \`HeroID\` int(11) NOT NULL AUTO_INCREMENT,
            \`Name\` varchar(50) DEFAULT '' COMMENT '名称',
            \`Quality\` smallint(4) DEFAULT '1' COMMENT '品质',
            \`JP_Name\` varchar(50) DEFAULT '' COMMENT '日文名称',
            PRIMARY KEY (\`HeroID\`) USING BTREE
          ) ENGINE=InnoDB AUTO_INCREMENT=0 DEFAULT CHARSET=utf8mb4 COMMENT='${desc}';
          `)
        break;
      case 'centre_sys_skill':
        await this[schemaName].$executeRawUnsafe(`
          CREATE TABLE \`${tableName}\` (
            \`SkillID\` int(11) unsigned NOT NULL AUTO_INCREMENT COMMENT '技能ID',
            \`Name\` varchar(255) NOT NULL DEFAULT '' COMMENT '名字',
            \`Quality\` smallint(4) DEFAULT '1' COMMENT '品质',
            \`JP_Name\` varchar(255) DEFAULT '' COMMENT '日文翻译',
            PRIMARY KEY (\`SkillID\`) USING BTREE
          ) ENGINE=InnoDB AUTO_INCREMENT=0 DEFAULT CHARSET=utf8mb4 COMMENT='${desc}';
        `)
        break;
      case 'centre_sys_faction':
        await this[schemaName].$executeRawUnsafe(`
          CREATE TABLE \`${tableName}\` (
            \`FactionID\` int(11) NOT NULL AUTO_INCREMENT COMMENT '势力ID',
            \`Name\` varchar(255) DEFAULT '',
            \`JP_Name\` varchar(255) DEFAULT '' COMMENT '日文',
            PRIMARY KEY (\`FactionID\`) USING BTREE
          ) ENGINE=InnoDB AUTO_INCREMENT=0 DEFAULT CHARSET=utf8mb4 COMMENT='${desc}';
        `)
        break;
      case 'centre_sys_league_rank':
        await this[schemaName].$executeRawUnsafe(`
          CREATE TABLE \`${tableName}\` (
            \`RankID\` int(11) NOT NULL AUTO_INCREMENT COMMENT 'ID',
            \`Name\` varchar(255) DEFAULT '' COMMENT '官员职称',
            \`JP_Name\` varchar(255) DEFAULT '' COMMENT '日文翻译',
            PRIMARY KEY (\`RankID\`) USING BTREE
          ) ENGINE=InnoDB AUTO_INCREMENT=0 DEFAULT CHARSET=utf8mb4 COMMENT='${desc}';
        `)
        break;
      case 'centre_sys_effect_tag':
        await this[schemaName].$executeRawUnsafe(`
          CREATE TABLE \`${tableName}\` (
            \`EffectTagID\` int(11) unsigned NOT NULL AUTO_INCREMENT,
            \`Name\` varchar(255) DEFAULT '',
            \`JP_Name\` varchar(255) DEFAULT '' COMMENT '日译',
            \`CN_Desc\` text,
            \`JP_Desc\` text COMMENT '日译',
            PRIMARY KEY (\`EffectTagID\`) USING BTREE
          ) ENGINE=InnoDB AUTO_INCREMENT=0 DEFAULT CHARSET=utf8mb4 COMMENT='${desc}';
        `)
        break;
      case 'centre_sys_effect_fight':
        await this[schemaName].$executeRawUnsafe(`
          CREATE TABLE \`${tableName}\` (
            \`EffectFightID\` int(11) NOT NULL AUTO_INCREMENT,
            \`Name\` varchar(255) DEFAULT '',
            \`TagID\` int(11) DEFAULT '0' COMMENT '标签ID',
            \`TagParams\` varchar(255) DEFAULT '',
            \`Quality\` smallint(4) DEFAULT '0' COMMENT '品质，3：A，4：S，5：SS',
            PRIMARY KEY (\`EffectFightID\`) USING BTREE
          ) ENGINE=InnoDB AUTO_INCREMENT=0 DEFAULT CHARSET=utf8mb4 COMMENT='${desc}';
        `)
        break;
      case 'centre_sys_hero_career':
        await this[schemaName].$executeRawUnsafe(`
          CREATE TABLE \`${tableName}\` (
            \`ID\` int(11) NOT NULL AUTO_INCREMENT,
            \`Name\` varchar(50) DEFAULT '' COMMENT '名称',
            \`JP_Name\` varchar(50) DEFAULT '' COMMENT '日文名称',
            PRIMARY KEY (\`ID\`) USING BTREE
          ) ENGINE=InnoDB AUTO_INCREMENT=0 DEFAULT CHARSET=utf8mb4 COMMENT='${desc}';
        `)
        break;
      case 'centre_sys_profile':
        await this[schemaName].$executeRawUnsafe(`
          CREATE TABLE \`${tableName}\` (
            \`ID\` int(11) NOT NULL AUTO_INCREMENT,
            \`Type\` enum('Avatar','Frame') NOT NULL COMMENT 'Avatar:头像，Frame:头像框',
            \`Name\` varchar(100) DEFAULT '' COMMENT '名称',
            \`JP_Name\` varchar(100) DEFAULT NULL COMMENT '日文翻译',
            PRIMARY KEY (\`ID\`) USING BTREE
          ) ENGINE=InnoDB AUTO_INCREMENT=0 DEFAULT CHARSET=utf8mb4 COMMENT='${desc}';
        `)
        break;
      case 'centre_sys_emoji':
        await this[schemaName].$executeRawUnsafe(`
          CREATE TABLE \`${tableName}\` (
            \`ID\` int(11) NOT NULL AUTO_INCREMENT,
            \`Name\` varchar(100) DEFAULT '' COMMENT '名称',
            \`JP_Name\` varchar(100) DEFAULT NULL COMMENT '日文翻译',
            PRIMARY KEY (\`ID\`) USING BTREE
          ) ENGINE=InnoDB AUTO_INCREMENT=0 DEFAULT CHARSET=utf8mb4 COMMENT='${desc}';
        `)
        break;
      default:
        var columnString = ''
        for (let column of columns) {
          if (column.columnName === 'ID') continue;
          columnString += `\`${column.columnName}\` `;
          switch (column.columnType) {
            case 'Integer': {
              columnString += ` int(11) NOT NULL DEFAULT '0' `;
            }
              break;
            case 'String': {
              columnString += ` varchar(255) NOT NULL DEFAULT '' `;
            }
              break;
            case 'Boolean': {
              columnString += ` tinyint(1) DEFAULT '0' `;
            }
              break;
            case 'Date': {
              columnString += ` varchar(20) NOT NULL DEFAULT '' `;
            }
              break;
            case 'Double': {
              columnString += ` double(10,3) DEFAULT '0.000' `;
            }
              break;
          }
          columnString += ` COMMENT '${column.columnComment}',`;
        }
        await this[schemaName].$executeRawUnsafe(`
          CREATE TABLE \`${tableName}\` (
            \`ID\` int(11) NOT NULL AUTO_INCREMENT COMMENT '序号',
            ${columnString}
            PRIMARY KEY (\`ID\`) USING BTREE
          ) ENGINE=InnoDB AUTO_INCREMENT=0 DEFAULT CHARSET=utf8mb4 COMMENT='${desc}';
        `)
        break;
    }
  }

  // 动态添加更新多条数据
  async addOrUpdateAllData(schemaName: string, tableName: string, data: any) {
    // 检查表是否存在，如果不存在则创建
    await this.createTableIfNotExists(schemaName, tableName, '');
    // 构建 SQL 语句
    const columns = Object.keys(data[0]).join(', ');
    const placeholders = data.map(() => {
      const placeholderRow = Object.keys(data[0]).map(() => `?`).join(', ');
      return `(${placeholderRow})`;
    }).join(', ');
    const sql = `
      INSERT INTO ${tableName} (${columns})
      VALUES ${placeholders}
      ON DUPLICATE KEY UPDATE ${Object.keys(data[0]).map(column => `${column} = VALUES(${column})`).join(', ')}
    `;
    // 创建参数数组
    const allValues: any[] = [];
    data.forEach(obj => {
      Object.values(obj).forEach(value => {
        allValues.push(value);
      });
    });
    await this[schemaName].$executeRawUnsafe(sql, ...allValues);
  }

  async dropTableIfExists(schemaName: string, tableName: string) {
    if (await this.tableExists(schemaName, tableName)) {
      await this[schemaName].$executeRawUnsafe(`DROP TABLE IF EXISTS \`${tableName}\`;`);
    } else {
      console.log(`表 \`${tableName}\` 不存在，无需删除。`);
    }
  }
}
