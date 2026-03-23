<template>
  <div class="app-header-doc">
    <p class="app-header-doc__cap">设计稿参考</p>
    <img
      class="app-header-doc__ref"
      src="/assets/app-header-reference-simple.png"
      alt="简版顶栏设计稿参考"
    />
    <p class="app-header-doc__cap">组件还原</p>
    <d-app-header
      :meta-items="metaItems"
      :nav-items="navItems"
      :action-items="actionItems"
      avatar-name="HZ"
      @menu-click="onMenuClick"
      @console-click="onConsoleClick"
      @meta-select="onMetaSelect"
      @nav-select="onNavSelect"
      @action-click="onActionClick"
      @lang-click="onLangClick"
    />
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  setup() {
    const metaItems = [
      {
        key: 'region',
        label: '华北-北京四',
        variant: 'region',
        options: [
          { key: 'beijing4', label: '华北-北京四' },
          { key: 'shanghai1', label: '华东-上海一' },
        ],
      },
    ];
    const navItems = [
      { key: 'home', label: '首页', presetIcon: 'home' },
      { key: 'workbench', label: '工作台', presetIcon: 'workbench' },
    ];
    const actionItems = [
      { key: 'notice', presetAction: 'bell' },
      { key: 'history', presetAction: 'history' },
      { key: 'lang', kind: 'lang', label: 'EN' },
    ];

    const onMenuClick = () => console.log('menu click');
    const onConsoleClick = () => console.log('console click');
    const onMetaSelect = (payload) => console.log('meta select', payload);
    const onNavSelect = (payload) => console.log('nav select', payload);
    const onActionClick = (payload) => console.log('action click', payload);
    const onLangClick = (payload) => console.log('lang click', payload);

    return {
      metaItems,
      navItems,
      actionItems,
      onMenuClick,
      onConsoleClick,
      onMetaSelect,
      onNavSelect,
      onActionClick,
      onLangClick,
    };
  },
});
</script>

<style scoped>
.app-header-doc {
  padding: 12px;
  background: #f5f6f8;
}
.app-header-doc__cap {
  margin: 0 0 8px;
  font-size: 12px;
  color: #71757f;
}
.app-header-doc__ref {
  display: block;
  width: 100%;
  max-width: 1200px;
  height: auto;
  margin-bottom: 16px;
  border: 1px solid #e9ebef;
  border-radius: 4px;
  background: #fff;
}
</style>
