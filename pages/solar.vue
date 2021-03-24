<template>
  <div class="mt-5 h-screen w-screen items-center justify-center">
    <single-button text="Retour" @clicked="returnpage"></single-button>
    <h1> Ajouts de panneaux photovoltaïques : </h1>
    <br>
    <h2> Projet de production éléctrique : </h2>
    <check-box text="Vente Totale" :bus="bus" id="0" @change="changeSellAll"> </check-box>
    <check-box text="AutoConsommation et vente surplus" :bus="bus" id="1" @change="changeAutoC"> </check-box>
    <br>
    <h2> Mode de pose : </h2>
    <check-box text="Intégration" :bus="bus" id="2" @change="changeIntegration"> </check-box>
    <check-box text="Surimposition" :bus="bus" id="3" @change="changeSurimposition"> </check-box>
    <br>
    <face-selector v-if="userInfo!=null" :solarfaces="userInfo.solarModule.faces"></face-selector>
    <face-module v-if="userInfo!=null" v-for="(face, index) in correctFaces" :key="index" :face="face"></face-module>
  </div>
</template>

<script>
import Vue from "vue";

export default {
  name: "solar",

  data: () => ({
    userInfo: null,
    bus: new Vue(),
  }),

  computed:{
    correctFaces(){
      if(this.userInfo == null) return [];
      return this.userInfo.solarModule.faces.filter(face => face.pose);
    }
  },

  methods:{
    returnpage(){
      this.saveStore();
      this.$router.push("/home");
    },
    changeSellAll(val){
      this.userInfo.sellAll = val;
      this.bus.$emit("setCheckBox1", !val);
      this.saveStore();
    },
    changeAutoC(val){
      this.userInfo.sellAll = !val;
      this.bus.$emit("setCheckBox0", !val);
      this.saveStore();
    },
    changeIntegration(val){
      this.userInfo.integration = val;
      this.bus.$emit("setCheckBox3", !val);
      this.saveStore();
    },
    changeSurimposition(val){
      this.userInfo.integration = !val;
      this.bus.$emit("setCheckBox2", !val);
      this.saveStore();
    },
    saveStore(){
      this.$store.commit("setUserInfo", this.userInfo)
    }
  },

  mounted() {
    this.userInfo = this.$store.getters["getUserInfo"]
    if(this.userInfo==null){
      this.$router.push("/");
    } else {
      if(this.userInfo.sellAll)this.bus.$emit("setCheckBox0", true);
      else this.bus.$emit("setCheckBox1", true);
      if(this.userInfo.integration) this.bus.$emit("setCheckBox2", true);
      else this.bus.$emit("setCheckBox3", true);
    }
  }
}
</script>

<style scoped>

</style>
