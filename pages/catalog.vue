<template>
  <div class="main">
    <Header @toggleCartModal="toggleCartModal" />
    <div class="catalog-container">
      <NavSideBar />
      <Nuxt />
    </div>
    <transition name="slide">
      <Cart v-if="isCartExpanded" @toggleCartModal="toggleCartModal" />
    </transition>
    <div></div>
  </div>
</template>

<script>
import Header from '@/components/header/Header'
import NavSideBar from '@/components/nav_side_bar/NavSideBar'
import Cart from '@/components/cart/Cart'

export default {
  middleware: 'load_menu',

  components: {
    Header,
    NavSideBar,
    Cart,
  },

  data() {
    return {
      isCartExpanded: false,
    }
  },

  methods: {
    toggleCartModal() {
      this.isCartExpanded = !this.isCartExpanded
    },
  },
}
</script>

<style lang="scss">
.main {
  position: relative;
}

.catalog-container {
  width: 1265px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  position: relative;
}

.slide-enter-active,
.slide-leave-active {
  transition: 0.5s;
}
.slide-enter,
.slide-leave-to {
  transform: translateX(460px);
}
</style>
