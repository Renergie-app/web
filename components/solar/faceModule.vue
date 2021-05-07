<template>
  <div class="mt-3 flex flex-col justify-center items-center">
    <div class="separator w-full"></div>
    <h1 class="text-2xl text-center font-semibold">
      Façade {{ face.orientation }}
    </h1>
    <div class="flex max-w-xs flex-row mb-1">
      <input-text
        title="Surface"
        :bus="bus"
        id="1"
        @commit="changeArea"
        :rules="[{ name: 'Number', externalData: 'none' }]"
      >
      </input-text>
      <input-text
        v-if="face !== undefined && face.angle !== 90 && face.angle !== 0"
        title="Angle"
        :bus="bus"
        id="2"
        @commit="changeAngle"
        :rules="[{ name: 'Number', externalData: 'none' }]"
      >
      </input-text>
    </div>
    <div class="flex flex-col font-light">
      <div>
        <p class="tip">
          Nombre de panneaux : <b>{{ face.nb }}</b>
          <span class="tip-text"
            >Un panneau couvre environ 2 m². Cette valeur peut varier en
            fonction des fournisseurs.</span
          >
        </p>
      </div>
      <div>
        <p class="tip">
          Production éléctrique : <b>{{ face.prod }} kWh / an </b>
          <span class="tip-text">
            Cette valeur dépend de la surface des panneaux, de l'angle de pose
            et du taux d'ensoleillement de votre région
          </span>
        </p>
      </div>
      <div>
        <p>
          Coût : <b>{{ face.price }} €</b>
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.separator {
  opacity: 30%;
  height: 2px;
  margin-bottom: 10px;
  background: rgb(0, 0, 0);
  background: linear-gradient(
    90deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.5) 25%,
    rgba(0, 0, 0, 1) 50%,
    rgba(0, 0, 0, 0.5) 75%,
    rgba(0, 0, 0, 0) 100%
  );
}
b {
  color: var(--red);
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

