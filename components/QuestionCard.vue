<template>
  <div class="flex-col">
    <div class="text-5xl font-bold text-black p-5">
      {{ question }}
    </div>
    <div class="w-full flex justify-center">
      <slot />
    </div>
  </div>
</template>

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