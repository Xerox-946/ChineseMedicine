import { useAuthStore } from '~/stores/auth'

export const useMenu = () => {
  const auth = useAuthStore();
  const paths = {} as { [key: string]: string };

  // 获取 t 函数，这应该在组件的 setup 函数中完成
  const getMenuWithI18n = (t: (key: string) => string) => {
    const getMenu = () => {
      const menuItems = [];
      const catalogs = auth.getCatalogs;
      for (const catalog of catalogs) {
        const children = [];
        paths[catalog.action] = `/${catalog.action}`;
        const path = paths[catalog.action];
        for (const item of catalog.children) {
          paths[item.action] = `${path}/${item.action}`;
          children.push({
            path: paths[item.action],
            meta: { title: item.action_name, permission: item.action },
          });
        }
        menuItems.push({
          path: path,
          meta: { title: catalog.action_name, permission: catalog.action },
          children
        });
      }
      return menuItems;
    }

    const getSearchMenu = (keyword: string, lan: string) => {
      // const { t } = useI18n(); // 获取 t 函数
      const searchItems = [];
      const catalogs = auth.getCatalogs;
      let id = 0;
      for (const catalog of catalogs) {
        const path = `/${catalog.action}`;
        for (const item of catalog.children) {
          let title;
          if (lan !== 'zh') {
            // 使用传入的 t 函数获取标题
            title = t(item.action_name); // 确保翻译键是正确的
          } else {
            title = item.action_name;
          }
          if (title.toLowerCase().includes(keyword.toLowerCase())) {
            searchItems.push({ id, title, path: `${path}/${item.action}` });
            id++;
          }
        }
      }
      return searchItems;
    }

    return { getMenu, getSearchMenu }
  };

return { getMenuWithI18n }; // 返回一个新的函数，它接受 t 函数作为参数
};
