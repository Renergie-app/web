<template>
  <page-container>
    <div
      v-if="state === -1"
      class="flex flex-col justify-center items-center m-5 mt-20 mb-20"
    >
      <logo />
      <info-box>
        Votre logement ne remplis pas les conditions pour nécessaires pour la
        pose d'éoliennes. Il n'existe aucune installation d'éolienne pour les
        appartements.
      </info-box>
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
      class="flex flex-col justify-center items-center m-5 mt-20 mb-20"
    >
      <single-button @clicked="returnpage">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
          <path
            d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"
          />
        </svg>
      </single-button>
      <info-box>
        <p>
          Avant de commencer la simulation pour poser des éoliennes, vous devez
          savoir quelques informations :
        </p>
        <p>
          • Il est impératif qu'il y ait suffisament de vents où se trouve votre
          logement pour le bon fonctionnement de l'éolienne.
        </p>
        <p>
          • Veiller à qu'il n'y ait pas d'obstacles autour du logement qui
          pourrait couper le vent.
        </p>
        <p>
          • L'éolien est un aménagement coûteux. Compter au minimum pour 15 000
          €.
        </p>
      </info-box>

      <button-image @click="passeInfo" title="Suivant">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 514 512">
          <path
            d="M350.1 480h-48.32l-5-76.66L221 314l-10.78 166H161.9a36.94 36.94 0 0 0-33 20.42A8 8 0 0 0 136 512h240a8 8 0 0 0 7.15-11.58A36.93 36.93 0 0 0 350.1 480zm48.59-54.21l-88.35-182.32a55.73 55.73 0 0 1-.73-42.79l73.28-179.07a15.8 15.8 0 0 0-27.5-15.07L241.27 163.21a55.74 55.74 0 0 1-36.47 22.4L13.32 215.94A15.81 15.81 0 0 0 0 231.89v.23a15.8 15.8 0 0 0 14.1 15.35L203.83 268a55.78 55.78 0 0 1 37.54 20.58l130.31 153.5a15.81 15.81 0 0 0 20.53 3.63l.19-.12a15.79 15.79 0 0 0 6.29-19.8zM256 248a24 24 0 1 1 24-24 24 24 0 0 1-24 24z"
          />
        </svg>
      </button-image>
    </div>
    <div
      v-if="state === 2 || state === 3"
      class="flex flex-col justify-center items-center"
    >
      <logo />
      <question-card :question="questionList[indexQuestion].question">
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
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 514 512">
                <path
                  d="M350.1,480h-48.3c-1.5-17.8-3-35.6-4.5-53.4c60.9-16.2,134.5-96.8,66.1-148.7c-53.4-42.5-146.4-85.7-196.9-122.3
	c8.8-25.4,46.3-43.9,73.1-47.5c34.5-5,84.7,14.9,96,48.1c-8.5,9.3-32.9,25.5-50.9,36.8c20.2,11.8,38,22.5,52.4,31.5
	c125.8-68.4,1.8-181.2-97.5-171.7v0c-34.8,3.2-68.8,17.7-95,41c-20.7,17.9-35.7,45.3-33,67.5c7.6,43.5,41.2,49.3,82.8,76.4
	c29.7,17.1,61.9,35.6,91.4,53.9c14.6,9,43,27,49.9,35.5c-2.5,16.9-24.4,34.4-43.2,42.7c-1.2-14-2.4-27.9-3.6-41.9
	c-14-9.1-33.4-21-59.8-36.5l0,0l-2.6-1.5c0,0,0,0,0,0c-0.1-0.1-0.2-0.1-0.3-0.2v0c-20.5-12-35.3-20.5-51.6-29.9
	c-13.1,8-22.7,14.2-30.1,20c-66.5,48.3,8.7,133.9,70.3,147.5c-1.5,17.6-3,35.1-4.5,52.7c-23.9,1.7-69.3-8.6-81.3,20.4
	c-2,3.9-0.4,8.8,3.6,10.7c3.9,2.5,239.4,0,243.5,0.9C399.9,505.8,365,476.7,350.1,480z M219.5,370.7c-14.4-6-26.7-14.9-34.9-23.8
	c-8.6-9.3-10.9-16.5-11-19.7c4.8-5.7,52.6-34.4,52.6-34.4S221.7,344.8,219.5,370.7z"
                />
              </svg>
            </button-image>
          </div>
          <info-box>
            Il faut savoir qu'une éolienne horizontale a un rendement électrique
            plus élevé et est généralement moins cher. En contrepartie,
            l'éolienne verticale est plus silencieuse et peut être plus
            versatile grâce à son fonctionnement avec des vents fort ainsi que
            faibles.
          </info-box>
        </div>
      </question-card>
    </div>

    <div v-if="state === 4" class="flex flex-col justify-center items-center">
      <logo />
      <single-button @clicked="returnpageBilan">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
          <path
            d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"
          />
        </svg>
      </single-button>
      <div class="card-container flex flex-row items-start mb-10">
        <div
          class="card m-10 flex flex-col items-center p-5 rounded-3xl bg-white shadow-2xl font-light"
        >
          <h1>
            <p>Ajouts d'éoliennes domestiques</p>
          </h1>
          <h2>
            Type : <b>{{ userInfo.eolien.type }}</b>
          </h2>

          <h2 class="select-none">
            Nombre :
            <b>
              <span
                class="p-2 text-black font-mono opacity-25 rounded-2xl cursor-pointer"
                @click="reduceAmount"
                >-</span
              >
              {{ userInfo.eolien.amount }}
              <span
                class="p-2 text-black font-mono opacity-25 rounded-2xl cursor-pointer"
                @click="addAmount"
                >+</span
              >
            </b>
          </h2>
          <div style="max-width: 14rem">
            <h2 class="tip">
              Part d'autoconsomation : <b>{{ autoconsommation }} % </b>
              <span class="tip-text">
                <p>
                  Quand la production d'énergie est trop importante, il devient
                  impossible de consommer entièrement cette énergie. Il y a
                  alors du gaspillage
                </p>
                <p class="mt-3">
                  C'est pourquoi il est possible de revendre une partie de
                  l'électricité générée à des fournisseurs tels que EDF
                </p>
              </span>
            </h2>
            <input
              class="w-full"
              type="range"
              min="0"
              max="100"
              value="50"
              v-model="autoconsommation"
              @input="changeAutoConso"
            />
          </div>

          <single-button
            text="Changer le type d'éolienne"
            @clicked="reset"
            class="m-5"
          >
          </single-button>
        </div>
        <bilan-panel class="m-10">
          <h1>Bilan énergétique</h1>
          <h3>
            Production électrique :
            <b>{{ userInfo.eolien.result.powerOutputKWH }} kWh / an</b>
          </h3>

          <h1>Bilan financier</h1>

          <h3>
            Coût du materiel :
            <b>
              {{ userInfo.eolien.result.cost - userInfo.eolien.amount * 10000 }}
              €</b
            >
          </h3>
          <h3>
            Coût d'installation : <b>{{ userInfo.eolien.amount * 10000 }} €</b>
          </h3>
          <div class="break" />
          <h3>
            Coût total : <b> {{ userInfo.eolien.result.cost }} €</b>
          </h3>

          <h1>Rentabilité</h1>
          <h3>
            Revenu Annuel Estimé : <b> {{ getGainAll }} € </b>
          </h3>
          <h3>
            Economie Annuelle sur la facture :
            <b> {{ getEconomieFacture }} €</b>
          </h3>
          <div class="break" />
          <h3>
            Profit Total Annuel : <b> {{ getProfit }} €</b>
          </h3>
          <h3>
            Amortissement finançier après <b> {{ rentable }} ans</b>
          </h3>
        </bilan-panel>
      </div>
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
import questions from 'assets/eolienQuestions.json'
import infoBox from '../components/home/infoBox.vue'
import BilanPanel from '../components/bilanPanel.vue'
import Logo from '../components/Logo.vue'
import WindPanelRequest from '../graphQL/windturbine.graphql'
import EnergeticLabel from '../components/home/energeticLabel.vue'

