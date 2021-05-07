<template>
  <div class="flex flex-row items-center">
    <dir
      class="h-8 bar p-0 mt-1 mb-1 pt-1 flex items-center justify-start tip"
      :style="barStyle"
    >
      <span class="tip-text">
        <slot />
      </span>
      <span class="ml-4 font-extrabold text-white">
        {{ label }}
      </span>
    </dir>
    <svg
      v-if="current"
      :class="current ? 'current' : ''"
      class="h-8 ml-2"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 448 512"
    >
      <path
        d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z"
      />
    </svg>
  </div>
</template>

<style scoped>
.bar {
  border-radius: 10px;
}
svg {
  --arrow: rgb(73, 73, 73);
  fill: var(--arrow);
  stroke: var(--arrow);
}
@keyframes slideinout {
  from {
    transform: translate(0, 0);
  }
  to {
    transform: translate(20px, 0);
  }
}
.current {
  animation: 2s ease-in-out 1s infinite alternate both slideinout;
}
</style>
<script>
export default {
  name: 'energetic-bar',
  props: {
    label: {
      type: String,
      required: true,
    },
    percent: {
      type: Number,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
    current: {
      type: Boolean,
      required: true,
    },
  },
  computed: {
    barStyle() {
      return {
        'background-color': this.color,
        width: this.percent * 0.8 + '%',
      }
    },
  },
}
</script>
