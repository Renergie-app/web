<template>
  <button
    class="flex-col p-5 font-semibold"
    @click="click"
    :disabled="disabled"
  >
    {{ text }}
    <slot class="slot" />
  </button>
</template>

<style scoped>
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
  name: 'NextButton',
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
