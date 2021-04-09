<template>
  <input
    class="font-semibold p-4 mr-5 text-lg"
    type="text"
    :placeholder="placeholder"
    @change="commit"
    @input="change"
    v-model="text"
    :style="{ color: colorText }"
  />
</template>

<style scoped>
input {
  border-radius: 20px;
  background-color: var(--bg-sec);
  transition: all 0.05s;
}
input:hover {
  transform: scale(1.05);
}
</style>

<script>
export default {
  name: 'InputText',

  props: ['rules', 'bus', 'id', 'placeholder'],

  data: () => ({
    text: '',
    valid: false,
  }),

  computed: {
    colorText() {
      return this.valid ? 'var(--text-sec)' : 'var(--red)'
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
    commit() {
      this.valid = this.checkRules()
      this.$emit('commit', { text: this.text, valid: this.valid })
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
