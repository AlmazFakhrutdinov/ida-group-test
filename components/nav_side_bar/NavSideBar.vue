<template>
  <div class="menu">
    <h2 class="menu__title">Каталог</h2>

    <nuxt-link
      class="menu__link"
      :to="`/catalog/${menuListItem.id}`"
      v-for="menuListItem in menuList"
      :key="menuListItem.id"
    >
      {{ menuListItem.name }}
    </nuxt-link>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState('menu', ['menuList']),
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/fonts.scss';
@import '@/assets/styles/colors.scss';

.menu {
  display: flex;
  flex-direction: column;
  &__title {
    font-family: $ptsansBold;
    font-style: normal;
    font-size: 32px;
    line-height: 41px;
    margin-top: 32px;
    margin-bottom: 24px;
  }
  &__link {
    font-family: $ptsans;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 21px;
    color: $grey-light;
    text-decoration: none;
    outline: none;
    margin-bottom: 16px;
    &:hover {
      color: $grey;
    }
    &.nuxt-link-active {
      color: $black;
      text-decoration: underline;
    }
  }
}
</style>
