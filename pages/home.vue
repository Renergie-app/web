<template>
  <page-container>
    <logo />
    <div class="infoContainer flex-row flex justify-center items-center">
      <user-info-box :user-info="userInfo">
        <energetic-label
          class="mt-5"
          v-if="userInfo != null"
          :home-area="userInfo.homeArea.value"
          :elecConsumption="userInfo.elecConsumptionTotal.value"
        ></energetic-label>
      </user-info-box>
      <info-box>
        Cette application s'appuie sur des données prévisionnelles et des
        données statistiques pour prévoir vos coûts. Il est donc possible que
        <b>
          d'un particulier à l'autre, les différences entre la réalité et les
          prévisions soit plus grande</b
        >. Cette application n'a pas pour but de remplacer un quelconque devis
        fait par un professionnel, elle a pour seul intérêt de donner un ordre
        d'idées de vos investissements et de leur rentabilité.
      </info-box>
    </div>
    <h1 class="text-3xl font-light opacity-80 m-4 text-center">
      Choississez votre rénovation
    </h1>
    <div class="flex flex-row items-center flex-wrap justify-center mb-10">
      <button-image title="Eolien" @click="eolienRenov">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 514 512">
          <path
            d="M350.1 480h-48.32l-5-76.66L221 314l-10.78 166H161.9a36.94 36.94 0 0 0-33 20.42A8 8 0 0 0 136 512h240a8 8 0 0 0 7.15-11.58A36.93 36.93 0 0 0 350.1 480zm48.59-54.21l-88.35-182.32a55.73 55.73 0 0 1-.73-42.79l73.28-179.07a15.8 15.8 0 0 0-27.5-15.07L241.27 163.21a55.74 55.74 0 0 1-36.47 22.4L13.32 215.94A15.81 15.81 0 0 0 0 231.89v.23a15.8 15.8 0 0 0 14.1 15.35L203.83 268a55.78 55.78 0 0 1 37.54 20.58l130.31 153.5a15.81 15.81 0 0 0 20.53 3.63l.19-.12a15.79 15.79 0 0 0 6.29-19.8zM256 248a24 24 0 1 1 24-24 24 24 0 0 1-24 24z"
          />
        </svg>
      </button-image>
      <button-image title="Panneaux Solaires" @click="solarRenov">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
          <path
            d="M431.98 448.01l-47.97.05V416h-128v32.21l-47.98.05c-8.82.01-15.97 7.16-15.98 15.99l-.05 31.73c-.01 8.85 7.17 16.03 16.02 16.02l223.96-.26c8.82-.01 15.97-7.16 15.98-15.98l.04-31.73c.01-8.85-7.17-16.03-16.02-16.02zM585.2 26.74C582.58 11.31 568.99 0 553.06 0H86.93C71 0 57.41 11.31 54.79 26.74-3.32 369.16.04 348.08.03 352c-.03 17.32 14.29 32 32.6 32h574.74c18.23 0 32.51-14.56 32.59-31.79.02-4.08 3.35 16.95-54.76-325.47zM259.83 64h120.33l9.77 96H250.06l9.77-96zm-75.17 256H71.09L90.1 208h105.97l-11.41 112zm16.29-160H98.24l16.29-96h96.19l-9.77 96zm32.82 160l11.4-112h149.65l11.4 112H233.77zm195.5-256h96.19l16.29 96H439.04l-9.77-96zm26.06 256l-11.4-112H549.9l19.01 112H455.33z"
          />
        </svg>
      </button-image>
      <button-image title="Isolation" class="opacity-30 tip disabled">
        <span class="tip-text opacity-100">Bientôt disponible</span>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path
            d="M496,448H480V32A32,32,0,0,0,448,0H64A32,32,0,0,0,32,32V448H16A16,16,0,0,0,0,464v32a16,16,0,0,0,16,16H496a16,16,0,0,0,16-16V464A16,16,0,0,0,496,448ZM416,224H272V64H416ZM96,64H240V224H96Zm0,224H240V448H96ZM272,448V288H416V448Z"
          /></svg
      ></button-image>
    </div>
  </page-container>
</template>

<style scoped>
@media (max-width: 960px) {
  .infoContainer {
    flex-direction: column;
  }
}
</style>

<script>
import Logo from '../components/Logo.vue'
import PageContainer from '../components/PageContainer.vue'
export default {
  components: { PageContainer, Logo },
  name: 'home.vue',

  data: () => ({
    userInfo: null,
  }),

  methods: {
    solarRenov() {
      this.$router.push('/solar')
    },
    eolienRenov() {
      this.$router.push('/eolien')
    },
  },

  mounted() {
    this.userInfo = this.$store.getters['getUserInfo']
    if (this.userInfo.homeType.value === 'None') this.$router.push('/')
  },
}
</script>
