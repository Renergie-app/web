<template>
  <div class="flex-col p-5 outer">
    <div class="text-lg font-bold">
      {{ question }}
    </div>
    <div class="w-full flex justify-center">
      <slot />
    </div>
  </div>
</template>
<style scoped>
.outer {
  flex-grow: 0;
  border-radius: 40px;
  background-color: white;
  box-shadow: 0px 10px 50px -10px rgba(49, 49, 49, 0.116);
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