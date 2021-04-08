<template>
  <div class="flex-col p-7 outer">
    <div class="question text-lg font-bold mb-8">
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
  background-color: var(--bg-card);
  box-shadow: 0px 5px 50px -10px rgba(49, 49, 49, 0.116);
}
.question {
  margin: 5px 0;
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