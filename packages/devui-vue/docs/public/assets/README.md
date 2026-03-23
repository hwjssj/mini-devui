# AppHeader 设计稿（VitePress 静态资源）

此处文件映射为站点路径 **`/assets/<文件名>`**（`docs` 为 VitePress 根目录时，`public` 即本目录的父级 `docs/public`）。

| 文件 | 说明 |
|------|------|
| `app-header-reference-full.png` | 完整顶栏示例对应的设计稿截图 |
| `app-header-reference-simple.png` | 简版（双导航）示例对应的设计稿截图 |

替换图片时保持文件名不变，或同步修改 `docs/components/app-header/basic.vue`、`simple.vue` 里 `<img src="/assets/...">`。

历史 SVG 占位：`reference-top-toolbar-*.svg` 可删除，当前示例已改用 PNG。
