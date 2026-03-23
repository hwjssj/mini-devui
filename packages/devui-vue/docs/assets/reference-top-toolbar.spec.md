# Top toolbar (design reference from Figma export)

Extracted from the shared SVG frame (`width="1932" height="52"`).

## Layout

- **Content strip**: `1920 × 40`, **white** `#FFFFFF`, positioned with `translate(6, 5)` inside the artboard (6px inset from left/top in the export).
- **Artboard**: `1932 × 52` (includes shadow padding).

## Shadow

- `feOffset` **dy = 1**
- `feGaussianBlur` **stdDeviation = 3**
- Shadow opacity **~8%** (`feColorMatrix` alpha column ends with `0.08`).

## Colors (from paths)

- **Primary text / icons**: `#252B3A`
- **Brand / accent** (e.g. home, actions): `#5E7CE0` (with semi-transparent overlays using the same hue in gradients)
- **Muted chrome** (bell, language, etc.): `#BABBC0`
- **Vertical divider**: stroke `#DFE1E6`

## Avatar chip (right)

- **Circle**: `28 × 28`, `rx = 14`, fill `#5E7CE0`, initials in **white**.

## 设计稿截图（文档示例）

文档中 **设计稿参考** 使用 **PNG**，放在 **`docs/public/assets/`**（VitePress 下以 **`/assets/<文件名>`** 访问）：

| 文件 | 用途 |
|------|------|
| `app-header-reference-full.png` | 完整顶栏 demo（`basic.vue`） |
| `app-header-reference-simple.png` | 简版顶栏 demo（`simple.vue`） |

源码亦保留 `docs/assets/huawei-console-header-reference.png` 可作备份；线上展示以 `public/assets` 下 PNG 为准。

本目录下的 `reference-top-toolbar-mini.svg` 等为结构说明，与截图并存。

## Note

The full pixel SVG from design is large; keep the export in this folder as `reference-top-toolbar.full.svg` if you need 1:1 asset parity.
