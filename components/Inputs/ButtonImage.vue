<template>
  <button class="m-3 p-2 flex-col border-2 border-black" @click="click">
    <img :src="img" :alt="title" class="h-32 w-32" />
    <div class="text-black text-lg p-3">{{ title }}</div>
  </button>
</template>

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

  methods:{
    click(){
      this.$emit("click", this.title.toLowerCase());
    }
  }
}
</script>
