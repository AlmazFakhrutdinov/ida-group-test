<template>
  <div class="section">
    <div class="header">
      <div class="header__logo" v-html="logo"></div>
      <div class="header__box">
        <div
          @click="$emit('toggleCartModal')"
          class="header__button"
          v-html="box"
        ></div>
        <div class="header__card-indicator" v-html="ellipse"></div>
      </div>
    </div>
  </div>
</template>

<script>
import logo from '~/assets/images/Logo.svg?raw'
import box from '~/assets/images/icons/Box.svg?raw'
import ellipse from '~/assets/images/icons/Ellipse.svg?raw'

export default {
  data() {
    return {
      logo,
      box,
      ellipse,
    }
  },
}
</script>

<style lang="scss">
@import '@/assets/styles/fonts.scss';
@import '@/assets/styles/colors.scss';
@import '@/assets/styles/extends.scss';

.section {
  @extend .card-bs;
  border-radius: 0px 0px 8px 8px;
}

.header {
  width: 1265px;
  height: 66px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  &__logo {
  }
  &__box {
    position: relative;
  }
  &__button {
  }
  &__card-indicator {
    position: absolute;
    top: -5px;
    right: -5px;
  }
}
</style>
