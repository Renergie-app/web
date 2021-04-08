<template>
  <div class="flex flex-row justify-center m-2">
    <input class="h-6 w-6 mr-3" type="checkbox" v-model="value" />
    <label :class="value ? 'checked' : ''"> {{ text }}</label>
  </div>
</template> 

<style scoped>
label {
  color: var(--text-sec);
}

.checked {
  color: var(--text);
}
</style>

<script>
export default {
  name: 'checkBox',

  data: () => ({
    value: false,
  }),

  props: {
    bus: {
      required: true,
    },
    id: {
      required: false,
    },
    text: {
      type: String,
      required: true,
    },
  },

  watch: {
    value: function (val) {
      this.$emit('change', val)
    },
  },

  methods: {
    setValue(val) {
      this.value = val
    },
  },

  mounted() {
    this.value = this.valueInit
    if (this.id == undefined) this.bus.$on('setCheckBox', this.setValue)
    else this.bus.$on('setCheckBox' + this.id, this.setValue)
  },
}
</script>

