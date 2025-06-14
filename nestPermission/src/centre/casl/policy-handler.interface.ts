import { AppAbility } from './casl-ability.factory';

/**
 * 权限策略处理器类型定义
 * @param ability 当前用户的能力对象（由CASL生成）
 * @returns boolean 是否允许访问
 */
export type PolicyHandler = (ability: AppAbility) => boolean;