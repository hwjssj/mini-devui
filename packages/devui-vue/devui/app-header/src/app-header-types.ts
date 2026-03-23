import type { ExtractPropTypes, PropType } from 'vue';
import type { TriggerType } from '../../dropdown/src/dropdown-types';

export interface AppHeaderMenuOption {
  key: string | number;
  label: string;
  icon?: string;
  disabled?: boolean;
}

export type AppHeaderMetaVariant = 'default' | 'region';

export interface AppHeaderMetaItem {
  key: string | number;
  label: string;
  options?: AppHeaderMenuOption[];
  /** region：定位图标 + 文案 + 下拉箭头（与稿一致） */
  variant?: AppHeaderMetaVariant;
}

export type AppHeaderNavPresetIcon = 'home' | 'workbench' | 'insight' | 'services' | 'mirror';

export interface AppHeaderNavItem {
  key: string | number;
  label: string;
  /** 使用设计稿内联 SVG（与稿一致色值） */
  presetIcon?: AppHeaderNavPresetIcon;
  /** `d-icon` 图标名，与 presetIcon 二选一 */
  icon?: string;
  active?: boolean;
  options?: AppHeaderMenuOption[];
}

export type AppHeaderActionPreset = 'bell' | 'history';

export type AppHeaderActionKind = 'icon' | 'lang';

export interface AppHeaderActionItem {
  key: string | number;
  kind?: AppHeaderActionKind;
  /** kind=lang 时展示，如 EN */
  label?: string;
  presetAction?: AppHeaderActionPreset;
  icon?: string;
  dot?: boolean;
  count?: number | string;
}

export const appHeaderProps = {
  brandText: {
    type: String,
    default: '华为云',
  },
  /** 品牌区后的「控制台」文案（稿中位于首条竖线之后） */
  consoleText: {
    type: String,
    default: '控制台',
  },
  /** 是否展示华为标识 SVG */
  showHuaweiLogo: {
    type: Boolean,
    default: true,
  },
  showMenuTrigger: {
    type: Boolean,
    default: true,
  },
  dropdownTrigger: {
    type: String as PropType<TriggerType>,
    default: 'hover',
  },
  metaItems: {
    type: Array as PropType<AppHeaderMetaItem[]>,
    default: () => [],
  },
  navItems: {
    type: Array as PropType<AppHeaderNavItem[]>,
    default: () => [],
  },
  activeNavKey: {
    type: [String, Number] as PropType<string | number | undefined>,
    default: undefined,
  },
  actionItems: {
    type: Array as PropType<AppHeaderActionItem[]>,
    default: () => [],
  },
  userOptions: {
    type: Array as PropType<AppHeaderMenuOption[]>,
    default: () => [],
  },
  avatarName: {
    type: String,
    default: 'HZ',
  },
  height: {
    type: Number,
    default: 40,
  },
};

export type AppHeaderProps = ExtractPropTypes<typeof appHeaderProps>;
