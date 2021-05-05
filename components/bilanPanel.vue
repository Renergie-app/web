<template>
  <div class="outer p-5 rounded-3xl h-100 sticky font-light shadow-2xl">
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

span {
  font-size: 1.3rem;
  font-weight: 600;
}
</style>>

<script>
export default {}
</script>
