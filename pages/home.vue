<template>
  <page-container>
    <info-box></info-box>
    <energetic-label
      v-if="userInfo != null"
      :home-area="userInfo.homeArea.value"
      :elecConsumption="userInfo.elecConsumptionTotal.value"
    ></energetic-label>
    <user-info-box :user-info="userInfo"></user-info-box>
    <h1>Choississez votre rénovation :</h1>
    <div class="w-screen flex items-center justify-center">
      <button-image title="Eolien" img="/icon.png"> </button-image>
      <button-image
        title="Panneaux Photovoltaïques"
        img="/icon.png"
        @click="solarRenov"
      >
      </button-image>
      <button-image title="Isolation" img="/icon.png"> </button-image>
    </div>
  </page-container>
</template>

<script>
import PageContainer from '../components/PageContainer.vue'
export default {
  components: { PageContainer },
  name: 'home.vue',

  data: () => ({
    userInfo: null,
  }),

  methods: {
    solarRenov() {
      this.$router.push('/solar')
    },
  },

  mounted() {
    this.userInfo = this.$store.getters['getUserInfo']
    if (this.userInfo == null) this.$router.push('/')
  },
}
</script>
