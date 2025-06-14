import { useApi } from "~/composables/useApi"
import { defineStore } from 'pinia'

export const useStaticStore = defineStore('static', {
    // state: () => ({
    //     sys_item: [] as any[],
    //     sys_hero: [] as any[],
    //     sys_skill: [] as any[],
    //     sys_faction: [] as any[],
    //     sys_equip: [] as any[],
    //     sys_hero_career: [] as any[],
    //     sys_league_rank: [] as any[],
    //     sys_effect_fight: [] as any[],
    //     sys_effect_tag: [] as any[],
    //     sys_action_dict: [] as any[],
    //     sys_coin: [] as any[],
    //     sys_profile: [] as any[],
    //     sys_emoji: [] as any[],
    // }),
    // getters: {
    //     getSysItems: (state) => state.sys_item,
    //     getSysHeros: (state) => state.sys_hero,
    //     getSysSkills: (state) => state.sys_skill,
    //     getSysFactions: (state) => state.sys_faction,
    //     getSysEquips: (state) => state.sys_equip,
    //     getSysHeroCareers: (state) => state.sys_hero_career,
    //     getSysLeagueRanks: (state) => state.sys_league_rank,
    //     getSysEffectFights: (state) => state.sys_effect_fight,
    //     getSysEffectTags: (state) => state.sys_effect_tag,
    //     getSysActionDict: (state) => state.sys_action_dict,
    //     getSysCoins: (state) => state.sys_coin,
    //     getSysProfiles: (state) => state.sys_profile,
    //     getSysEmojis: (state) => state.sys_emoji,
    // },
    // actions: {
    //     async fetchSysInfo(tableName: string) {
    //         const { getInfo } = useApi();
    //         const data = await getInfo("centre/getStaticInfo", { TableName: `${tableName}` });
    //         if (data) {
    //             (this as any)[`${tableName}`] = data; // 动态设置状态属性 
    //         }
    //         return data;
    //     },
    //     async fetchAllSysInfo() {
    //         const { getInfo } = useApi();
    //         const tables = ['sys_item', 'sys_hero', 'sys_skill', 'sys_faction', 'sys_equip', 'sys_hero_career', 'sys_league_rank', 'sys_effect_fight', 'sys_effect_tag', 'sys_action_dict', 'sys_coin', 'sys_profile', 'sys_emoji'];
    //         for (const table of tables) {
    //             const data = await getInfo("centre/getStaticInfo", { TableName: `centre_${table}` });
    //             if (data) {
    //                 (this as any)[`${table}`] = data; // 动态设置状态属性 
    //             }
    //         }
    //     },
    //     async getCacheSysInfo(tableName: string) {
    //         return (this.$state as any)[tableName];
    //     }
    // },
    // persist: true // 启用持久化
})