import type { App } from 'vue';
import Filter from './src/filter';
export * from './src/filter-types';

export { Filter };

export default {
  title: 'Filter 筛选器',
  category: '演进中',
  status: '100%',
  install(app: App): void {
    app.component(Filter.name, Filter);
  },
};