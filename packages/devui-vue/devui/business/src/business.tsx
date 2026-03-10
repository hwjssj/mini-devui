import { defineComponent, type SetupContext } from 'vue';

export default defineComponent({
  name: 'DBusiness',
  inheritAttrs: false,
  setup(_props, ctx: SetupContext) {
    return () => (
      <div class="devui_business">
        {ctx.slots.default?.()}
      </div>
    );
  },
});