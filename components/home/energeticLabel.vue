<template>
  <div>
    <table style="width:500px">
      <tr>
        <td> <div style="width:15%; background-color: #4CA531; float: left;"> <p> A </p> </div> <p v-if="value<=50"> <-- Actuellement </p> </td>
      </tr>
      <tr>
        <td><div style="width:20%; background-color: #69B433; float: left;"> <p> B </p> </div> <p v-if="value>50 && value<=90"> <-- Actuellement </p></td>
      </tr>
      <tr>
        <td><div style="width:25%; background-color: #C9D600; float: left;"> <p> C </p> </div> <p v-if="value>90 && value<=150"> <-- Actuellement </p></td>
      </tr>
      <tr>
        <td><div style="width:30%; background-color: #FCEC23; float: left;"> <p> D </p> </div> <p v-if="value>150 && value<=230"> <-- Actuellement </p></td>
      </tr>
      <tr>
        <td><div style="width:35%; background-color: #F6C100; float: left;"> <p> E </p> </div> <p v-if="value>230 && value<=330"> <-- Actuellement </p></td>
      </tr>
      <tr>
        <td><div style="width:40%; background-color: #EC890A; float: left;"> <p> F </p> </div> <p v-if="value>330 && value<=450"> <-- Actuellement </p></td>
      </tr>
      <tr>
        <td><div style="width:45%; background-color: #DB0425; float: left;"> <p> G </p> </div> <p v-if="value>450"> <-- Actuellement </p> </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "energeticLabel",

  computed:{
    value(){
      return this.elecConsumption * 2.58 / this.homeArea;
    }
  },

  props:["elecConsumption", "homeArea"],

}
</script>

<style scoped>

</style>
