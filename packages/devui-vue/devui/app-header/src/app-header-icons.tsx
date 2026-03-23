/**
 * 华为云控制台顶栏设计稿配套图标（内联 SVG，与 Figma 导出色值对齐）
 */
import type { FunctionalComponent } from 'vue';

const svgWrap = (viewBox: string, size: number, children: JSX.Element) => (
  <svg
    width={size}
    height={size}
    viewBox={viewBox}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    focusable="false">
    {children}
  </svg>
);

/**
 * 华为标识（八瓣花）
 * 路径来自 Simple Icons「Huawei」图标（CC0，viewBox 0 0 24 24），单填色与控制台顶栏常见红标一致。
 * 若需与法务/品牌稿完全一致，可换为设计导出的官方 SVG path。
 */
export const AhHuaweiMark: FunctionalComponent<{ size?: number }> = (props) => {
  const s = props.size ?? 24;
  return svgWrap(
    '0 0 24 24',
    s,
    <path
      fill="#E60012"
      d="M3.67 6.14S1.82 7.91 1.72 9.78v.35c.08 1.51 1.22 2.4 1.22 2.4 1.83 1.79 6.26 4.04 7.3 4.55 0 0 .06.03.1-.01l.02-.04v-.04C7.52 10.8 3.67 6.14 3.67 6.14zM9.65 18.6c-.02-.08-.1-.08-.1-.08l-7.38.26c.8 1.43 2.15 2.53 3.56 2.2.96-.25 3.16-1.78 3.88-2.3.06-.05.04-.09.04-.09zm.08-.78C6.49 15.63.21 12.28.21 12.28c-.15.46-.2.9-.21 1.3v.07c0 1.07.4 1.82.4 1.82.8 1.69 2.34 2.2 2.34 2.2.7.3 1.4.31 1.4.31.12.02 4.4 0 5.54 0 .05 0 .08-.05.08-.05v-.06c0-.03-.03-.05-.03-.05zM9.06 3.19a3.42 3.42 0 00-2.57 3.15v.41c.03.6.16 1.05.16 1.05.66 2.9 3.86 7.65 4.55 8.65.05.05.1.03.1.03a.1.1 0 00.06-.1c1.06-10.6-1.11-13.42-1.11-13.42-.32.02-1.19.23-1.19.23zm8.299 2.27s-.49-1.8-2.44-2.28c0 0-.57-.14-1.17-.22 0 0-2.18 2.81-1.12 13.43.01.07.06.08.06.08.07.03.1-.03.1-.03.72-1.03 3.9-5.76 4.55-8.64 0 0 .36-1.4.02-2.34zm-2.92 13.07s-.07 0-.09.05c0 0-.01.07.03.1.7.51 2.85 2 3.88 2.3 0 0 .16.05.43.06h.14c.69-.02 1.9-.37 3-2.26l-7.4-.25zm7.83-8.41c.14-2.06-1.94-3.97-1.94-3.98 0 0-3.85 4.66-6.67 10.8 0 0-.03.08.02.13l.04.01h.06c1.06-.53 5.46-2.77 7.28-4.54 0 0 1.15-.93 1.21-2.42zm1.52 2.14s-6.28 3.37-9.52 5.55c0 0-.05.04-.03.11 0 0 .03.06.07.06 1.16 0 5.56 0 5.67-.02 0 0 .57-.02 1.27-.29 0 0 1.56-.5 2.37-2.27 0 0 .73-1.45.17-3.14z"
    />
  );
};

export const AhPin: FunctionalComponent<{ size?: number; color?: string }> = (props) => {
  const s = props.size ?? 14;
  const c = props.color ?? '#252B3A';
  return svgWrap(
    '0 0 16 16',
    s,
    <path
      d="M8 1.2a4.2 4.2 0 0 0-4.2 4.2c0 3.2 4.2 7.8 4.2 7.8s4.2-4.6 4.2-7.8A4.2 4.2 0 0 0 8 1.2zm0 5.7a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"
      fill={c}
    />
  );
};

