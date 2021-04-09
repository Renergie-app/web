<template>
  <button class="m-6 p-5 flex flex-col items-center w-44" @click="click">
    <img v-if="img" class="title p-7 h-full w-full" :src="img" :alt="title" />
    <div
      v-if="!img"
      class="svgContainer h-32 w-32 p-5 flex items-center justify-center"
    >
      <slot />
    </div>
    <div class="text-xl font-semibold mb-1 mt-2">{{ title }}</div>
  </button>
</template>

<style scoped>
button {
  flex-shrink: 0;
  background-color: var(--bg-card);
  border-radius: 40px;
  box-shadow: 0px 10px 60px -10px rgba(49, 49, 49, 0.247);
  transition: all 0.05s;
}

img,
.svgContainer {
  border-radius: 25px;
  background-color: rgb(255, 255, 255);
  transition: all 0.1s;
  fill: var(--text-sec);
  stroke: var(--text-sec);
}
button:hover img,
button:hover .svgContainer {
  fill: white;
  stroke: white;
  background-color: var(--blue);
}
.svgContainer svg {
  height: 5rem;
}

title {
  color: var(--text-sec);
}
button:hover {
  transform: scale(1.05);
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
