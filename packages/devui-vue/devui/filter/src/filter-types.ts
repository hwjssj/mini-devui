import type { ExtractPropTypes, PropType } from 'vue';

// 子选项类型
export interface FilterOption {
  label: string;
  value: string | number;
  disabled?: boolean;
}

// 父分组类型
export interface FilterGroup {
  label: string;
  key: string;
  children: FilterOption[];
}

// 组件Props定义
export const filterProps = {
  data: {
    type: Array as PropType<Array<FilterOption | FilterGroup>>,
    required: true,
  },
  modelValue: {
    type: Array as PropType<Array<string | number>>,
    default: () => [],
  },
  showSearch: {
    type: Boolean,
    default: false,
  },
  searchPlaceholder: {
    type: String,
    default: '请输入搜索内容',
  },
  max: {
    type: Number,
    default: Infinity,
  },
};
export type FilterProps = ExtractPropTypes<typeof filterProps>;