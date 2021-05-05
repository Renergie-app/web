<template>
  <page-container>


    <div v-if="state === -1">
      <p>
        Votre logement ne remplis pas les conditions pour nécessaires pour la pose d'éoliennes.
      </p>
      <single-button @clicked="returnpage">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
          <path
            d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"
          />
        </svg>
      </single-button>
    </div>


    <div v-if="state === 1">
      <p>
        Avant de commencer la simulation pour poser des éoliennes, vous devez savoir quelques informations : <br>
        - Il est impératif qu'il y ait suffisament de vents où se trouve votre logement pour le bon fonctionnement de l'éolienne. <br>
        - Veiller à qu'il n'y ait pas d'obstacles autour du logement qui pourrait couper le vent.
      </p>
      <single-button @clicked="returnpage">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
          <path
            d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"
          />
        </svg>
      </single-button>
      <button-image
        @click="passeInfo"
        title="Suivant"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
          <path
            d="M570.63,240,512,187.36V56a24,24,0,0,0-24-24H392a24,24,0,0,0-24,24v2.08l-53.44-48a40,40,0,0,0-53.12,0L5.37,240A16,16,0,0,0,4,262.58l10.62,11.95a16,16,0,0,0,22.59,1.34l26.75-24V472a40,40,0,0,0,40,40H472a40,40,0,0,0,40-40V251.85l26.75,24a16,16,0,0,0,22.59-1.34L572,262.58A16,16,0,0,0,570.63,240ZM464,464H112V208.75l176-158,176,158Zm0-319.74-48-43.09V80h48ZM224,208v96a16,16,0,0,0,16,16h96a16,16,0,0,0,16-16V208a16,16,0,0,0-16-16H240A16,16,0,0,0,224,208Z"
          />
        </svg>
      </button-image>
    </div>


    <question-card v-if="state === 2 || state === 3" :question="questionList[indexQuestion].question">

      <div
        v-if="questionList[indexQuestion].type === 'buttonChoice'"
        class="flex flex-row justify-center items-center flex-wrap"
      >
        <div v-if="questionList[indexQuestion].numero === 1">
          <button-image
            @click="choice1"
            :title="questionList[indexQuestion].choices[0].text"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
              <path
                d="M570.63,240,512,187.36V56a24,24,0,0,0-24-24H392a24,24,0,0,0-24,24v2.08l-53.44-48a40,40,0,0,0-53.12,0L5.37,240A16,16,0,0,0,4,262.58l10.62,11.95a16,16,0,0,0,22.59,1.34l26.75-24V472a40,40,0,0,0,40,40H472a40,40,0,0,0,40-40V251.85l26.75,24a16,16,0,0,0,22.59-1.34L572,262.58A16,16,0,0,0,570.63,240ZM464,464H112V208.75l176-158,176,158Zm0-319.74-48-43.09V80h48ZM224,208v96a16,16,0,0,0,16,16h96a16,16,0,0,0,16-16V208a16,16,0,0,0-16-16H240A16,16,0,0,0,224,208Z"
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


        <div v-if="questionList[indexQuestion].numero === 2">
          <button-image
            @click="choice2"
            :title="questionList[indexQuestion].choices[0].text"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
              <path
                d="M570.63,240,512,187.36V56a24,24,0,0,0-24-24H392a24,24,0,0,0-24,24v2.08l-53.44-48a40,40,0,0,0-53.12,0L5.37,240A16,16,0,0,0,4,262.58l10.62,11.95a16,16,0,0,0,22.59,1.34l26.75-24V472a40,40,0,0,0,40,40H472a40,40,0,0,0,40-40V251.85l26.75,24a16,16,0,0,0,22.59-1.34L572,262.58A16,16,0,0,0,570.63,240ZM464,464H112V208.75l176-158,176,158Zm0-319.74-48-43.09V80h48ZM224,208v96a16,16,0,0,0,16,16h96a16,16,0,0,0,16-16V208a16,16,0,0,0-16-16H240A16,16,0,0,0,224,208Z"
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


      </div>
    </question-card>

    <div v-if="state === 4">
      <p>
        BILAN INSTALLATION EOLIENNE :
      </p>
      <p>
        type : {{ userInfo.eolien.type }}
      </p>
      <p>
        Cout total : XXX €
      </p>
      <br>
      <p>
        Production électrique /an : XXX kWh
      </p>
      <p>
        Gain revente totale /an : XXX
      </p>
      <p>
        Amortissement finançier après XX ans
      </p>


      <single-button @clicked="returnpageBilan">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
          <path
            d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"
          />
        </svg>
      </single-button>

      <single-button text="Changer mes informations" @clicked="reset">
      </single-button>
    </div>

  </page-container>
</template>

<script>
import questions from 'assets/eolienQuestions.json'

export default {
  name: "eolien",

  data : () => ({
    state: 1,
    userInfo: null,
    indexQuestion : -1,
    questionList : questions,
  }),

  methods:{
    reset(){
      this.userInfo.eolien.type = "";
      this.userInfo.eolien.pose = "";
      this.indexQuestion = -1;
      this.state = 1;
    },
    passeInfo(){
      this.state = 3;
      this.indexQuestion = 1;
    },
    choice1(choice){
      this.userInfo.eolien.pose = choice;
      this.nextQuestion();
    },
    choice2(choice){
      this.userInfo.eolien.type = choice;
      this.nextQuestion();
    },
    returnpageBilan(){
      this.$store.commit('setUserInfo', JSON.parse(JSON.stringify(this.userInfo)));
      this.returnpage();
    },
    returnpage(){
      this.$router.push('/home');
    },
    nextQuestion() {
      if (this.indexQuestion + 1 >= this.questionList.length) {
        this.endQuestion()
        return
      }
      this.indexQuestion++
      this.state++;
    },
    endQuestion(){
      this.state++;
    },
  },

  mounted() {
    this.userInfo = JSON.parse(JSON.stringify(this.$store.getters['getUserInfo']));
    if (this.userInfo.homeType.value === 'None') this.$router.push('/');
    if (this.userInfo.homeType.value === "appartement") this.state = -1;
    if(this.userInfo.eolien.type !== "" && this.userInfo.eolien.pose !== "") this.state = 4;
  }
}
</script>

<style scoped>

</style>
