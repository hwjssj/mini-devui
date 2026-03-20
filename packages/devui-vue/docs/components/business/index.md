# Business 业务组件

### 业务组件(更多卡片)
:::demo
```vue
<template>
    <d-business>
        <div class="left">
            <div v-for="(item, index) in leftCardData" :key="index" class="left-menu-item"
                :class="{ 'active-card': activeIndex === index }" @click="activeIndex = index">
                <d-icon :name="item.icon"  size="16px"></d-icon>
                <div style="margin-left:8px">{{ item.text }}</div>
            </div>
        </div>
        <div class="main">
            <div class="main_head">
                <d-card class="main_head_card">
                    <template #content>
                        <div class="main_head_card_content">
                            <div class="main_card_content_img1"></div>
                            <div>Build持续演进个人项目规划说明</div>
                        </div>
                    </template>
                </d-card>
            </div>
            <div class="main_bottom">
                <div class="main_bottom_name">Hello Jingwen</div>
                <div class="main_bottom_access">最近访问</div>
                <div class="main_bottom_card">
                    <d-card class="main_bottom_card_content">
                        <template #content>
                            <div class="main_card_content">
                                <div class="main_card_content_img1"></div>
                                <div>Build持续演进个人项目规划说明</div>
                            </div>
                        </template>
                    </d-card>
                    <d-card class="main_bottom_card_content">
                        <template #content>
                            <div class="main_card_content">
                                <div class="main_card_content_img2"></div>
                                <div>DigitalCity智慧城市</div>
                            </div>
                        </template>
                    </d-card>
                    <d-card class="main_bottom_card_content">
                        <template #content>
                            <div class="main_card_content">
                                <div class="main_card_content_img3"></div>
                                <div>ROMA持续演进个人项目</div>
                            </div>
                        </template>
                    </d-card>
                </div>
            </div>
        </div>
        <div class="right">
            <div class="right_head">
                <d-carousel class="card-carousel" :autoplay="true">
                    <d-carousel-item v-for="(item, index) in announcementData" :key="index">
                        <d-card class="announcement-card" :bordered="false">
                            <div class="card-content">
                                <div class="card-title">公告</div>
                                <div class="card-body">{{ item.content }}</div>
                                <div class="card-time">2天前</div>
                            </div>
                        </d-card>
                    </d-carousel-item>
                </d-carousel>
            </div>
            <div class="right_center">
                <d-card>
                    <template #content>
                        <div class="right_card_content">
                            <div class="right_card_content_title">活动</div>
                            <div class="right_card_content_img"></div>
                        </div>
                    </template>
                </d-card>
            </div>
            <div class="right_bottom">
                <d-card>
                    <template #content>
                        <div class="right_bottom_top">
                            <div class="right_bottom_top_title">帮助文档</div>
                            <div class="right_bottom_top_all-docs">所有文档&nbsp;&nbsp;&gt;</div>
                        </div>

                        <div class="right_bottom_icon-grid">
                            <div class="right_bottom_icon-item" v-for="item in iconList" :key="item.key">
                                <d-icon :name="item.icon" size="22px" />
                                <span class="right_bottom_label">{{ item.label }}</span>
                            </div>
                        </div>
                    </template>
                </d-card>
            </div>
        </div>
    </d-business>
</template>
<script>
import { defineComponent, ref } from 'vue';

export default defineComponent({
    setup() {

        const leftCardData = ref([
            { text: '我的关注', icon: 'star-o' },
            { text: '默认项目', icon: 'audit-log' },
            { text: 'API服务创建的项目', icon: 'letter-a' },
            { text: '已归档', icon: 'preview' },
        ]);

        const activeIndex = ref(0);
        const announcementData = ref([
            {
                content: '【品牌升级1】"软件开发平台DevCloud"及"项目管理ProjectMan"即日起正式更名为"软件开发生产线CodeArts"和"需求管理CodeArts Req"'
            },
            {
                content: '【品牌升级2】"软件开发平台DevCloud"及"项目管理ProjectMan"即日起正式更名为"软件开发生产线CodeArts"和"需求管理CodeArts Req"'
            },
            {
                content: '【品牌升级3】"软件开发平台DevCloud"及"项目管理ProjectMan"即日起正式更名为"软件开发生产线CodeArts"和"需求管理CodeArts Req"'
            },
            {
                content: '【品牌升级4】"软件开发平台DevCloud"及"项目管理ProjectMan"即日起正式更名为"软件开发生产线CodeArts"和"需求管理CodeArts Req"'
            }
        ]);
        const iconList = ref([
            { key: 'product', icon: 'build-plugin', label: '产品介绍' },
            { key: 'quick', icon: 'rocket', label: '快速入门' },
            { key: 'guide', icon: 'user-guide', label: '用户指南' },
            { key: 'best', icon: 'add-requestor', label: '最佳实践' },
            { key: 'faq', icon: 'helping', label: '常见问题' },
            { key: 'billing', icon: 'flow', label: '计费说明' },
            { key: 'ref', icon: 'project-new', label: '通用参考' },
            { key: 'forum', icon: 'add-token', label: '用户论坛' },
            { key: 'history', icon: 'version-history', label: '版本历程' },
        ]);
        return {
            leftCardData,
            activeIndex,
            announcementData,
            iconList
        };
    },
});
</script>
<style>
.devui_business {
    display: flex;
    overflow-x: scroll;
}

.left {
    min-width: 240px !important;
}

.main {
    min-width: 1200px !important;
}

.right {
    min-width: 406px !important;
}

.left-menu-item {
    display: flex;
    align-items: center;
    height: 36px;
    font-size: 12px;
    padding: 8px;
    margin-bottom: 4px;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.2s ease;
}

.left-menu-item.active-card {
    background: #fff;
    box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.08);
    color: #252b3a;
    font-weight: 700;
    font-size: 14px;
}

.left-menu-item:hover:not(.active-card) {
    background: #f5f7fa;
}

.main_head_card,
.main_bottom_card_content {
    width: 285px;
    height: 54px;
    padding: 8px 16px !important;
    border-radius: 100px;
}

.main_bottom_card_content {
    margin-right: 20px;
}

.left_card_content,
.main_head_card_content,
.main_card_content {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-size: 14px;
    color: #252b3a;
    font-weight: 500;
}

.main_card_content_img1,
.main_card_content_img2,
.main_card_content_img3 {
    width: 38px;
    height: 38px;
    margin-right: 8px;
}

.main_card_content_img1 {
    background: url('../../assets/business_b.png') no-repeat center;
}

.main_card_content_img2 {
    background: url('../../assets/business_d.png') no-repeat center;
}

.main_card_content_img3 {
    background: url('../../assets/business_r.png') no-repeat center;
}

.main {
    margin-left: 93px;
    margin-right: 78px;
}

.main_bottom_name {
    font-size: 48px;
    margin: 48px 0;
}

.main_bottom_access {
    font-size: 24px;
    margin: 10px 0;
}

.main_bottom_card {
    display: flex;
}

.card-carousel {
    height: 240px
}

.announcement-card {
    width: 100%;
    height: 100%;
    border-radius: 8px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.08);
    overflow: hidden;
}

.card-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    height: 100%;
}

.card-title {
    font-size: 16px;
    font-weight: 700;
    color: #1d2129;
    margin-bottom: 12px;
}

.card-body {
    font-size: 14px;
    color: #4b5563;
    line-height: 1.5;
    margin-bottom: 16px;
    text-align: left;
}

.card-time {
    font-size: 12px;
    color: #9ca3af;
    align-self: flex-start;
    margin-bottom: 20px;
}

.right_head {
    height: 194px;
    margin-bottom: 34px;
}

.right_center {
    height: 261px;
}

.devui-carousel__item .devui-card__shadow--hover:hover{
     overflow:visible !important;
     box-shadow:none !important;
}
.right_card_content_title {
    font-size: 16px;
    font-weight: 700;
    margin-bottom: 16px;
    color: #1d2129;
}

.right_card_content_img {
    height: 172px;
    background: url('../../assets/businessActivity.png') no-repeat center;
}

.right_bottom {
    width: 406px;
    margin-bottom: 20px;
    height:316px;
}

.right_bottom_top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 28px;
}

.right_bottom_top_title {
    font-size: 16px;
    font-weight: 700;
    color: #1d2129;
}

.right_bottom_top_all-docs {
    font-size: 12px;
    color: #86909c;
    cursor: pointer;
}

.right_bottom_icon-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 0px 4.67px;
}

.right_bottom_icon-item {
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items: center;
    gap: 8px;
    cursor: pointer;
    width:88px;
    height:80px
}
.right_bottom_icon-item:hover{
    background:#f5f5f5;
    border-radius:8px;
}
.right_bottom_icon-item .right_bottom_label {
    font-size: 14px;
    color: #4e5969;
    text-align: center;
}
</style>
```

