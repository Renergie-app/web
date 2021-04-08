<template>
  <button
    class="m-3 p-2 flex-col border-2 border-black"
    @click="click"
    :style="{ color: colorBtn }"
    :disabled="disabled"
  >
    {{ text }}
  </button>
</template>

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

<style scoped>
</style>
