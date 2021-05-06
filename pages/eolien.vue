<template>
  <page-container>
    <div v-if="state === -1">
      <h2>
        Votre logement ne remplis pas les conditions pour nécessaires pour la
        pose d'éoliennes.
      </h2>
      <single-button @clicked="returnpage">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
          <path
            d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"
          />
        </svg>
      </single-button>
    </div>

    <div
      v-if="state === 1"
      class="flex flex-col justify-center items-center m-20"
    >
      <single-button @clicked="returnpage">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
          <path
            d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"
          />
        </svg>
      </single-button>
      <info-box>
        Avant de commencer la simulation pour poser des éoliennes, vous devez
        savoir quelques informations : <br />
        <br />

        • Il est impératif qu'il y ait suffisament de vents où se trouve votre
        logement pour le bon fonctionnement de l'éolienne. <br />
        • Veiller à qu'il n'y ait pas d'obstacles autour du logement qui
        pourrait couper le vent.<br />
        • L'éolien est un aménagement coûteux. Compter au minimum pour 15 000 €.
      </info-box>

      <button-image @click="passeInfo" title="Suivant">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 514 512">
          <path
            d="M350.1 480h-48.32l-5-76.66L221 314l-10.78 166H161.9a36.94 36.94 0 0 0-33 20.42A8 8 0 0 0 136 512h240a8 8 0 0 0 7.15-11.58A36.93 36.93 0 0 0 350.1 480zm48.59-54.21l-88.35-182.32a55.73 55.73 0 0 1-.73-42.79l73.28-179.07a15.8 15.8 0 0 0-27.5-15.07L241.27 163.21a55.74 55.74 0 0 1-36.47 22.4L13.32 215.94A15.81 15.81 0 0 0 0 231.89v.23a15.8 15.8 0 0 0 14.1 15.35L203.83 268a55.78 55.78 0 0 1 37.54 20.58l130.31 153.5a15.81 15.81 0 0 0 20.53 3.63l.19-.12a15.79 15.79 0 0 0 6.29-19.8zM256 248a24 24 0 1 1 24-24 24 24 0 0 1-24 24z"
          />
        </svg>
      </button-image>
    </div>

    <question-card
      v-if="state === 2 || state === 3"
      :question="questionList[indexQuestion].question"
    >
      <div
        v-if="questionList[indexQuestion].type === 'buttonChoice'"
        class="flex flex-col justify-center items-center flex-wrap"
      >
        <div v-if="questionList[indexQuestion].numero === 1">
          <button-image
            @click="choice1"
            :title="questionList[indexQuestion].choices[0].text"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 514 512">
              <path
                d="M350.1 480h-48.32l-5-76.66L221 314l-10.78 166H161.9a36.94 36.94 0 0 0-33 20.42A8 8 0 0 0 136 512h240a8 8 0 0 0 7.15-11.58A36.93 36.93 0 0 0 350.1 480zm48.59-54.21l-88.35-182.32a55.73 55.73 0 0 1-.73-42.79l73.28-179.07a15.8 15.8 0 0 0-27.5-15.07L241.27 163.21a55.74 55.74 0 0 1-36.47 22.4L13.32 215.94A15.81 15.81 0 0 0 0 231.89v.23a15.8 15.8 0 0 0 14.1 15.35L203.83 268a55.78 55.78 0 0 1 37.54 20.58l130.31 153.5a15.81 15.81 0 0 0 20.53 3.63l.19-.12a15.79 15.79 0 0 0 6.29-19.8zM256 248a24 24 0 1 1 24-24 24 24 0 0 1-24 24z"
              />
            </svg>
          </button-image>
          <button-image
            @click="choice1"
            :title="questionList[indexQuestion].choices[1].text"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path
                d="M436 480h-20V24c0-13.255-10.745-24-24-24H56C42.745 0 32 10.745 32 24v456H12c-6.627 0-12 5.373-12 12v20h448v-20c0-6.627-5.373-12-12-12zM128 76c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12V76zm0 96c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40zm52 148h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12zm76 160h-64v-84c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v84zm64-172c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40zm0-96c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40zm0-96c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12V76c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40z"
              />
            </svg>
          </button-image>
        </div>

        <div
          class="flex flex-row justify-center items-center"
          v-if="questionList[indexQuestion].numero === 2"
        >
          <button-image
            @click="choice2"
            :title="questionList[indexQuestion].choices[0].text"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 514 512">
              <path
                d="M350.1 480h-48.32l-5-76.66L221 314l-10.78 166H161.9a36.94 36.94 0 0 0-33 20.42A8 8 0 0 0 136 512h240a8 8 0 0 0 7.15-11.58A36.93 36.93 0 0 0 350.1 480zm48.59-54.21l-88.35-182.32a55.73 55.73 0 0 1-.73-42.79l73.28-179.07a15.8 15.8 0 0 0-27.5-15.07L241.27 163.21a55.74 55.74 0 0 1-36.47 22.4L13.32 215.94A15.81 15.81 0 0 0 0 231.89v.23a15.8 15.8 0 0 0 14.1 15.35L203.83 268a55.78 55.78 0 0 1 37.54 20.58l130.31 153.5a15.81 15.81 0 0 0 20.53 3.63l.19-.12a15.79 15.79 0 0 0 6.29-19.8zM256 248a24 24 0 1 1 24-24 24 24 0 0 1-24 24z"
              />
            </svg>
          </button-image>
          <button-image
            @click="choice2"
            :title="questionList[indexQuestion].choices[1].text"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path
                d="M436 480h-20V24c0-13.255-10.745-24-24-24H56C42.745 0 32 10.745 32 24v456H12c-6.627 0-12 5.373-12 12v20h448v-20c0-6.627-5.373-12-12-12zM128 76c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12V76zm0 96c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40zm52 148h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12zm76 160h-64v-84c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v84zm64-172c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40zm0-96c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40zm0-96c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12V76c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40z"
              />
            </svg>
          </button-image>
        </div>
        <info-box>
          Il faut savoir qu'une éolienne horizontale a un rendement électrique
          plus élevé et est généralement moins cher. En contrepartie, l'éolienne
          verticale est plus silencieuse et peut être plus versatile grâce à son
          fonctionnement avec des vents fort ainsi que faibles.
        </info-box>
      </div>
    </question-card>

    <div v-if="state === 4" class="flex flex-col justify-center items-center">
      <logo />
      <single-button @clicked="returnpageBilan">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
          <path
            d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"
          />
        </svg>
      </single-button>
      <bilan-panel class="m-10">
        <h1>Bilan d'installation éolienne :</h1>
        <button @click="reduceAmount"> - </button>
        <p>Amount : {{ userInfo.eolien.amount }} </p>
        <button @click="addAmount"> + </button>
        <p>Part d'autoconsomation : {{ autoconsommation }} %</p>
        <input
          type="range"
          min="0"
          max="100"
          value="50"
          class="ml-10"
          v-model="autoconsommation"
          @input="changeAutoConso"
        />
        <h2>
          type : <b>{{ userInfo.eolien.type }}</b>
        </h2>
        <h2>Cout total : <b> {{userInfo.eolien.result.cost}} €</b></h2>
        <br />
        <h2>Production électrique : <b>{{ userInfo.eolien.result.powerOutputKWH }} kWh / an</b></h2>
        <h3>-------------------------------------------------------</h3>
        <h2>Revenu Annuel Estimé : <b> {{ getGainAll }} € </b></h2>
        <h2>Economie Annuelle sur la facture : <b> {{ getEconomieFacture }} €</b></h2>
        <h3>-------------------------------------------------------</h3>
        <h2>Profit Total Annuel : <b> {{ getProfit }} €</b></h2>
        <h3>-------------------------------------------------------</h3>
        <h2>Amortissement finançier après <b> {{ rentable }} ans</b></h2>
      </bilan-panel>
      <single-button
        text="Changer mes informations"
        @clicked="reset"
        class="mb-24"
      >
      </single-button>
    </div>
  </page-container>
