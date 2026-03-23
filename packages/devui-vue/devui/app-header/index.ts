import type { App } from 'vue';
import AppHeader from './src/app-header';

export * from './src/app-header-types';

export { AppHeader };

export default {
  title: 'AppHeader 顶部导航',
  category: '导航',
  status: '100%',
  install(app: App): void {
    app.component(AppHeader.name, AppHeader);
  },
};
