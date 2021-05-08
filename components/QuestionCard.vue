<template>
  <div class="flex-col outer m-5 mt-10 mb-20 max-w-lg shadow-2xl">
    <div class="question text-xl font-bold m-7 mb-0 text-center">
      {{ question }}
    </div>
    <div class="flex justify-center">
      <slot />
    </div>
  </div>
</template>
<style scoped>
.outer {
  flex-grow: 0;
  flex-shrink: 1;
  border-radius: 40px;
  background-color: var(--bg-card);
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