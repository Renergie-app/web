<template>
  <button class="m-6 p-5 flex flex-col items-center w-44" @click="click">
    <img :src="img" :alt="title" class="h-32 w-32" />
    <div class="text-lg font-semibold mb-1 mt-2">{{ title }}</div>
  </button>
</template>

<style scoped>
button {
  flex-shrink: 0;
  background-color: var(--bg-card);
  border-radius: 40px;
  box-shadow: 0px 10px 60px -10px rgba(49, 49, 49, 0.247);
}

img {
  border-radius: 25px;
  background-color: var(--blue);
  transition: all 0.1s;
}
button:hover img {
  background-color: var(--red);
}
div {
  color: var(--text-sec);
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
