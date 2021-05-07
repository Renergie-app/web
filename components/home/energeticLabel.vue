<template>
  <div class="w-60 mt-5">
    <energetic-bar
      :label="'A'"
      :current="value <= 50"
      :percent="25"
      :color="'#9AE077'"
    >
      <p>
        Il faut une consomation éléctrique inférieur à ??? pour atteindre ce
        pallier. (TODO)
      </p>
      <p v-if="value > 50" class="mt-6">
        Il vous faut {{ this.elecConsumption }} kWh en moins.
      </p>
    </energetic-bar>
    <energetic-bar
      :label="'B'"
      :current="value > 50 && value <= 90"
      :percent="37.5"
      :color="'#B6E075'"
    >
      <p>
        Il faut une consomation éléctrique inférieur à ??? pour atteindre ce
        pallier. (TODO)
      </p>
      <p v-if="value > 90" class="mt-6">
        Il vous faut {{ this.elecConsumption }} kWh en moins.
      </p>
    </energetic-bar>
    <energetic-bar
      :label="'C'"
      :current="value > 90 && value <= 150"
      :percent="50"
      :color="'#E0DE7B'"
    >
      <p>
        Il faut une consomation éléctrique inférieur à ??? pour atteindre ce
        pallier. (TODO)
      </p>
      <p v-if="value > 150" class="mt-6">
        Il vous faut {{ this.elecConsumption }} kWh en moins.
      </p>
    </energetic-bar>
    <energetic-bar
      :label="'D'"
      :current="value > 150 && value <= 230"
      :percent="62.5"
      :color="'#E0D07C'"
    >
      <p>
        Il faut une consomation éléctrique inférieur à ??? pour atteindre ce
        pallier. (TODO)
      </p>
      <p v-if="value > 230" class="mt-6">
        Il vous faut {{ this.elecConsumption }} kWh en moins.
      </p>
    </energetic-bar>
    <energetic-bar
      :label="'E'"
      :current="value > 230 && value <= 330"
      :percent="75"
      :color="'#E0BC79'"
    >
      <p>
        Il faut une consomation éléctrique inférieur à ??? pour atteindre ce
        pallier. (TODO)
      </p>
      <p v-if="value > 330" class="mt-6">
        Il vous faut {{ this.elecConsumption }} kWh en moins.
      </p>
    </energetic-bar>
    <energetic-bar
      :label="'F'"
      :current="value > 330 && value <= 450"
      :percent="87.5"
      :color="'#E0A374'"
    >
      <p>
        Il faut une consomation éléctrique inférieur à ??? pour atteindre ce
        pallier. (TODO)
      </p>
      <p v-if="value > 450" class="mt-6">
        Il vous faut {{ this.elecConsumption }} kWh en moins.
      </p>
    </energetic-bar>
    <energetic-bar
      :label="'G'"
      :current="value > 450"
      :percent="100"
      :color="'#E08363'"
    >
      <p>
        Il faut une consomation éléctrique inférieur à ??? pour atteindre ce
        pallier. (TODO)
      </p>
    </energetic-bar>
    <div class="flex flex-row items-center">
      <svg
        class="h-16 mr-3 opacity-30"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
      >
        <path
          d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 448c-110.532 0-200-89.431-200-200 0-110.495 89.472-200 200-200 110.491 0 200 89.471 200 200 0 110.53-89.431 200-200 200zm0-338c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z"
        />
      </svg>
      <p class="note text-sm mt-3 opacity-60">
        Votre étiquette est calculée à partir de votre consommation électrique
        en fonction de la surface habitable.
      </p>
    </div>
  </div>
</template>
<style scoped>
.note {
  color: var(--text-sec);
}
</style>

<script>
import energeticBar from './energeticBar.vue'
export default {
  components: { energeticBar },
  name: 'energeticLabel',

  computed: {
    value() {
      return this.elecConsumption / this.homeArea
    },
  },

  props: ['elecConsumption', 'homeArea'],
}
</script>

