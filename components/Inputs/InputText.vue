<template>
  <input
    class="font-semibold p-4"
    type="text"
    placeholder="35000"
    @change="change"
    v-model="text"
    :style="{ color: colorText }"
  />
</template>

<style scoped>
input {
  border-radius: 20px;
  background-color: #f4f6f8;
}
</style>

<script>
export default {
  name: 'InputText',

  props: ['rules', 'bus', 'id'],

  data: () => ({
    text: '',
    valid: false,
  }),

  computed: {
    colorText() {
      return this.valid ? '#9495ac' : '#FF374C'
    },
  },

  mounted() {
    if (this.id != undefined) this.bus.$on('setText' + this.id, this.setText)
    else this.bus.$on('setText', this.setText)
  },

  methods: {
    setText(text) {
      this.text = text
      this.change()
    },
    change() {
      this.valid = this.checkRules()
      this.$emit('change', { text: this.text, valid: this.valid })
    },
    checkRules() {
      if (this.rules == undefined) return true
      var wrong = false
      this.rules.forEach((rule) => {
        switch (rule.name) {
          case 'Postal':
            const regex = new RegExp('^\\d{5}$')
            const regex1 = new RegExp('^00')
            if (!regex.test(this.text) || regex1.test(this.text)) {
              wrong = true
              return false
            }
            break
          case 'Number':
            const regex2 = new RegExp('^\\d+$')
            if (!regex2.test(this.text)) {
              wrong = true
              return false
            }
            break
          case 'Notnull':
            if (this.text == null || this.text === '' || this.text == 0) {
              wrong = true
              return false
            }
            break
        }
      })
      if (!wrong) return true
      else return false
    },
  },
}
</script>

<style scoped>
</style>
