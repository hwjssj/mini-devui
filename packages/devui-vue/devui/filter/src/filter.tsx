import { defineComponent, toRefs, ref, computed, watch, onMounted, onUnmounted } from 'vue';
import type { SetupContext, Ref } from 'vue';
import { filterProps } from './filter-types';
import type { FilterProps, FilterOption, FilterGroup } from './filter-types';
import './filter.scss';

export default defineComponent({
  name: 'DFilter',
  inheritAttrs: false,
  props: filterProps,
  emits: ['update:modelValue', 'change'],
  setup(props: FilterProps, ctx: SetupContext) {
    const {
      data = ref([]) as Ref<Array<FilterOption | FilterGroup>>,
      modelValue = ref([]) as Ref<Array<string | number>>,
      showSearch = ref(false) as Ref<boolean>,
      searchPlaceholder = ref('请输入搜索内容') as Ref<string>,
      max = ref(Infinity) as Ref<number>
    } = toRefs(props);

    // 面板状态管理
    const isPanelVisible = ref<boolean>(false);
    const triggerRef = ref<HTMLElement | null>(null);
    const panelRef = ref<HTMLElement | null>(null);

    // 判断是否有层级数据（Tab分类）
    const hasNestedData = computed<boolean>(() => {
      const dataVal = data.value ?? [];
      return dataVal.some((item): item is FilterGroup => 'children' in item);
    });

    // 激活的Tab
    const activeTab = ref<string>('');

    // 监听层级数据变化，初始化默认Tab
    watch(
      hasNestedData,
      (val: boolean) => {
        const dataVal = data.value ?? [];
        if (val && dataVal.length > 0) {
          const firstGroup = dataVal[0] as FilterGroup;
          activeTab.value = firstGroup.key;
        }
      },
      { immediate: true }
    );

    // 搜索关键词
    const searchValue = ref<string>('');

    // 扁平化所有选项（用于无层级筛选/搜索）
    const allOptions = computed<FilterOption[]>(() => {
      const options: FilterOption[] = [];
      const dataVal = data.value ?? [];

      dataVal.forEach(item => {
        if ('children' in item) {
          const group = item as FilterGroup;
          if (Array.isArray(group.children)) {
            options.push(...group.children);
          }
        } else {
          options.push(item as FilterOption);
        }
      });

      return options;
    });

    // 当前显示的选项（结合Tab/搜索）
    const currentOptions = computed<FilterOption[]>(() => {
      const dataVal = data.value ?? [];

      if (hasNestedData.value && activeTab.value) {
        const group = dataVal.find((item): item is FilterGroup => {
          return 'key' in item && item.key === activeTab.value;
        });

        if (group && Array.isArray(group.children)) {
          return group.children.filter(opt =>
            opt.label.toLowerCase().includes(searchValue.value.toLowerCase())
          );
        }
        return [];
      }

      return allOptions.value.filter(opt =>
        opt.label.toLowerCase().includes(searchValue.value.toLowerCase())
      );
    });

    // 判断选项是否选中
    const isSelected = (value: string | number): boolean => {
      const modelVal = modelValue.value ?? [];
      return modelVal.includes(value);
    };

    // 切换选项选中状态
    const toggleOption = (option: FilterOption): void => {
      if (option.disabled) return;

      const modelVal = modelValue.value ?? [];
      const newValue = [...modelVal];
      const idx = newValue.indexOf(option.value);

      if (idx > -1) {
        newValue.splice(idx, 1);
      } else if (newValue.length < (max.value ?? Infinity)) {
        newValue.push(option.value);
      }

      ctx.emit('update:modelValue', newValue);
      ctx.emit('change', newValue);
    };

    // 搜索回调
    const handleSearch = (val: string): void => {
      searchValue.value = val;
    };

    // Tab切换回调
    const handleTabChange = (key: string): void => {
      activeTab.value = key;
      searchValue.value = '';
    };

    // 切换面板显隐（移除面板宽度相关逻辑）
    const togglePanel = (): void => {
      isPanelVisible.value = !isPanelVisible.value;
    };

    // 点击外部关闭面板
    const handleClickOutside = (e: MouseEvent): void => {
      if (
        triggerRef.value && !triggerRef.value.contains(e.target as Node) &&
        panelRef.value && !panelRef.value.contains(e.target as Node)
      ) {
        isPanelVisible.value = false;
      }
    };

    // 生命周期：挂载（移除面板宽度初始化）
    onMounted(() => {
      document.addEventListener('click', handleClickOutside);
    });

    // 生命周期：卸载
    onUnmounted(() => {
      document.removeEventListener('click', handleClickOutside);
    });

    const svgProps = {
      width: '1em',
      height: '1em',
      viewBox: '0 0 16 16',
      version: '1.1',
      xmlns: 'http://www.w3.org/2000/svg',
      'xmlns:xlink': 'http://www.w3.org/1999/xlink',
    };

    // 渲染触发元素
    const renderTrigger = (): JSX.Element => {
      if (!ctx.slots.default) {
        console.warn('DFilter 组件必须通过默认插槽传入触发元素！');
        return <div>请传入触发元素</div>;
      }

      return (
        <div
          ref={triggerRef}
          class="dp-filter-trigger-wrap"
          onClick={togglePanel}
        >
          {ctx.slots.default()}
          <svg {...svgProps} class="dp-filter-arrow">
            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <path
                d={`M12.1464466,6.85355339 L8.35355339,10.6464466 C8.15829124,10.8417088
                7.84170876,10.8417088 7.64644661,10.6464466 L3.85355339,6.85355339 C3.65829124,6.65829124
                3.65829124,6.34170876 3.85355339,6.14644661 C3.94732158,6.05267842 4.07449854,6 4.20710678,6
                L11.7928932,6 C12.0690356,6 12.2928932,6.22385763 12.2928932,6.5 C12.2928932,6.63260824
                12.2402148,6.7597852 12.1464466,6.85355339 Z`}
                fill-rule="nonzero"
                fill="#000"
              ></path>
            </g>
          </svg>
        </div>
      );
    };

    const renderPanel = (): JSX.Element | null => {
      if (!isPanelVisible.value) return null;

      return (
        <div
          ref={panelRef}
          class="dp-filter-panel"
        >
          {/* 搜索框 */}
          {showSearch.value && (
            <div class="dp-filter-search">
              <d-search
                v-model={searchValue.value}
                placeholder={searchPlaceholder.value}
                onSearch={handleSearch}
              />
            </div>
          )}

          {/* Tab切换（层级筛选） */}
          {hasNestedData.value && (
            <div class="dp-filter-tabs">
              <d-tabs
                v-model={activeTab.value}
                type="slider"
                on-active-tab-change={handleTabChange}
              >
                {(data.value ?? []).map((item) => {
                  const group = item as FilterGroup;
                  return (
                    <d-tab
                      key={group.key}
                      id={group.key}
                      title={group.label}
                    />
                  );
                })}
              </d-tabs>
            </div>
          )}

          {/* 筛选选项列表 */}
          <div class="dp-filter-options">
            {currentOptions.value.map((option) => (
              <div
                key={option.value}
                class={{
                  'dp-filter-option': true,
                  'selected': isSelected(option.value),
                  'disabled': option.disabled
                }}
                onClick={() => toggleOption(option)}
              >
                {option.label}
              </div>
            ))}
          </div>
        </div>
      );
    };

    // 根渲染
    return (): JSX.Element => (
      <div class="dp-filter">
        {renderTrigger()}
        {renderPanel()}
      </div>
    );
  },
});