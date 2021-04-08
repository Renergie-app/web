<template>
  <page-container>
    <div class="flex flex-row">
      <user-info-box :user-info="userInfo">
        <energetic-label
          v-if="userInfo != null"
          :home-area="userInfo.homeArea.value"
          :elecConsumption="userInfo.elecConsumptionTotal.value"
        ></energetic-label>
      </user-info-box>
      <info-box>
        Cette application s'appuie sur des données prévisionnelles et des
        données statistiques pour prévoir vos coûts. Il est donc possible que
        <b
          >d'un particulier à l'autres les différences entre la réalité soit
          plus grande</b
        >. Cette application n'a pas pour but de remplacer un quelconque devis
        fait par un professionnel, elle a pour seul intérêt de donner un ordre
        d'idées de vos investissements et de leur rentabilité.
      </info-box>
    </div>
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
    if (this.userInfo.homeType.value === "None") this.$router.push('/')
  },
}
</script>
