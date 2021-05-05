<template>
  <div class="outer p-5 rounded-3xl h-100 font-light shadow-2xl">
    <slot />
  </div>
</template>

<style scoped>
.outer {
  background-color: var(--blue);
  color: white;
  align-self: flex-start;
}
h3 {
  margin-left: 2rem;
}
h1 {
  font-weight: 700;
  font-size: 1.875rem /* 30px */;
  line-height: 2.25rem /* 36px */;
  margin-bottom: 0.5rem /* 8px */;
}
b {
  font-size: 1.3rem;
  font-weight: 600;
}
</style>>

<script>
export default {}
</script>
