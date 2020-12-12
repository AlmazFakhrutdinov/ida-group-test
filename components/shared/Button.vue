<template>
  <button class="btn">
    <slot></slot>
    <div v-if="iconName" v-html="icon"></div>
  </button>
</template>

<script>
export default {
  props: {
    iconName: {
      type: String,
      required: false,
    },
  },

  data() {
    return {
      icon: '',
    }
  },

  mounted() {
    if (this.iconName) {
      const capitalizedIconName = this.$options.$filters.capitalize(
        this.iconName
      )
      this.icon = require(`~/assets/images/icons/${capitalizedIconName}.svg?raw`)
      console.log(this.icon)
    }
  },
}
</script>

<style lang="scss">
.btn {
  background-color: white;
  padding: 0;
  border: none;
  outline: none;
  &:hover {
    opacity: 0.9;
  }
}
</style>
