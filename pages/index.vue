<template>
  <div class="bg-gray-100 h-screen w-screen flex items-center justify-center">
    <question-card :question="questionList[indexQuestion].question">
      <div v-if="questionList[indexQuestion].type === 'buttonChoice'">
        <button-image @click="choiceHouse" v-for="(value, index) in questionList[indexQuestion].choices" :key="index" :title="value.text" :img="value.img" />
      </div>
      <div v-if="questionList[indexQuestion].type === 'inputText'">
        <input-text :bus="bus" :rules="questionList[indexQuestion].rules" @change="changeText"> </input-text>
        <SingleButton text="Suivant" @clicked="submitNextQuestion" :enable="questionListValid[indexQuestion]"> </SingleButton>
      </div>
    </question-card>
    <div v-if="indexQuestion>0">
      <SingleButton text="Retour" @clicked="previousQuestion"></SingleButton>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import initialQuestion from 'assets/initialQuestions.json';
import uinfo from 'assets/userInfo.json';

export default {
  data: () => ({
    questionList: JSON.parse(JSON.stringify(initialQuestion)),
    questionListValid: [true, false, false, false],
    indexQuestion: 0,
    userInfo:  JSON.parse(JSON.stringify(uinfo)),
    bus: new Vue(),
  }),

  methods:{
    choiceHouse(s){
      this.nextQuestion();
      this.userInfo.homeType.value = s;
    },
    changeText(data){
      this.questionListValid[this.indexQuestion] = data.valid;
      this.$forceUpdate();
      switch (this.indexQuestion) {
        case 1:
          this.userInfo.postalCode.value = data.text;
          break;
        case 2:
          this.userInfo.homeArea.value = data.text;
          break;
        case 3:
          this.userInfo.elecConsumptionTotal.value = data.text;
          break;
      }
    },
    submitNextQuestion(){
      if(this.questionListValid[this.indexQuestion]){
        this.nextQuestion();
      }
    },
    nextQuestion(){
      if(this.indexQuestion+1 >= this.questionList.length){
        this.endQuestion();
        return;
      }
      this.indexQuestion++;
      this.refreshInputText();
    },
    refreshInputText(){
      process.nextTick(() => {
        var text = "";
        switch (this.indexQuestion) {
          case 1:
            text = this.userInfo.postalCode.value;
            break;
          case 2:
            text = this.userInfo.homeArea.value;
            break;
          case 3:
            text = this.userInfo.elecConsumptionTotal.value;
            break;
        }
        this.bus.$emit("setText", text)
      });
    },
    previousQuestion(){
      if(this.indexQuestion-1 < 0) return;
      this.indexQuestion--;
      this.refreshInputText();
    },
    endQuestion(){
      this.$store.commit("setUserInfo", this.userInfo)
      this.$router.push("/home")
    }
  }
}
</script>
