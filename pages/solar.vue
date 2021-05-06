<template>
  <page-container v-if="userInfo != null">
    <logo />
    <single-button @clicked="returnpage">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
        <path
          d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"
        />
      </svg>
    </single-button>
    <div class="flex flex-row mb-10">
      <div class="m-10">
        <h1>Ajouts de panneaux photovoltaïques :</h1>
        <h2>Projet de production éléctrique :</h2>
        <div class="flex flex-col items-start ml-6">
          <check-box
            text="Vente Totale"
            :bus="bus"
            id="0"
            @change="changeSellAll"
          >
          </check-box>
          <check-box
            text="AutoConsommation et vente surplus"
            :bus="bus"
            id="1"
            @change="changeAutoC"
          >
          </check-box>
          <p>Part d'autoconsomation : {{ autoconsommation }} %</p>
          <input
            type="range"
            min="0"
            max="100"
            value="50"
            class="ml-10"
            :disabled="userInfo.solarModule.sellAll"
            v-model="autoconsommation"
            @input="changeAutoConso"
          />
        </div>
        <h2>Mode de pose :</h2>
        <div class="flex flex-col items-start ml-6">
          <check-box
            text="Intégration (Remplace la toiture)"
            :bus="bus"
            id="2"
            @change="changeIntegration"
          >
          </check-box>
          <check-box
            text="Surimposition (Par dessus la toiture)"
            :bus="bus"
            id="3"
            @change="changeSurimposition"
          >
          </check-box>
        </div>
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
      <bilan-panel class="m-10">
        <h1>Bilan avec ajouts</h1>
        <h2>
          Nombre de panneaux solaires installés :
          <b>
            {{ userInfo.solarModule.nbPanel }}
          </b>
        </h2>
        <h2>
          Production électrique total :
          <b>{{ Math.trunc(userInfo.solarModule.prod) }} kWh / an</b>
        </h2>
        <h2>Bilan finançier :</h2>
        <h3>
          Coût de l'aménagement : <b>{{ Math.trunc(userInfo.solarModule.price) }} € </b>
        </h3>
        <h3>
          Aide de l'état : <b>{{ Math.trunc(userInfo.solarModule.statehelp) }} € </b>
        </h3>
        <h3>-------------------------------------------------------</h3>
        <h3>
          Coût total :
          <b>
            {{
              Math.trunc(userInfo.solarModule.price - userInfo.solarModule.statehelp)
            }}
            €</b
          >
        </h3>
        <h3>-------------------------------------------------------</h3>
        <h2>Rentabilité :</h2>
        <h3>
          Revenu Annuel Estimé : <b>{{ getGainAll }} € / an </b>
        </h3>
        <h3>
          Economie Annuelle sur la facture :
          <b>{{ getEconomieFacture }} € / an </b>
        </h3>
        <h3>-------------------------------------------------------</h3>
        <h3>
          Profit Totale : <b>{{ getProfit }} € / an </b>
        </h3>
        <h3>-------------------------------------------------------</h3>
        <h3>
          Aménagement rentable au bout de : <b>{{ rentable }} ans </b>
        </h3>
      </bilan-panel>
    </div>
  </page-container>
</template>
<style scoped>
h1 {
  font-weight: 700;
  font-size: 1.875rem /* 30px */;
  line-height: 2.25rem /* 36px */;
  margin-bottom: 0.5rem /* 8px */;
}
</style>

<script>
import Vue from 'vue'
import solarPanelRequest from '../graphQL/solarpanel.graphql'
import PageContainer from '../components/PageContainer.vue'
import Logo from '../components/Logo.vue'
import BilanPanel from '../components/bilanPanel.vue'

export default {
  components: { PageContainer, Logo, BilanPanel },
  name: 'solar',

  data: () => ({
    userInfo: null,
    bus: new Vue(),
    autoconsommation: 50,
  }),

  computed: {
    correctFaces() {
      if (this.userInfo == null) return []
      return this.userInfo.solarModule.faces.filter((face) => face.pose)
    },
    getGainAll() {
      if (this.userInfo == null) return 0
      var conso = this.autoconsommation
      if (this.userInfo.solarModule.sellAll) conso = 0
      var total = 0
      this.userInfo.solarModule.faces
        .filter((face) => face.pose)
        .forEach((f) => {
          total += f.gain
        })
      return Math.trunc((total * (100 - conso)) / 100)
    },
    getEconomieFacture() {
      if (this.userInfo == null) return 0
      if (this.userInfo.solarModule.sellAll) return 0
      var total = 0
      this.userInfo.solarModule.faces
        .filter((face) => face.pose)
        .forEach((f) => {
          total += f.prod
        })
      return Math.trunc(((total * this.autoconsommation) / 100) * 0.1765)
    },
    getProfit() {
      return this.getEconomieFacture + this.getGainAll
    },
    rentable() {
      if (this.userInfo == null) return 0
      if (this.userInfo.solarModule.price === 0) return 0
      return (
        (this.userInfo.solarModule.price -
          this.userInfo.solarModule.statehelp) /
        this.getProfit
      ).toFixed(2)
    },
  },

  methods: {
    returnpage() {
      //this.saveStore()
      this.$router.push('/home')
    },
    changeSellAll(val) {
      this.$store.commit('setSellAllSolar', val)
      //this.userInfo.solarModule.sellAll = val;
      this.bus.$emit('setCheckBox1', !val)
      this.requestBack()
      //this.saveStore();
    },
    changeAutoC(val) {
      this.$store.commit('setSellAllSolar', !val)
      //this.userInfo.solarModule.sellAll = !val;
      this.bus.$emit('setCheckBox0', !val)
      this.requestBack()
      //this.saveStore();
    },
    changeIntegration(val) {
      this.$store.commit('setIntegrationSolar', val)
      //this.userInfo.solarModule.integration = val;
      this.bus.$emit('setCheckBox3', !val)
      this.requestBack()
      //this.saveStore();
    },
    changeSurimposition(val) {
      this.$store.commit('setIntegrationSolar', !val)
      //this.userInfo.solarModule.integration = !val;
      this.bus.$emit('setCheckBox2', !val)
      this.requestBack()
      //this.saveStore();
    },
    changeAutoConso() {
      this.$store.commit('setAutoConsommation', this.autoconsommation)
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
    if (this.userInfo.homeType.value === 'None') {
      this.$router.push('/')
    } else {
      process.nextTick(() => {
        if (this.userInfo.solarModule.sellAll)
          this.bus.$emit('setCheckBox0', true)
        else this.bus.$emit('setCheckBox1', true)
        if (this.userInfo.solarModule.integration)
          this.bus.$emit('setCheckBox2', true)
        else this.bus.$emit('setCheckBox3', true)
      })
      this.autoconsommation = this.userInfo.solarModule.autoconsommation
    }
  },
}
</script>

