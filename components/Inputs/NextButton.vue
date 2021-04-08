<template>
  <button
    class="flex-col p-5 font-semibold"
    @click="click"
    :disabled="disabled"
  >
    {{ text }}
  </button>
</template>

<style scoped>
button {
  border-radius: 20px;
  background-color: transparent;
  border: 2px solid #e8e8e9;
  transition: all 0.1s;
  box-shadow: 0px 10px 50px -10px rgba(49, 49, 49, 0.116);
}
button:hover:enabled {
  background-color: #075afd;
  border-color: #075afd;
  color: white;
  box-shadow: 0px 10px 50px -10px #0759fd6b;
}
button:disabled {
  cursor: not-allowed;
  color: #ff374c;
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
