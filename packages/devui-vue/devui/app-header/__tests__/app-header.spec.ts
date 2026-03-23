import { mount } from '@vue/test-utils';
import AppHeader from '../src/app-header';
import { useNamespace } from '../../shared/hooks/use-namespace';

const ns = useNamespace('app-header', true);

describe('app-header', () => {
  it('should render nav, console and actions', () => {
    const wrapper = mount(AppHeader, {
      props: {
        metaItems: [{ key: 'region', label: '华北-北京四', variant: 'region', options: [{ key: 'a', label: 'A' }] }],
        navItems: [
          { key: 'home', label: '首页', presetIcon: 'home' },
          { key: 'workbench', label: '工作台', presetIcon: 'workbench' },
        ],
        actionItems: [
          { key: 'notice', presetAction: 'bell' },
          { key: 'history', presetAction: 'history' },
          { key: 'lang', kind: 'lang', label: 'EN' },
        ],
      },
    });

    expect(wrapper.find(ns.b()).exists()).toBe(true);
    expect(wrapper.find(ns.e('console')).exists()).toBe(true);
    expect(wrapper.findAll(ns.e('nav-item')).length).toBe(2);
    expect(wrapper.findAll(ns.e('action-item')).length).toBe(3);
  });

  it('should emit menu-click, console-click and nav-select', async () => {
    const wrapper = mount(AppHeader, {
      props: {
        navItems: [{ key: 'home', label: '首页', presetIcon: 'home' }],
      },
    });

    await wrapper.find(ns.e('menu-trigger')).trigger('click');
    expect(wrapper.emitted('menu-click')).toBeTruthy();

    await wrapper.find(ns.e('console')).trigger('click');
    expect(wrapper.emitted('console-click')).toBeTruthy();

    await wrapper.find(ns.e('nav-trigger')).trigger('click');
    expect(wrapper.emitted('nav-select')).toBeTruthy();
  });
});
