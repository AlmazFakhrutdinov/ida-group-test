<template>
  <div class="cart">
    <div class="cart__header">
      <h2 class="cart__title">Корзина</h2>
      <Button class="btn">
        <Icon
          iconName="close"
          @click.native="$emit('toggleCartModal')"
          class="cart__close-button"
        />
      </Button>
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
        @removeProductFromTheCart="removeProductFromTheCart"
      />

      <p class="cart__text">Оформить заказ</p>

      <Input
        v-model="customerData.name"
        class="cart__input"
        type="text"
        placeholder="Ваше имя"
      />
      <Input
        v-model="customerData.phoneNumber"
        class="cart__input"
        data-format="+7** **"
        data-mask="+7__ __"
        type="text"
        placeholder="Телефон"
        mask="phone"
      />
      <Input
        v-model="customerData.address"
        class="cart__input"
        type="text"
        placeholder="Адрес"
      />
    </div>

    <Button class="cart__button main-btn">
      <span v-if="isCartEmpty">Перейти к выбору</span>
      <span v-else>Отправить</span>
    </Button>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import CartCard from './CartCard'

export default {
  components: {
    CartCard,
  },

  data() {
    return {
      isCartEmpty: false,
      customerData: {
        name: '',
        phoneNumber: '',
        address: '',
      },
      test: '',
    }
  },

  mounted() {
    this.initializeProductsList()
  },

  computed: {
    ...mapState('cart', ['productsList']),
  },

  methods: {
    ...mapMutations('cart', ['setProductsList', 'removeProduct']),
    initializeProductsList() {
      const productsList = JSON.parse(localStorage.getItem('productsList'))

      if (productsList && Array.isArray(productsList)) {
        this.setProductsList(productsList)
        return
      }

      localStorage.setItem('productsList', JSON.stringify([]))
    },
    removeProductFromTheCart(id, categoryId) {
      this.removeProduct([id, categoryId])
    },
  },

  watch: {
    // test(value) {
    //   document.querySelectorAll('[data-mask]').forEach(function (e) {
    //     e.addEventListener('keyup', function () {
    //       format(e)
    //     })
    //     e.addEventListener('keydown', function () {
    //       format(e)
    //     })
    //     format(e)
    //   })
    // },
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
  height: 100%;
  overflow: auto;
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
  &__button {
    margin-top: 24px;
  }
  &__input {
    margin-bottom: 12px;
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
</style>
