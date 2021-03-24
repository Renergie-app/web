<template>
  <div>
    <input type="checkbox" v-model="value">
    <label> {{ text }}</label>
  </div>
</template>

<script>
export default {
  name: "checkBox",

  data: () => ({
    value: false,
  }),

  props: {
    bus:{
      required: true
    },
    id:{
      required: false,
    },
    text: {
      type: String,
      required: true,
    },
  },

  watch: {
    value: function (val) {
      this.$emit("change", val);
    },
  },

  methods:{
    setValue(val){
      this.value = val;
    },
  },

  mounted() {
    this.value = this.valueInit;
    if(this.id == undefined) this.bus.$on('setCheckBox', this.setValue);
    else this.bus.$on('setCheckBox'+this.id, this.setValue);
  }

}
</script>

<style scoped>

</style>