export default {
  components: { infoBox, BilanPanel, Logo, EnergeticLabel },
  name: 'eolien',

  computed: {
    getGainAll() {
      if (this.userInfo == null) return 0
      var conso = this.userInfo.eolien.autoconsommation
      return Math.trunc(
        (this.userInfo.eolien.result.profit * (100 - conso)) / 100
      )
    },
    getEconomieFacture() {
      if (this.userInfo == null) return 0
      return Math.trunc(
        ((this.userInfo.eolien.result.powerOutputKWH * this.autoconsommation) /
          100) *
          0.1765
      )
    },
    getProfit() {
      return this.getEconomieFacture + this.getGainAll
    },
    rentable() {
      if (this.userInfo == null) return 0
      if (this.userInfo.eolien.result.powerOutputKWH === 0) return 0
      return (this.userInfo.eolien.result.cost / this.getProfit).toFixed(2)
    },
  },

  data: () => ({
    state: 1,
    userInfo: null,
    indexQuestion: -1,
    questionList: questions,
    autoconsommation: 20,
    amount: 1,
  }),

  methods: {
    reduceAmount() {
      this.$store.commit(
        'setAmountEolien',
        Math.max(0, this.userInfo.eolien.amount - 1)
      )
      this.userInfo.eolien.amount = JSON.parse(
        JSON.stringify(this.$store.getters['getUserInfo'])
      ).eolien.amount
      this.requestBack()
    },
    addAmount() {
      this.$store.commit('setAmountEolien', this.userInfo.eolien.amount + 1)
      this.userInfo.eolien.amount = JSON.parse(
        JSON.stringify(this.$store.getters['getUserInfo'])
      ).eolien.amount
      this.requestBack()
    },
    changeAutoConso() {
      this.$store.commit('setAutoConsommationEolien', this.autoconsommation)
      this.userInfo.eolien.autoconsommation = JSON.parse(
        JSON.stringify(this.$store.getters['getUserInfo'])
      ).eolien.autoconsommation
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
        this.endQuestion()
        return
      }
      this.indexQuestion++
      this.state++
    },
    endQuestion() {
      this.state++
      this.requestBack()
    },
    async requestBack() {
      const { data } = await this.$apollo.query({
        query: WindPanelRequest,
        variables: {
          amount: this.userInfo.eolien.amount,
          type:
            this.userInfo.eolien.type === 'Eolienne Horizontale'.toLowerCase()
              ? 'HORIZONTAL'
              : 'VERTICAL',
          zip: this.userInfo.postalCode.value,
        },
      })
      this.$store.commit('setDataEolien', data)
      this.userInfo.eolien.result = JSON.parse(
        JSON.stringify(this.$store.getters['getUserInfo'])
      ).eolien.result
    },
  },

  mounted() {
    this.userInfo = JSON.parse(
      JSON.stringify(this.$store.getters['getUserInfo'])
    )
    if (this.userInfo.homeType.value === 'None') this.$router.push('/')
    if (this.userInfo.homeType.value === 'appartement') this.state = -1
    if (this.userInfo.eolien.type !== '') this.state = 4
    console.log(this.userInfo)
    this.autoconsommation = this.userInfo.eolien.autoconsommation
    this.amount = this.userInfo.eolien.amount
    this.requestBack()
  },
}
</script>
