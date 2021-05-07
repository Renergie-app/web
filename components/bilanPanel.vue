<template>
  <div class="outer p-5 rounded-3xl h-100 font-light shadow-2xl">
    <slot />
  </div>
</template>

<style scoped>
.outer {
  /* background-color: var(--blue); */
  color: white;
  background: linear-gradient(228deg, #3f95ca, #4174fa, #2968e6, #5d9ac0);
  background-size: 800% 800%;

  animation: slide 10s ease infinite;
}

@keyframes slide {
  0% {
    background-position: 0% 90%;
  }
  50% {
    background-position: 100% 11%;
  }
  100% {
    background-position: 0% 90%;
  }
}
h3 {
  margin-left: 2rem;
}
h1 {
  font-weight: 700;
  font-size: 1.875rem /* 30px */;
  line-height: 2.25rem /* 36px */;
  margin-bottom: 0.3rem /* 8px */;
  margin-top: 1.2rem /* 8px */;
}
b {
  color: white;
  font-size: 1.3rem;
  font-weight: 600;
}

.break {
  margin: 5px;
  margin-left: 2rem;
  height: 1px;
  background-color: white;
}
</style>>

<script>
export default {}
</script>
