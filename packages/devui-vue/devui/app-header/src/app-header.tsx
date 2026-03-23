import { computed, defineComponent } from 'vue';
import {
  appHeaderProps,
  AppHeaderActionItem,
  AppHeaderMenuOption,
  AppHeaderMetaItem,
  AppHeaderNavItem,
  AppHeaderProps,
} from './app-header-types';
import { useNamespace } from '../../shared/hooks/use-namespace';
import { Button } from '../../button';
import { Dropdown } from '../../dropdown';
import { Icon } from '../../icon';
import { Avatar } from '../../avatar';
import { Badge } from '../../badge';
import {
  AhChevronDown,
  AhHuaweiMark,
  AhPin,
  PRESET_ACTION_ICONS,
  PRESET_NAV_ICONS,
} from './app-header-icons';
import './app-header.scss';

export default defineComponent({
  name: 'DAppHeader',
  props: appHeaderProps,
  emits: ['menu-click', 'console-click', 'meta-select', 'nav-select', 'action-click', 'user-select', 'avatar-click', 'lang-click'],
  setup(props: AppHeaderProps, { emit, slots }) {
    const ns = useNamespace('app-header');

    const headerStyle = computed(() => ({
      height: `${props.height}px`,
    }));

    const isActiveNav = (item: AppHeaderNavItem) => item.active || props.activeNavKey === item.key;

    const renderDropdownMenu = (
      ownerType: 'meta' | 'nav' | 'user',
      owner: AppHeaderMetaItem | AppHeaderNavItem | null,
      options: AppHeaderMenuOption[]
    ) => (
      <ul class={ns.e('dropdown-menu')}>
        {options.map((option) => (
          <li
            key={option.key}
            class={{
              [ns.e('dropdown-item')]: true,
              'is-disabled': option.disabled,
            }}
            onClick={() => {
              if (option.disabled) {
                return;
              }
              if (ownerType === 'meta') {
                emit('meta-select', { item: owner, option });
              } else if (ownerType === 'nav') {
                emit('nav-select', { item: owner, option });
              } else {
                emit('user-select', option);
              }
            }}>
            {option.icon ? <Icon name={option.icon} size="14px" class={ns.e('dropdown-item-icon')} /> : null}
            <span>{option.label}</span>
          </li>
        ))}
      </ul>
    );

    const renderMenuTrigger = () => (
      <Button class={ns.e('menu-trigger')} variant="text" size="sm" onClick={() => emit('menu-click')}>
        <span class={ns.e('menu-lines')}>
          <i />
          <i />
          <i />
        </span>
      </Button>
    );

    const renderMetaItem = (item: AppHeaderMetaItem) => {
      const isRegion = item.variant === 'region';
      const trigger = (
        <Button class={ns.e('meta-trigger')} variant="text" size="sm">
          {isRegion ? <AhPin size={16} /> : null}
          <span class={ns.e('meta-label')}>{item.label}</span>
          {item.options?.length ? (
            <span class={ns.e('meta-chevron')}>
              <AhChevronDown size={16} color="#8A8E99" />
            </span>
          ) : null}
        </Button>
      );
      if (!item.options?.length) {
        return (
          <div key={item.key} class={ns.e('meta-item')} onClick={() => emit('meta-select', { item, option: null })}>
            {trigger}
          </div>
        );
      }
      return (
        <Dropdown key={item.key} trigger={props.dropdownTrigger} offset={4} class={ns.e('meta-item')}>
          {trigger}
          <template v-slot:menu>{renderDropdownMenu('meta', item, item.options)}</template>
        </Dropdown>
      );
    };

    const renderNavIcon = (item: AppHeaderNavItem) => {
      if (item.presetIcon && PRESET_NAV_ICONS[item.presetIcon]) {
        const Comp = PRESET_NAV_ICONS[item.presetIcon];
        return <Comp size={16} class={ns.e('nav-icon-svg')} />;
      }
      if (item.icon) {
        return <Icon name={item.icon} size="16px" class={ns.e('nav-icon')} />;
      }
      return null;
    };

    const renderNavItem = (item: AppHeaderNavItem) => {
      const trigger = (
        <Button
          class={{
            [ns.e('nav-trigger')]: true,
            [ns.em('nav-trigger', 'active')]: isActiveNav(item),
          }}
          variant="text"
          size="sm"
          onClick={() => emit('nav-select', { item, option: null })}>
          {renderNavIcon(item)}
          <span class={ns.e('nav-label')}>{item.label}</span>
          {item.options?.length ? (
            <span class={ns.e('nav-chevron')}>
              <AhChevronDown size={16} color="#8A8E99" />
            </span>
          ) : null}
        </Button>
      );
      if (!item.options?.length) {
        return (
          <li key={item.key} class={ns.e('nav-item')}>
            {trigger}
          </li>
        );
      }
      return (
        <li key={item.key} class={ns.e('nav-item')}>
          <Dropdown trigger={props.dropdownTrigger} offset={4}>
            {trigger}
            <template v-slot:menu>{renderDropdownMenu('nav', item, item.options)}</template>
          </Dropdown>
        </li>
      );
    };

    const renderAction = (item: AppHeaderActionItem) => {
      if (item.kind === 'lang') {
        return (
          <li key={item.key} class={ns.e('action-item')}>
            <Button class={ns.e('lang-btn')} variant="text" size="sm" onClick={() => emit('lang-click', item)}>
              {item.label ?? 'EN'}
            </Button>
          </li>
        );
      }
      const Preset = item.presetAction ? PRESET_ACTION_ICONS[item.presetAction] : null;
      const actionButton = (
        <Button class={ns.e('action-btn')} variant="text" shape="circle" size="sm" onClick={() => emit('action-click', item)}>
          {Preset ? <Preset size={16} /> : item.icon ? <Icon name={item.icon} size="16px" class={ns.e('action-icon')} /> : null}
        </Button>
      );
      return (
        <li key={item.key} class={ns.e('action-item')}>
          {item.dot || item.count !== undefined ? (
            <Badge showDot={!!item.dot} count={item.count} status="danger">
              {actionButton}
            </Badge>
          ) : (
            actionButton
          )}
        </li>
      );
    };

    const renderAvatar = () => {
      const avatarTrigger = (
        <Button class={ns.e('avatar-trigger')} variant="text" shape="circle" size="sm" onClick={() => emit('avatar-click')}>
          <Avatar name={props.avatarName} width={28} height={28} isRound />
        </Button>
      );
      if (!props.userOptions.length) {
        return avatarTrigger;
      }
      return (
        <Dropdown trigger={props.dropdownTrigger} offset={4}>
          {avatarTrigger}
          <template v-slot:menu>{renderDropdownMenu('user', null, props.userOptions)}</template>
        </Dropdown>
      );
    };

    return () => (
      <header class={ns.b()} style={headerStyle.value}>
        <div class={ns.e('left')}>
          {props.showMenuTrigger ? renderMenuTrigger() : null}
          {slots.brand ? (
            <div class={ns.e('brand')}>{slots.brand?.()}</div>
          ) : (
            <div class={ns.e('brand')}>
              {props.showHuaweiLogo ? (
                <span class={ns.e('brand-logo')}>
                  <AhHuaweiMark size={20} />
                </span>
              ) : null}
              <span class={ns.e('brand-text')}>{props.brandText}</span>
            </div>
          )}
          <span class={ns.e('divider')} role="separator" />
          {slots.console ? (
            slots.console?.()
          ) : (
            <Button class={ns.e('console')} variant="text" size="sm" onClick={() => emit('console-click')}>
              {props.consoleText}
            </Button>
          )}
          {props.metaItems.length ? <div class={ns.e('meta')}>{props.metaItems.map(renderMetaItem)}</div> : null}
        </div>

        <nav class={ns.e('center')}>
          {slots.nav ? slots.nav?.() : <ul class={ns.e('nav-list')}>{props.navItems.map(renderNavItem)}</ul>}
        </nav>

        <div class={ns.e('right')}>
          {slots.actions ? slots.actions?.() : <ul class={ns.e('actions')}>{props.actionItems.map(renderAction)}</ul>}
          {slots.user ? slots.user?.() : renderAvatar()}
        </div>
      </header>
    );
  },
});
