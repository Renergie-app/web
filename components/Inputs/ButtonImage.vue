<template>
  <button class="m-6 p-5 flex-col" @click="click">
    <img :src="img" :alt="title" class="h-32 w-32" />
    <div class="text-lg font-semibold">{{ title }}</div>
  </button>
</template>

<style scoped>
button {
  flex-shrink: 0;
  background-color: #ffffff;
  border-radius: 40px;
  box-shadow: 0px 10px 50px -10px rgba(49, 49, 49, 0.116);
}

img {
  border-radius: 25px;
  background-color: #075afd;
}
div {
  color: #9495ac;
}
</style>
<script>
export default {
  name: 'button-image',
  props: {
    title: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
  },

  methods: {
    click() {
      this.$emit('click', this.title.toLowerCase())
    },
  },
}
</script>
