<template>
  <div class="flex-col p-5 container">
    <div class="text-lg font-bold">
      {{ question }}
    </div>
    <div class="w-full flex justify-center">
      <slot />
    </div>
  </div>
</template>
<style scoped>
.container {
  border-radius: 40px;
  background-color: white;
}
</style>

<script>
export default {
  name: 'question-card',
  props: {
    question: {
      type: String,
      required: true,
    },
  },
}
</script>