import type { App } from 'vue';
import DBusiness from './src/business';

export { DBusiness };

export default {
  title: 'Business 业务组件',
  category: '演进中',
  status: '100%',
  install(app: App): void {
    app.component(DBusiness.name, DBusiness);
  },
};