<template>
  <div>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="-30 0 300 230" width="300px" height="300px">
      <g>
        <polygon @click="onClick(6)" :class="{empty : getClass(6), fill: !getClass(6)}" points="224 175 140 187 140 107 222 101 224 175"/>
        <polygon @click="onClick(4)" :class="{empty : getClass(4), fill: !getClass(4)}" points="11 131 1 98 0 45 10 69 11 131"/>
        <polygon @click="onClick(1)" :class="{empty : getClass(1), fill: !getClass(1)}" points="138 106 12 68 44 13 158 35 138 106"/>
        <polygon @click="onClick(9)" :class="{empty : getClass(9), fill: !getClass(9)}" points="158 33 47 11 75 0 179 17 158 33"/>
        <polygon @click="onClick(7)" :class="{empty : getClass(7), fill: !getClass(7)}" points="236 70 223 98 161 35 180 18 236 70"/>
        <polygon @click="onClick(8)" :class="{empty : getClass(8), fill: !getClass(8)}" points="239 136 225 173 224 100 238 75 239 136"/>
        <polygon @click="onClick(3)" :class="{empty : getClass(3), fill: !getClass(3)}" points="41 14 1 43 11 66 41 14"/>
        <polygon @click="onClick(5)" :class="{empty : getClass(5), fill: !getClass(5)}" points="160 37 140 107 220 98 160 37"/>
        <polygon class="cls-2" points="18 156 21 154 8 155 10 162 14 160 29 167 35 163 18 156"/>
        <polygon class="cls-2" points="76.02 187.08 73.11 189.21 86.06 187.64 83.75 180.74 79.84 182.91 64.55 176.58 58.73 180.84 76.02 187.08"/>
        <polygon class="cls-2" points="31 183 18 195 15 194 16 202 28 199 25 198 37 186 31 183"/>
        <polygon @click="onClick(2)" :class="{empty : getClass(2), fill: !getClass(2)}" points="138 187 13 134 12 70 138 107 138 187"/>
        <text
          pointer-events="none"
          x="5"
          y="220"
          class="text"
          font-size="12">
          Sud
        </text>

        <text
          pointer-events="none"
          x="90"
          y="200"
          class="text"
          font-size="12">
          Est
        </text>

        <text
          pointer-events="none"
          x="-20"
          y="150"
          class="text"
          font-size="12">
          Ouest
        </text>

      </g>
    </svg>
  </div>
</template>

<script>
export default {
  name: "faceSelector",
  props:["solarfaces"],
  methods:{
    getClass(index){
      if(this.solarfaces===undefined) return true;
      if(this.solarfaces.filter(face => face.type === index && face.pose).length>0) return false;
      return true;
    },
    onClick(index){
      if(this.solarfaces===undefined) return;
      this.$store.commit("switchPoseSolarFace", index);
      //this.solarfaces.filter(face => face.type === index)[0].pose = !this.solarfaces.filter(face => face.type === index)[0].pose;
    }
  }
}
</script>

<style scoped>
.empty {
  fill: #dddddd;
}

.fill {
  fill: #4fbcd7;
}

.empty:hover {
  fill: #69b9e2;
  cursor: pointer;
}

.fill:hover {
  fill: #d94c4c;
  cursor: pointer;
}
</style>
