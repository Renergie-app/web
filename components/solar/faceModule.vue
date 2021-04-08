<template>
  <div class="mb-1" style="background-color: #3a97a4; width: 800px; height:230px">
    <h1 class="pt-2 mb-2"> Façade {{ face.orientation }}</h1>
    <p class="mt-1"> Surface de panneaux : </p>
    <input-text class="mb-5" :bus="bus" id="1" @commit="changeArea" :rules="[{name : 'Number', externalData : 'none'}]"> </input-text>
    <div v-if="face!==undefined && face.angle!==90 && face.angle!==0" class="mb-5">
      <p> Angle : </p>
      <input-text :bus="bus" id="2" @commit="changeAngle" :rules="[{name : 'Number', externalData : 'none'}]"> </input-text>
    </div>
    <p> Production éléctrique : {{ face.prod }} kWh</p>
    <p> Gain en argent : {{ face.gain }} € / an</p>
  </div>
</template>

<script>
import Vue from "vue";

export default {
  name: "faceModule",
  props:["face"],

  data: () => ({
    bus: new Vue(),
  }),

  methods:{
    changeArea(data){
      if(data.valid){
        this.$store.commit("setFaceArea", {name : this.face.orientation, value : parseInt(data.text)})
        this.$emit("change");
      }
    },
    changeAngle(data){
      if(data.valid){
        this.$store.commit("setFaceAngle", {name : this.face.orientation, value : parseInt(data.text)})
        this.$emit("change");
      }
    },
  },

  mounted() {
    if(this.face!=null){
      this.bus.$emit("setText1", this.face.area);
      this.bus.$emit("setText2", this.face.angle);
    }
  }
}
</script>

<style scoped>

</style>
