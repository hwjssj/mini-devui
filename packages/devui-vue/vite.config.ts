import { resolve } from 'path';
import { defineConfig } from 'vite';
import vueJsx from '@vitejs/plugin-vue-jsx';
import vue from '@vitejs/plugin-vue';
import svgLoader from 'vite-svg-loader';

export default defineConfig({
  resolve: {
    alias: [
      { find: '@devui/theme', replacement: resolve(__dirname, '../devui-theme/src') },
      { find: '@devui/shared/components', replacement: resolve(__dirname, './devui') },
      { find: '@devui', replacement: resolve(__dirname, './devui') },
      { find: 'vue-devui', replacement: resolve(__dirname, './devui') },
    ],
  },
  plugins: [vue(), vueJsx({}), svgLoader()],
  optimizeDeps: {
    exclude: ['lodash-es', 'mitt', 'async-validator', 'css-vars-ponyfill', 'rxjs', '@vueuse/core', '@floating-ui/dom', 'vue-router'],
  },
  server: {
    // 监听所有网卡，便于通过局域网 IP（如 http://192.168.x.x:3010）访问
    host: true,
    open: '/site.html',
    fs: {
      strict: false,
    },
  },
});
