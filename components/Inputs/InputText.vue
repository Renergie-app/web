<template>
  <div v-if="title != null" class="relative m-2 pt-4">
    <h1
      v-if="title != null"
      class="absolute z-10 text-base top-1 left-4 p-1 pl-3 pr-3 rounded-full truncate pointer-events-none"
    >
      {{ title }}
    </h1>
    <input
      class="font-semibold p-4 mr-5 text-lg"
      type="text"
      :placeholder="placeholder"
      @change="commit"
      @input="change"
      v-model="text"
      :style="{ color: colorText }"
    />
  </div>
  <div v-else class="m-5">
    <input
      class="font-semibold p-4 mr-5 text-lg"
      type="text"
      :placeholder="placeholder"
      @change="commit"
      @input="change"
      v-model="text"
      :style="{ color: colorText }"
    />
  </div>
</template>

<style scoped>
h1 {
  background-color: var(--bg-sec);
  color: var(--text-sec);
}
input {
  width: 100%;
  overflow: hidden;
  border-radius: 20px;
  background-color: var(--bg-sec);
  transition: all 0.05s;
  outline: none;
}
input:hover,
input:focus {
  transform: scale(1.05);
}
</style>

<script>
export default {
  name: 'InputText',

  props: ['rules', 'bus', 'id', 'placeholder', 'title'],

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