export const AhHome: FunctionalComponent<{ size?: number }> = (props) => {
  const s = props.size ?? 14;
  return svgWrap(
    '0 0 16 16',
    s,
    <path
      d="M2.5 7.2 8 2.5l5.5 4.7v6.3a.8.8 0 0 1-.8.8H9.8v-4H6.2v4H3.3a.8.8 0 0 1-.8-.8V7.2z"
      fill="#5E7CE0"
    />
  );
};

export const AhWorkbench: FunctionalComponent<{ size?: number }> = (props) => {
  const s = props.size ?? 14;
  return svgWrap(
    '0 0 16 16',
    s,
    <path
      d="M3 4.5h4v7H3v-7zm6 2h4v5H9v-5zm-6 8.5h10v1H3v-1z"
      fill="#5E7CE0"
    />
  );
};

export const AhInsight: FunctionalComponent<{ size?: number }> = (props) => {
  const s = props.size ?? 14;
  return svgWrap(
    '0 0 16 16',
    s,
    <>
      <path
        d="M8 14A6 6 0 1 1 8 2a6 6 0 0 1 0 12zm0-1A5 5 0 1 0 8 3a5 5 0 0 0 0 10z"
        fill="#5E7CE0"
      />
      <path d="M8 4.5v3.5l2.5 1.4" stroke="#5E7CE0" strokeWidth="1.2" strokeLinecap="round" fill="none" />
    </>
  );
};

export const AhServices: FunctionalComponent<{ size?: number }> = (props) => {
  const s = props.size ?? 14;
  return svgWrap(
    '0 0 16 16',
    s,
    <>
      <path d="M2.5 3.5h4v4h-4v-4zm7 0h4v4h-4v-4zm-7 6h4v4h-4v-4zm7 0h4v4h-4v-4z" fill="#5E7CE0" />
    </>
  );
};

/** 开源镜像站（红白几何） */
export const AhMirror: FunctionalComponent<{ size?: number }> = (props) => {
  const s = props.size ?? 14;
  return svgWrap(
    '0 0 16 16',
    s,
    <>
      <rect x="2" y="2" width="12" height="12" rx="2" fill="#fff" stroke="#E6211A" strokeWidth="1.2" />
      <path d="M5 5h6v6H5z" fill="#E6211A" opacity="0.35" />
      <circle cx="8" cy="8" r="2" fill="#E6211A" />
    </>
  );
};

export const AhBell: FunctionalComponent<{ size?: number }> = (props) => {
  const s = props.size ?? 16;
  return svgWrap(
    '0 0 16 16',
    s,
    <>
      <path
        d="M8 2.5a3 3 0 0 0-3 3v2L3.8 11h8.4L11 7.5v-2a3 3 0 0 0-3-3z"
        stroke="#BABBC0"
        strokeWidth="1.2"
        fill="none"
        strokeLinejoin="round"
      />
      <path d="M6 12.5h4a2 2 0 0 1-4 0z" fill="#BABBC0" />
    </>
  );
};

export const AhHistory: FunctionalComponent<{ size?: number }> = (props) => {
  const s = props.size ?? 16;
  return svgWrap(
    '0 0 16 16',
    s,
    <>
      <circle cx="8" cy="8" r="5.5" stroke="#BABBC0" strokeWidth="1.2" fill="none" />
      <path d="M8 4.8V8l2.4 1.4" stroke="#BABBC0" strokeWidth="1.2" strokeLinecap="round" fill="none" />
      <path d="M4.5 4.5 3 3" stroke="#BABBC0" strokeWidth="1.2" strokeLinecap="round" />
    </>
  );
};

export const AhChevronDown: FunctionalComponent<{ size?: number; color?: string }> = (props) => {
  const s = props.size ?? 12;
  const c = props.color ?? '#8A8E99';
  return svgWrap(
    '0 0 12 12',
    s,
    <path d="M2.5 4.5 6 8l3.5-3.5" stroke={c} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
  );
};

export const PRESET_NAV_ICONS: Record<string, FunctionalComponent<{ size?: number }>> = {
  home: AhHome,
  workbench: AhWorkbench,
  insight: AhInsight,
  services: AhServices,
  mirror: AhMirror,
};

export const PRESET_ACTION_ICONS: Record<string, FunctionalComponent<{ size?: number }>> = {
  bell: AhBell,
  history: AhHistory,
};
