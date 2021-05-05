<template>
  <page-container>
    <logo class="mb-10" />
    <div v-if="indexQuestion > 0">
      <single-button class="" @clicked="previousQuestion">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
          <path
            d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"
          /></svg
      ></single-button>
    </div>
    <question-card :question="questionList[indexQuestion].question">
      <div
        v-if="questionList[indexQuestion].type === 'buttonChoice'"
        class="flex flex-row justify-center items-center flex-wrap"
      >
        <button-image
          @click="choiceHouse"
          :title="questionList[indexQuestion].choices[0].text"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
            <path
              d="M570.63,240,512,187.36V56a24,24,0,0,0-24-24H392a24,24,0,0,0-24,24v2.08l-53.44-48a40,40,0,0,0-53.12,0L5.37,240A16,16,0,0,0,4,262.58l10.62,11.95a16,16,0,0,0,22.59,1.34l26.75-24V472a40,40,0,0,0,40,40H472a40,40,0,0,0,40-40V251.85l26.75,24a16,16,0,0,0,22.59-1.34L572,262.58A16,16,0,0,0,570.63,240ZM464,464H112V208.75l176-158,176,158Zm0-319.74-48-43.09V80h48ZM224,208v96a16,16,0,0,0,16,16h96a16,16,0,0,0,16-16V208a16,16,0,0,0-16-16H240A16,16,0,0,0,224,208Z"
            />
          </svg>
        </button-image>
        <button-image
          @click="choiceHouse"
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
        class="flex flex-row justify-center items-center flex-nowrap"
        v-if="questionList[indexQuestion].type === 'inputText'"
      >
        <input-text
          :bus="bus"
          :rules="questionList[indexQuestion].rules"
          @change="changeText"
        >
        </input-text>
        <single-button
          @clicked="submitNextQuestion"
          :enable="questionListValid[indexQuestion]"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
            <path
              d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"
            />
          </svg>
        </single-button>
      </div>
    </question-card>
  </page-container>
</template>

<script>
import Vue from 'vue'
import initialQuestion from 'assets/initialQuestions.json'
import uinfo from 'assets/userInfo.json'
import PageContainer from '../components/PageContainer.vue'
import Logo from '../components/Logo.vue'
import SingleButton from '../components/Inputs/SingleButton.vue'

export default {
  components: { PageContainer, Logo, SingleButton },
  data: () => ({
    questionList: JSON.parse(JSON.stringify(initialQuestion)),
    questionListValid: [true, false, false, false],
    indexQuestion: 0,
    userInfo: JSON.parse(JSON.stringify(uinfo)),
    bus: new Vue(),
  }),

  methods: {
    choiceHouse(s) {
      this.nextQuestion()
      this.userInfo.homeType.value = s
    },
    changeText(data) {
      this.questionListValid[this.indexQuestion] = data.valid
      this.$forceUpdate()
      switch (this.indexQuestion) {
        case 1:
          this.userInfo.postalCode.value = data.text
          break
        case 2:
          this.userInfo.homeArea.value = data.text
          break
        case 3:
          this.userInfo.elecConsumptionTotal.value = Math.trunc(parseFloat(data.text) / 0.1765);
          break
      }
    },
    submitNextQuestion() {
      if (this.questionListValid[this.indexQuestion]) {
        this.nextQuestion()
      }
    },
    nextQuestion() {
      if (this.indexQuestion + 1 >= this.questionList.length) {
        this.endQuestion()
        return
      }
      this.indexQuestion++
      this.refreshInputText()
    },
    refreshInputText() {
      process.nextTick(() => {
        var text = ''
        switch (this.indexQuestion) {
          case 1:
            text = this.userInfo.postalCode.value
            break
          case 2:
            text = this.userInfo.homeArea.value
            break
          case 3:
            text = Math.trunc(parseFloat(this.userInfo.elecConsumptionTotal.value) * 0.1765);
            break
        }
        this.bus.$emit('setText', text)
      })
    },
    previousQuestion() {
      if (this.indexQuestion - 1 < 0) return
      this.indexQuestion--
      this.refreshInputText()
    },
    endQuestion() {
      this.$store.commit('setUserInfo', this.userInfo)
      this.$router.push('/home')
    },
  },

  mounted() {
    if (this.$store.getters['getUserInfo'] != null)
      this.userInfo = JSON.parse(
        JSON.stringify(this.$store.getters['getUserInfo'])
      )
  },
}
</script>
