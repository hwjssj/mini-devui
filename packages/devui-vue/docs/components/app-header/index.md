# AppHeader 顶部导航

控制台顶栏：布局、色值与阴影对齐 Figma 导出（40px 高、`0 1px 6px rgba(0,0,0,.08)` 阴影）。导航与工具区图标使用组件内 **内联 SVG**（`presetIcon` / `presetAction`），与设计稿色值一致（主文 `#252B3A`，品牌蓝 `#5E7CE0`，弱图标 `#BABBC0` 等）。交互仍使用本库的 `Button`、`Dropdown`、`Avatar`、`Badge` 等封装。

两个示例在「设计稿参考」中展示 **两张 PNG 截图**，文件位于 **`docs/public/assets/`**：`app-header-reference-full.png`（完整顶栏）、`app-header-reference-simple.png`（简版顶栏），对应站点路径 **`/assets/…`**。更新图片时替换同路径文件即可。详见 `docs/public/assets/README.md`。

### 设计稿对照（示例高保真）

以下为完整顶栏示例：`meta-items`（区域）、`nav-items`（`presetIcon`）、`action-items`（铃铛、历史、语言）、头像。源码见 `docs/components/app-header/basic.vue`。写法与 Button 文档一致：`:::demo` 后单独换行再写 `app-header/basic`（勿在同一行写长说明，否则 demoblock 可能解析不到路径、演示区为空）。

:::demo

app-header/basic

:::

### 简版顶栏（双导航）

导航仅「首页」「工作台」，其余配置与完整示例相同；**白底**展示（`simple.vue`），对应原第二则示例，已去掉黑底。

:::demo

app-header/simple

:::

### 自定义区域

可通过 `brand`、`console`、`nav`、`actions`、`user` 插槽替换对应区域；未使用插槽时由 `meta-items`、`nav-items`、`action-items` 等属性渲染。

### AppHeader 参数

| 参数名 | 类型 | 默认 | 说明 |
| :-- | :-- | :-- | :-- |
| brand-text | `string` | `'华为云'` | 左侧品牌文案 |
| console-text | `string` | `'控制台'` | 品牌区竖线后的「控制台」文案 |
| show-huawei-logo | `boolean` | `true` | 是否展示华为标识 SVG |
| show-menu-trigger | `boolean` | `true` | 是否显示左侧菜单按钮 |
| dropdown-trigger | `'click' \| 'hover' \| 'manually'` | `'hover'` | 下拉触发方式 |
| meta-items | `AppHeaderMetaItem[]` | `[]` | 左侧元信息（如区域）；`variant: 'region'` 为定位样式 |
| nav-items | `AppHeaderNavItem[]` | `[]` | 中间导航；`presetIcon` 使用内联图标 |
| active-nav-key | `string \| number` | `undefined` | 当前导航项 key（可选） |
| action-items | `AppHeaderActionItem[]` | `[]` | 右侧操作；`presetAction` / `kind: 'lang'` |
| user-options | `AppHeaderMenuOption[]` | `[]` | 头像下拉菜单 |
| avatar-name | `string` | `'HZ'` | 头像展示名 |
| height | `number` | `40` | 顶栏高度（px） |

### AppHeader 事件

| 事件名 | 说明 |
| :-- | :-- |
| menu-click | 点击左侧菜单 |
| console-click | 点击「控制台」 |
| meta-select | 选择 meta 项或其下拉项 |
| nav-select | 点击导航项或其下拉项 |
| action-click | 点击右侧图标操作 |
| lang-click | 点击语言（如 EN） |
| avatar-click | 点击头像 |
| user-select | 选择头像下拉项 |

### 预设图标 key

**导航 `presetIcon`**：`home` · `workbench` · `insight` · `services` · `mirror`

**操作 `presetAction`**：`bell` · `history`

### 类型

```ts
interface AppHeaderMetaItem {
  key: string | number;
  label: string;
  variant?: 'default' | 'region';
  options?: AppHeaderMenuOption[];
}

interface AppHeaderNavItem {
  key: string | number;
  label: string;
  presetIcon?: 'home' | 'workbench' | 'insight' | 'services' | 'mirror';
  icon?: string;
  active?: boolean;
  options?: AppHeaderMenuOption[];
}

interface AppHeaderActionItem {
  key: string | number;
  kind?: 'icon' | 'lang';
  label?: string;
  presetAction?: 'bell' | 'history';
  icon?: string;
  dot?: boolean;
  count?: number | string;
}
```