</template>

<script>
import questions from 'assets/eolienQuestions.json'
import infoBox from '../components/home/infoBox.vue'
import BilanPanel from '../components/bilanPanel.vue'
import Logo from '../components/Logo.vue'
import WindPanelRequest from "../graphQL/windturbine.graphql";

export default {
  components: { infoBox, BilanPanel, Logo },
  name: 'eolien',

  computed:{
    getGainAll() {
      if (this.userInfo == null) return 0
      var conso = this.userInfo.eolien.autoconsommation;
      return Math.trunc((this.userInfo.eolien.result.profit * (100 - conso)) / 100)
    },
    getEconomieFacture() {
      if (this.userInfo == null) return 0
      return Math.trunc(((this.userInfo.eolien.result.powerOutputKWH * this.autoconsommation) / 100) * 0.1765)
    },
    getProfit() {
      return this.getEconomieFacture + this.getGainAll
    },
    rentable() {
      if (this.userInfo == null) return 0
      if (this.userInfo.eolien.result.powerOutputKWH === 0) return 0
      return ((this.userInfo.eolien.result.cost) / this.getProfit).toFixed(2)
    },
  },


  data: () => ({
    state: 1,
    userInfo: null,
    indexQuestion: -1,
    questionList: questions,
    autoconsommation : 20,
    amount : 1,
  }),

  methods: {
    reduceAmount(){
      this.$store.commit('setAmountEolien', Math.max(0,(this.userInfo.eolien.amount-1)));
      this.userInfo.eolien.amount = JSON.parse(JSON.stringify(this.$store.getters['getUserInfo'])).eolien.amount;
      this.requestBack();
    },
    addAmount(){
      this.$store.commit('setAmountEolien', (this.userInfo.eolien.amount+1));
      this.userInfo.eolien.amount = JSON.parse(JSON.stringify(this.$store.getters['getUserInfo'])).eolien.amount;
      this.requestBack();
    },
    changeAutoConso(){
      this.$store.commit('setAutoConsommationEolien', this.autoconsommation);
      this.userInfo.eolien.autoconsommation = JSON.parse(JSON.stringify(this.$store.getters['getUserInfo'])).eolien.autoconsommation;
    },
    reset() {
      this.userInfo.eolien.type = ''
      this.userInfo.eolien.pose = ''
      this.indexQuestion = -1
      this.state = 1
    },
    passeInfo() {
      this.state = 3
      this.indexQuestion = 1
    },
    choice1(choice) {
      this.userInfo.eolien.pose = choice
      this.nextQuestion()
    },
    choice2(choice) {
      this.userInfo.eolien.type = choice
      this.nextQuestion()
    },
    returnpageBilan() {
      this.$store.commit(
        'setUserInfo',
        JSON.parse(JSON.stringify(this.userInfo))
      )
      this.returnpage()
    },
    returnpage() {
      this.$router.push('/home')
    },
    nextQuestion() {
      if (this.indexQuestion + 1 >= this.questionList.length) {
        this.endQuestion();
        return
      }
      this.indexQuestion++
      this.state++
    },
    endQuestion() {
      this.state++;
      this.requestBack();
    },
    async requestBack(){
      const {data} = await this.$apollo.query({
        query: WindPanelRequest,
        variables: {
          amount: this.userInfo.eolien.amount,
          type: (this.userInfo.eolien.type === "Eolienne Horizontale".toLowerCase() ? 'HORIZONTAL' : 'VERTICAL'),
          zip: this.userInfo.postalCode.value,
        },
      });
      this.$store.commit('setDataEolien', data);
      this.userInfo.eolien.result = JSON.parse(JSON.stringify(this.$store.getters['getUserInfo'])).eolien.result;
    },
  },

  mounted() {
    this.userInfo = JSON.parse(JSON.stringify(this.$store.getters['getUserInfo']));
    if (this.userInfo.homeType.value === 'None') this.$router.push('/')
    if (this.userInfo.homeType.value === 'appartement') this.state = -1
    if (this.userInfo.eolien.type !== '')
      this.state = 4;
    console.log(this.userInfo);
      this.autoconsommation = this.userInfo.eolien.autoconsommation;
      this.amount = this.userInfo.eolien.amount;
    this.requestBack();
  },
}
</script>

<style scoped>
</style>
