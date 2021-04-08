<template>
  <page-container v-if="userInfo != null">
    <div>
      <single-button text="Retour" @clicked="returnpage"></single-button>
      <h1>Bilan Avec Ajouts :</h1>
      <h2>
        Nombre de panneaux solaires installés :
        {{ userInfo.solarModule.nbPanel }}
      </h2>
      <h2>
        Production électrique total : {{ userInfo.solarModule.prod }} kWh / an
      </h2>
      <h2>Bilan finançier :</h2>
      <h3>Aide de l'état : {{ userInfo.solarModule.statehelp }} €</h3>
      <h3>Coût total : {{ userInfo.solarModule.price }} €</h3>
      <br />
      <h1>Ajouts de panneaux photovoltaïques :</h1>
      <br />
      <h2>Projet de production éléctrique :</h2>
      <check-box text="Vente Totale" :bus="bus" id="0" @change="changeSellAll">
      </check-box>
      <check-box
        text="AutoConsommation et vente surplus"
        :bus="bus"
        id="1"
        @change="changeAutoC"
      >
      </check-box>
      <br />
      <h2>Mode de pose :</h2>
      <check-box
        text="Intégration"
        :bus="bus"
        id="2"
        @change="changeIntegration"
      >
      </check-box>
      <check-box
        text="Surimposition"
        :bus="bus"
        id="3"
        @change="changeSurimposition"
      >
      </check-box>
      <br />
      <face-selector
        v-if="userInfo != null"
        :solarfaces="userInfo.solarModule.faces"
      ></face-selector>
      <face-module
        v-if="userInfo != null"
        v-for="(face, index) in correctFaces"
        :key="index"
        :face="face"
        @change="requestBack"
      ></face-module>
    </div>
  </page-container>
</template>

<script>
import Vue from 'vue'
import solarPanelRequest from '../graphQL/solarpanel.graphql'
import PageContainer from '../components/PageContainer.vue'

export default {
  components: { PageContainer },
  name: 'solar',

  data: () => ({
    userInfo: null,
    bus: new Vue(),
  }),

  computed: {
    correctFaces() {
      if (this.userInfo == null) return []
      return this.userInfo.solarModule.faces.filter((face) => face.pose)
    },
  },

  methods: {
    returnpage() {
      this.saveStore()
      this.$router.push('/home')
    },
    changeSellAll(val) {
      this.$store.commit('setSellAllSolar', val)
      //this.userInfo.sellAll = val;
      this.bus.$emit('setCheckBox1', !val)
      this.requestBack()
      //this.saveStore();
    },
    changeAutoC(val) {
      this.$store.commit('setSellAllSolar', !val)
      //this.userInfo.sellAll = !val;
      this.bus.$emit('setCheckBox0', !val)
      this.requestBack()
      //this.saveStore();
    },
    changeIntegration(val) {
      this.$store.commit('setIntegrationSolar', val)
      //this.userInfo.integration = val;
      this.bus.$emit('setCheckBox3', !val)
      this.requestBack()
      //this.saveStore();
    },
    changeSurimposition(val) {
      this.$store.commit('setIntegrationSolar', !val)
      //this.userInfo.integration = !val;
      this.bus.$emit('setCheckBox2', !val)
      this.requestBack()
      //this.saveStore();
    },
    saveStore() {
      this.$store.commit('setUserInfo', this.userInfo)
    },
    async requestBack() {
      let faces = this.$store.getters['getFaceinfoRequest']
      if (faces !== null && faces.length !== undefined) {
        const data = await this.$apollo.query({
          query: solarPanelRequest,
          variables: {
            facades: faces,
            integrated: this.userInfo.solarModule.integration,
            zip: this.userInfo.postalCode.value,
            sellAll: this.userInfo.solarModule.sellAll,
          },
        })
        this.$store.commit('setSolarModule', data.data.solarPanel)
      }
    },
  },

  mounted() {
    this.userInfo = this.$store.getters['getUserInfo']
    if (this.userInfo.homeType.value === "None") {
      this.$router.push('/')
    } else {
      if (this.userInfo.sellAll) this.bus.$emit('setCheckBox0', true)
      else this.bus.$emit('setCheckBox1', true)
      if (this.userInfo.integration) this.bus.$emit('setCheckBox2', true)
      else this.bus.$emit('setCheckBox3', true)
    }
  },
}
</script>

<style scoped>
</style>
