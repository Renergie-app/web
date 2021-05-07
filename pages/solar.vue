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
    <div class="card-container flex flex-row items-start mb-10">
      <div
        class="m-10 flex flex-col items-center p-5 rounded-3xl bg-white shadow-2x"
      >
        <h1 class="pl-2 pr-2 self-start">
          <p>Ajouts de panneaux</p>
          <p>photovoltaïques</p>
        </h1>
        <div class="flex flex-row justify-evenly font-light">
          <div class="max-w-xs mr-6">
            <h2 class="tip">
              Projet de production éléctrique :
              <span class="tip-text">
                <p>Il est possible de ...</p>
                <p>TODO</p>
              </span>
            </h2>
            <div class="flex flex-col items-start">
              <check-box
                text="Vente totale"
                :bus="bus"
                id="0"
                @change="changeSellAll"
              >
              </check-box>
              <check-box
                text="Autoconsommation"
                :bus="bus"
                id="1"
                @change="changeAutoC"
              >
              </check-box>
            </div>
          </div>
          <div class="max-w-xs">
            <h2 class="tip">
              Mode de pose :
              <span class="tip-text">
                <p>Intégration : remplace la toiture</p>
                <p>Surimposition : par dessus la toiture</p>
              </span>
            </h2>
            <div class="flex flex-col items-start">
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
            </div>
          </div>
        </div>
        <div
          v-if="!this.userInfo.solarModule.sellAll"
          class="max-w-xs pt-4 font-thin"
        >
          <p>
            Part d'autoconsomation : <b>{{ autoconsommation }} %</b>
          </p>
          <input
            type="range"
            min="0"
            max="100"
            value="50"
            class="w-full"
            :disabled="userInfo.solarModule.sellAll"
            v-model="autoconsommation"
            @input="changeAutoConso"
          />
        </div>
        <div v-if="userInfo != null">
          <face-selector
            :solarfaces="userInfo.solarModule.faces"
          ></face-selector>
          <face-module
            v-for="(face, index) in correctFaces"
            :key="index"
            :face="face"
            @change="requestBack"
          ></face-module>
        </div>
      </div>
      <bilan-panel class="m-10">
        <h1>Bilan énergétique</h1>
        <h3>
          Nombre de panneaux solaires :
          <b>
            {{ userInfo.solarModule.nbPanel }}
          </b>
        </h3>
        <h3>
          Production électrique total :
          <b>{{ Math.trunc(userInfo.solarModule.prod) }} kWh / an</b>
        </h3>

        <h1>Bilan finançier</h1>
        <h3>
          Coût de l'aménagement :
          <b>{{ Math.trunc(userInfo.solarModule.price) }} € </b>
        </h3>
        <h3>
          Aide de l'état :
          <b>{{ Math.trunc(userInfo.solarModule.statehelp) }} € </b>
        </h3>
        <div class="break" />
        <h3>
          Coût total :
          <b>
            {{
              Math.trunc(
                userInfo.solarModule.price - userInfo.solarModule.statehelp
              )
            }}
            €</b
          >
        </h3>

        <h1>Rentabilité</h1>
        <h3>
          Revenu annuel estimé : <b>{{ getGainAll }} € / an </b>
        </h3>
        <h3>
          Economie annuelle sur la facture :
          <b>{{ getEconomieFacture }} € / an </b>
        </h3>
        <div class="break" />
        <h3>
          Profit totale : <b>{{ getProfit }} € / an </b>
        </h3>
        <h3>
          Aménagement rentable à partir de : <b>{{ rentable }} ans </b>
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

b {
  font-weight: 700;
  font-size: 1rem;
}

@media (max-width: 960px) {
  .card-container {
    flex-direction: column;
    align-items: center;
  }
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

