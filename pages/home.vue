<template>
  <div class="mt-5 w-screen flex items-center justify-center">
    <info-box></info-box>
    <energetic-label v-if="userInfo!=null" :home-area="userInfo.homeArea.value" :elecConsumption="userInfo.elecConsumptionTotal.value"></energetic-label>
  </div>
</template>

<script>
export default {
  name: "home.vue",

  data: () => ({
    userInfo: null,
  }),

  mounted() {
    this.userInfo = this.$store.getters["getUserInfo"]
    if(this.userInfo==null) this.$router.push("/")
  }
}
</script>

<style scoped>

</style>
