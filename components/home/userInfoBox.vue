<template>
  <div style="background-color: green; width: 500px">
    <p v-if="userInfo != null">
      Votre logement : {{ userInfo.homeType.value }} <br />
      Votre code Postal : {{ userInfo.postalCode.value }} <br />
      La surface de votre logement : {{ userInfo.homeArea.value }} m² <br />
      Votre consommation éléctrique :
      {{ userInfo.elecConsumptionTotal.value }} kWh <br />
    </p>
    <NextButton text="Réentrer mes infos" @clicked="goBack"> </NextButton>
  </div>
</template>

<script>
export default {
  name: 'userInfoBox',
  props: ['userInfo'],
  methods: {
    goBack() {
      this.$router.push('/')
    },
  },
}
</script>

<style scoped>
</style>
