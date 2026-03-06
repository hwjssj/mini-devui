# Filter 筛选器

用于快速实现自定义筛选功能，支持无层级 / 层级筛选、搜索筛选，适配不同业务场景的筛选需求。


### 基础无层级筛选

适用于简单的单列表筛选场景，无 Tab 分类，直接展示所有筛选选项。

:::demo

```vue
<template>
  <d-filter
    v-model="selectedValues"
    :data="simpleFilterData"
  >
   <div>基础筛选</div>
  </d-filter>
</template>

<script>
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const selectedValues = ref([]);
    
    // 无层级筛选数据（直接传入选项列表）
    const simpleFilterData = ref([
      { label: '项目一', value: 'program1' },
      { label: '项目二', value: 'program2' },
      { label: '项目三', value: 'program3' },
      { label: '项目四', value: 'program4', disabled: true },
    ]);

    return {
      selectedValues,
      simpleFilterData,
    };
  },
});
</script>
```
:::

### 层级分类筛选

适用于多分类的筛选场景，按 Tab 分组展示不同类别的筛选选项。

:::demo

```vue
<template>
  <d-filter
    v-model="selectedValues"
    :data="categoryFilterData"
  >
     <div> 分类筛选 </div>
  </d-filter>
</template>

<script>
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const selectedValues = ref([]);
    
    // 层级分类筛选数据（带Tab子节点）
    const categoryFilterData = ref([
      {
        label: '项目分类', // Tab标签
        key: 'project',   // Tab唯一标识
        children: [       // 该分类下的筛选选项
          { label: '项目一', value: 'project-1' },
          { label: '项目二', value: 'project-2' },
          { label: '项目三', value: 'project-3' },
        ],
      },
      {
        label: '状态分类',
        key: 'status',
        children: [
          { label: '已上线', value: 'online' },
          { label: '测试中', value: 'testing' },
          { label: '开发中', value: 'developing' },
        ],
      },
    ]);

    return {
      selectedValues,
      categoryFilterData,
    };
  },
});
</script>
```

:::

### 带搜索框的筛选

适用于选项较多的场景，支持输入关键词快速筛选选项，可结合层级分类使用。

:::demo

```vue
<template>
  <d-filter
    v-model="selectedValues"
    :data="searchFilterData"
    show-search
    search-placeholder="请输入选项名称搜索"
  >
      <div>带搜索筛选</div>
  </d-filter>
</template>

<script>
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const selectedValues = ref([]);
    
    // 带搜索的层级筛选数据
    const searchFilterData = ref([
      {
        label: '默认',
        key: 'default',
        children: [
          { label: '默认文本一', value: 'default1' },
          { label: '默认文本二', value: 'default2' },
          { label: '默认文本三', value: 'default3' },
        ],
      },
      {
        label: '我创建',
        key: 'create',
        children: [
          { label: '创建文本一', value: 'create1' },
          { label: '创建文本二', value: 'create2' },
          { label: '创建文本三', value: 'create3' },
        ],
      },      
      {
        label: '他人分享',
        key: 'share‘',
        children: [
          { label: '分享文本一', value: 'share1' },
          { label: '分享文本二', value: 'share2' },
          { label: '分享文本三', value: 'share3' },
        ],
      },
    ]);

    return {
      selectedValues,
      searchFilterData,
    };
  },
});
</script>
```                             

:::

### Filter 参数

| 参数名               | 类型                             | 默认值         | 说明                                  |
| -------------------- | -------------------------------- | -------------- | ------------------------------------- |
| v-model / modelValue | Array<string \| number>          | []             | 必选，选中的筛选值（双向绑定）        |
| data                 | Array<FilterItem \| FilterGroup> | --             | 必选，筛选数据源（支持无层级 / 层级） |
| show-search          | boolean                          | false          | 可选，是否显示搜索框                  |
| search-placeholder   | string                           | 请输入搜索内容 | 可选，搜索框占位符文本                |
| max                  | number                           | Infinity       | 可选，最大选中选项数量                |

### Filter 事件

| 事件名            | 回调参数                          | 说明             |
| ----------------- | --------------------------------- | ---------------- |
| change            | (values: Array<string \| number>) | 选中值变化时触发 |
| update:modelValue | (values: Array<string \| number>) | 双向绑定更新事件 |
| search            | (keyword: string)                 | 搜索框输入时触发 |


### FilterItem（基础选项类型）

```typescript
interface FilterItem {
  label: string;                // 选项显示文本
  value: string | number;       // 选项值
  disabled?: boolean;           // 是否禁用该选项
  [k: string]: any;             // 自定义扩展字段
}
```
### FilterGroup（分类组类型）

```typescript
interface FilterGroup {
  label: string;                // 分类Tab标签文本
  key: string;                  // 分类唯一标识
  children: FilterItem[];       // 该分类下的选项列表
}
```


