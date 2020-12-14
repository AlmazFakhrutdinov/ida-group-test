<template>
  <div v-html="icon" class="icon" />
</template>

<script>
export default {
  props: {
    iconName: {
      type: String,
      required: true,
    },
    format: {
      type: String,
      default: 'svg',
    },
    type: {
      type: String,
      default: 'icon',
    },
  },

  data() {
    return {
      icon: '',
    }
  },

  mounted() {
    if (this.type === 'icon') {
      this.icon = require(`~/assets/images/icons/${this.iconName}.${this.format}?raw`)
    } else {
      this.icon = require(`~/assets/images/${this.iconName}.${this.format}?raw`)
    }
  },
}
</script>

<style lang="scss">
@import '@/assets/styles/colors.scss';

.hovered {
  &:hover {
    opacity: 0.8;
  }
}

.icon {
  &:active {
    opacity: 1;
  }
}
</style>
