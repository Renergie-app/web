<template>
  <button
    class="flex-col p-2 font-semibold"
    @click="click"
    :disabled="disabled"
  >
    <div v-if="text" class="pr-2 pl-2">
      {{ text }}
    </div>
    <div
      v-if="!text"
      class="w-10 h-10 svgContainer flex justify-center items-center"
    >
      <slot />
    </div>
  </button>
</template>

<style scoped>
.svgContainer svg {
  height: 2em;
}
button:hover:enabled svg {
  fill: white;
  stroke: white;
}
button {
  border-radius: 20px;
  background-color: transparent;
  border: 2px solid var(--bg-grey);
  transition: all 0.1s;
}
button:hover:enabled {
  background-color: var(--blue);
  border-color: var(--blue);
  color: white;
  box-shadow: 0px 10px 60px -10px var(--blue);
}
button:disabled {
  cursor: not-allowed;
  color: var(--red);
}
</style>

<script>
export default {
  name: 'single-button',
  props: ['text', 'enable'],

  computed: {
    disabled() {
      return this.enable != undefined && !this.enable
    },
    colorBtn() {
      return this.disabled ? 'red' : 'black'
    },
  },

  methods: {
    click() {
      this.$emit('clicked')
    },
  },
}
</script>
