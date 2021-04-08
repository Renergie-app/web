<template>
  <div class="outer p-7 m-10">
    <h1 class="font-bold text-3xl mb-2">Mon profil</h1>

    <div v-if="userInfo != null" class="mb-5">
      <p>
        Type de logement :
        <span class="info font-semibold">
          {{ userInfo.homeType.value }}
        </span>
      </p>
      <p>
        Code postal :
        <span class="info font-semibold">
          {{ userInfo.postalCode.value }}
        </span>
      </p>
      <p>
        Surface du logement :
        <span class="info font-semibold">
          {{ userInfo.homeArea.value }}
          m²
        </span>
      </p>
      <p>
        Consomation éléctrique :
        <span class="info font-semibold">
          {{ userInfo.elecConsumptionTotal.value }}
          kWh
        </span>
      </p>
    </div>
    <div v-else>
      <h3 class="text-xl font-semibold" style="color: var(--red)">
        Information non trouvé
      </h3>
    </div>

    <NextButton text="Changer mes informations" @clicked="goBack"> </NextButton>
  </div>
</template>

<style scoped>
.info {
  color: var(--red);
}
p {
  color: var(--text-sec);
  font-weight: 500;
}
.outer {
  border-radius: 40px;
  background-color: var(--bg-card);
  box-shadow: 0px 10px 60px -10px rgba(49, 49, 49, 0.247);
}
</style>
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

