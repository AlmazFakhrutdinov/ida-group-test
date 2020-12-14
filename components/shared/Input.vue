<template>
  <input class="input" ref="input" v-model="computedValue" />
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      required: true,
    },
    mask: {
      type: String,
    },
  },

  data() {
    return {
      newValue: this.value,
    }
  },

  created() {},

  computed: {
    computedValue: {
      get() {
        return this.newValue
      },
      set(value) {
        if (this.mask) {
          this.format(this.$refs.input)
          return
        }

        this.newValue = value
        this.$emit('input', value)
      },
    },
  },

  methods: {
    doFormat(x, pattern, mask) {
      const strippedValue = x.replace(/[^0-9]/g, '')
      const chars = strippedValue.split('')
      let count = 0

      let formatted = ''
      for (let i = 0; i < pattern.length; i++) {
        const c = pattern[i]
        if (chars[count]) {
          if (/\*/.test(c)) {
            formatted += chars[count]
            count++
          } else {
            formatted += c
          }
        } else if (mask) {
          if (mask.split('')[i]) formatted += mask.split('')[i]
        }
      }
      return formatted
    },

    format(elem) {
      const val = this.doFormat(elem.value, elem.getAttribute('data-format'))
      elem.value = this.doFormat(
        elem.value,
        elem.getAttribute('data-format'),
        elem.getAttribute('data-mask')
      )

      if (elem.createTextRange) {
        const range = elem.createTextRange()
        range.move('character', val.length)
        range.select()
        console.log(range, val, 'HUI')
      } else if (elem.selectionStart) {
        elem.focus()
        elem.setSelectionRange(val.length, val.length)
        console.log(val)
        this.newValue = val
        this.$emit('input', val)
      }
    },
  },

  watch: {
    value(value) {
      this.newValue = value
    },
  },
}
</script>

<style lang="scss">
@import '@/assets/styles/colors.scss';
@import '@/assets/styles/fonts.scss';

.input {
  box-sizing: border-box;
  height: 50px;
  width: 100%;
  background: $grey-extra-light;
  border-radius: 8px;
  outline: none;
  border: none;
  font-family: $ptsans;
  font-size: 16px;
  line-height: 21px;
  color: $black;
  padding: 14px 14px 15px 14px;
  &::placeholder {
    color: $grey-light;
  }
}
</style>
