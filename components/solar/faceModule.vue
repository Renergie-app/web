<template>
  <div class="mt-3 flex flex-col p-5 rounded-3xl bg-white shadow-2xl">
    <h1>Façade {{ face.orientation }}</h1>
    <p>Surface de panneaux :</p>
    <input-text
      class="mb-5"
      :bus="bus"
      id="1"
      @commit="changeArea"
      :rules="[{ name: 'Number', externalData: 'none' }]"
    >
    </input-text>
    <div
      v-if="face !== undefined && face.angle !== 90 && face.angle !== 0"
      class="mb-5"
    >
      <p>Angle :</p>
      <input-text
        :bus="bus"
        id="2"
        @commit="changeAngle"
        :rules="[{ name: 'Number', externalData: 'none' }]"
      >
      </input-text>
    </div>
    <p>
      Production éléctrique : <span>{{ face.prod }} kWh </span>
    </p>
    <p>
      Gain en argent : <span>{{ face.gain }} € / an</span>
    </p>
    <p>
      Coût : <span>{{ face.price }} €</span>
    </p>
    <p>
      Nombre de panneaux : <span>{{ face.nb }}</span>
    </p>
  </div>
</template>

<style scoped>
span {
  font-weight: 700;
  font-size: 1rem;
}
</style>

<script>
import Vue from 'vue'

export default {
  name: 'faceModule',
  props: ['face'],

  data: () => ({
    bus: new Vue(),
  }),

  methods: {
    changeArea(data) {
      if (data.valid) {
        this.$store.commit('setFaceArea', {
          name: this.face.orientation,
          value: parseInt(data.text),
        })
        this.$emit('change')
      }
    },
    changeAngle(data) {
      if (data.valid) {
        this.$store.commit('setFaceAngle', {
          name: this.face.orientation,
          value: parseInt(data.text),
        })
        this.$emit('change')
      }
    },
  },

  mounted() {
    if (this.face != null) {
      this.bus.$emit('setText1', this.face.area)
      this.bus.$emit('setText2', this.face.angle)
    }
  },
}
</script>