:::


### 业务组件(头信息)

:::demo

```vue
<template>
    <div class="breadcrumb-wrapper">
        <d-icon name="back" class="back-icon" @click="handleBack" size="16px" color="#191919"></d-icon>
        <div class="breadcrumb-icon"></div>
        <div class="breadcrumb-core-container">
            <div class="breadcrumb-content">
                <span v-for="(item, index) in breadcrumbList" :key="index"
                    :class="['breadcrumb-item', { active: index === breadcrumbList.length - 1 }]"
                    @click="index === breadcrumbList.length - 1 && toggleDropdown()">
                    {{ item }}
                    <span v-if="index < breadcrumbList.length - 1" class="separator">/</span>
                </span>
                <d-icon name="chevron-down-2" class="dropdown-icon_business" :class="{ 'icon-open': isDropdownOpen }"
                    size="16px" @click="toggleDropdown"></d-icon>

                <div v-if="isDropdownOpen" class="dropdown-menu">
                    <d-search v-model="searchKeyword" placeholder="搜索代码仓" icon-position='left' @search="handleSearch"
                        @input="handleSearch" class="search-box"></d-search>

                    <ul class="dropdown-list">
                        <li v-for="item in filteredList" :key="item.id" class="dropdown-item"
                            @click="handleItemClick(item)">
                            <div class="item-icon" :style="{ background: `url(${item.icon}) no-repeat center` }"></div>
                            <span class="item-text">
                                <span class="text-prefix">{{ item.name.split(' / ')[0] }}&nbsp;/&nbsp;</span>
                                <span class="text-suffix">{{ item.name.split(' / ')[1] }}</span>
                            </span>
                        </li>
                    </ul>

                    <div class="dropdown-footer">总条数: {{ filteredList.length }}</div>
                </div>
            </div>

            <div class="breadcrumb-id-section">
                <span class="repository-text">Repository ID: <span class="repository-id">{{ repositoryId}}</span></span>
            </div>
        </div>

        <div class="breadcrumb-tags">
            <d-tag color="#555555" :checked="true" class="tag_code" size="sm">代码健康度</d-tag>
            <d-tag color="#9f9f9f" :checked="true" class="tag_none" size="sm">未检查</d-tag>
        </div>
    </div>
</template>

<script>
import { defineComponent, ref, computed, onMounted } from 'vue';

export default defineComponent({
    setup() {
        const iconSrc = '../../assets/business_p.png';

        const repositoryId = ref('123456');

        const dropdownList = ref([
            { id: 1, name: 'huawei / Sample-P', icon: '../../assets/business_p.png', repoId: '123456' },
            { id: 2, name: 'huawei / Sample-B', icon: '../../assets/business_b.png', repoId: '123457' },
            { id: 3, name: 'huawei / Sample-R', icon: '../../assets/business_r.png', repoId: '123458' },
            { id: 4, name: 'huawei / Sample-D', icon: '../../assets/business_d.png', repoId: '123459' }
        ]);

        const breadcrumbData = ref({
            data: 'huawei',
            children: {
                data: 'Sample',
                children: null
            }
        });

        const isDropdownOpen = ref(false);
        const searchKeyword = ref('');

        const breadcrumbList = computed(() => {
            const list = [];
            let current = breadcrumbData.value;
            while (current) {
                list.push(current.data);
                current = current.children;
            }
            return list;
        });

        const filteredList = computed(() => {
            if (!searchKeyword.value.trim()) {
                return dropdownList.value;
            }
            const keyword = searchKeyword.value.trim().toLowerCase();
            return dropdownList.value.filter(item =>
                item.name.toLowerCase().includes(keyword)
            );
        });

        const handleBack = () => {
            console.log('点击返回按钮，返回上一级');
        };

        const toggleDropdown = () => {
            isDropdownOpen.value = !isDropdownOpen.value;
        };

        const handleSearch = () => {
            console.log('执行搜索，关键词：', searchKeyword.value);
        };

        const handleItemClick = (item) => {
            console.log('选中下拉项：', item);
            repositoryId.value = item.repoId;
            isDropdownOpen.value = false; 
        };

        onMounted(() => {
            const handleClickOutside = (e) => {
                const target = e.target;
                if (!target.closest('.breadcrumb-content')) {
                    isDropdownOpen.value = false;
                }
            };
            document.addEventListener('click', handleClickOutside);

            return () => {
                document.removeEventListener('click', handleClickOutside);
            };
        });

        return {
            iconSrc,
            repositoryId,
            dropdownList,
            breadcrumbData,
            isDropdownOpen,
            searchKeyword,
            breadcrumbList,
            filteredList,
            handleBack,
            toggleDropdown,
            handleSearch,
            handleItemClick
        };
    }
});
</script>

<style scoped lang="scss">
.breadcrumb-wrapper {
    display: flex;
    align-items: flex-start;
    padding: 12px 20px;
    position: relative;
    background-color: #fff;
    border-bottom: 1px solid #e5e6eb;
}

.back-icon {
    cursor: pointer;
    margin-right: 4px;
    align-self: center;
}

.breadcrumb-icon {
    width: 48px;
    height: 48px;
    margin-right: 8px;
    background: url('../../assets/business_p.png') no-repeat center;
    background-size: contain;
}

.breadcrumb-core-container {
    display: flex;
    flex-direction: column;
    gap: 4px;
}

.breadcrumb-content {
    display: flex;
    align-items: center;
    gap: 4px;
    position: relative;
}

.breadcrumb-item {
    font-size: 18px;
    color: #575d6c;
    transition: color 0.2s;
    cursor: pointer;

    &.active {
        color: #252b3a;
        font-weight: 700;
    }

    &:hover {
        color: #252b3a;
    }
}

.separator {
    margin: 0 4px;
    color: #999;
}

.dropdown-icon_business {
    font-size: 16px;
    color: #666;
    margin-right: 8px;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    justify-content: center;

    &.icon-open>i {
        transform: rotate(180deg);
        transition: transform 0.3s ease;
    }

    &>i {
        transition: transform 0.3s ease;
        font-size: 16px !important;
        margin: 0 !important;
    }
}

.dropdown-menu {
    position: absolute;
    top: 100%;
    left: 0;
    width: 320px;
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);
    padding: 12px;
    z-index: 100;
}

.search-box {
    margin-bottom: 12px;
    width: 100%;
}

.dropdown-list {
    list-style: none;
    padding: 0;
    margin: 0;
    max-height: 200px;
    overflow-y: auto;
}

.dropdown-item {
    display: flex;
    align-items: center;
    height: 48px;
    gap: 8px;
    padding: 8px;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.2s;

    &:hover {
        background-color: #f5f7fa;
    }
}

.item-icon {
    width: 32px;
    height: 32px;
    background-size: contain;
}

.item-text {
    font-size: 14px;
    color: #333;
    display: flex;
    align-items: center;
}

.text-prefix {
    color: #575d6c;
}

.text-suffix {
    color: #252b3a;
    font-weight: 500;
}

.dropdown-footer {
    margin-top: 4px;
    text-align: right;
    font-size: 12px;
    color: #575d6c;
}

.breadcrumb-id-section {
    font-size: 12px;
    color: #86909c;
}

.repository-text {
    font-weight: 400;
}

.repository-id {
    color: #252b3a
}

.breadcrumb-tags {
    display: flex;
}

.breadcrumb-tags .tag_code .devui-tag__item {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    border-right: none;
}

.breadcrumb-tags .tag_none {
    position: relative;
}

.breadcrumb-tags .tag_none .devui-tag__item {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    border-left: none;
}
.breadcrumb-tags  .devui-tag__item{
    font-size:11px !important;
    padding-left:5px;
    padding-right:5px;
}
</style>
```

:::