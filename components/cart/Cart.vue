<template>
  <div class="cart">
    <div class="cart__header">
      <h2 class="cart__title">Корзина</h2>
      <div
        @click="$emit('toggleCartModal')"
        class="cart__close-button"
        v-html="close"
      ></div>
    </div>

    <p v-if="isCartEmpty" class="cart__empty-cart-message">
      Пока что вы ничего не добавили в корзину.
    </p>

    <div v-else class="cart__products">
      <p class="cart__text">Товары в корзине</p>

      <CartCard
        v-for="(product, productIdx) in productsList"
        :key="product.id"
        :idx="productIdx"
        :item="product"
      />

      <p class="cart__text">Оформить заказ</p>
      <input class="input" type="text" placeholder="Ваше имя" />
      <input class="input" type="text" placeholder="Телефон" />
      <input class="input" type="text" placeholder="Адрес" />
    </div>

    <button>
      <span v-if="isCartEmpty">Перейти к выбору</span>
      <span v-else>Отправить</span>
    </button>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import CartCard from './CartCard'
import close from '~/assets/images/icons/Close.svg?raw'

export default {
  components: {
    CartCard,
  },

  data() {
    return {
      close,
      isCartEmpty: false,
    }
  },

  mounted() {
    this.initializeProductsList()
  },

  computed: {
    ...mapState('cart', ['productsList']),
  },

  methods: {
    ...mapMutations('cart', ['setProductsList']),
    initializeProductsList() {
      const productsList = JSON.parse(localStorage.getItem('productsList'))

      if (productsList && Array.isArray(productsList)) {
        this.setProductsList(productsList)
        return
      }

      localStorage.setItem('productsList', JSON.stringify([]))
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/fonts.scss';
@import '@/assets/styles/colors.scss';
@import '@/assets/styles/extends.scss';

.cart {
  @extend .panel-bs;
  position: fixed;
  top: 0;
  right: 0;
  border-radius: 8px 0px 0px 8px;
  padding: 52px 48px 0 48px;
  width: 460px;
  min-height: 100vh;
  box-sizing: border-box;
  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &__title {
    font-family: $ptsansBold;
    font-size: 32px;
    line-height: 41px;
    color: $black;
  }
  &__close-button {
  }
  &__empty-cart-message {
    font-family: $ptsans;
    font-size: 22px;
    line-height: 28px;
    color: $black;
    margin-top: 24px;
  }
  &__products {
    display: flex;
    flex-direction: column;
    margin-top: 24px;
  }
  &__text {
    font-family: $ptsans;
    font-size: 18px;
    line-height: 23px;
    color: $grey;
    margin-bottom: 16px;
  }
}

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
