<template>
  <div class="flex-col outer m-10 shadow-2xl mb-20">
    <div class="question text-xl font-bold m-7 mb-5">
      {{ question }}
    </div>
    <div class="m-5 flex justify-center">
      <slot />
    </div>
  </div>
</template>
<style scoped>
.outer {
  flex-grow: 0;
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