<template>
  <div class="cart-card">
    <img class="cart-card__img" :src="imgUrl" alt="product" />

    <div class="cart-card__content">
      <p class="cart-card__name">{{ item.name | capitalize }}</p>

      <p class="cart-card__price">
        {{ item.price | spaceAfterEveryThirdCharacter }}&nbsp;Р
      </p>

      <div class="cart-card__rating">
        <Icon
          iconName="star"
          :id="`cart-card-star-${idx}`"
          class="cart-card__star"
        />
        <p class="cart-card__rating-number">{{ item.rating }}</p>
      </div>
    </div>

    <Button class="cart-card__button btn">
      <Icon
        iconName="cart"
        @click.native="
          $emit('removeProductFromTheCart', item.id, item.category)
        "
      />
    </Button>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true,
    },
    idx: {
      type: Number,
      required: true,
    },
  },

  data() {
    return {}
  },

  mounted() {
    setTimeout(() => {
      const icon = document
        .getElementById(`cart-card-star-${this.idx}`)
        .getElementsByTagName('rect')[0]

      const fillPersentage = this.item.rating * 2 * 10
      const fillRange = 9.5

      const result = 11.5 - fillRange * (fillPersentage / 100)
      icon.style.y = result
    })
  },

  computed: {
    imgUrl() {
      return `${process.env.BASE_URL}${this.item.photo}`
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/fonts.scss';
@import '@/assets/styles/colors.scss';
@import '@/assets/styles/extends.scss';

.cart-card {
  @extend .card-bs;
  display: flex;
  align-items: center;
  padding: 12px 22px 12px 25px;
  box-sizing: border-box;
  height: 120px;
  margin-bottom: 12px;
  border-radius: 8px;
  &__img {
    height: 90px;
    width: 70px;
  }
  &__content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    margin-left: 34px;
  }
  &__name {
    font-family: $ptsans;
    font-size: 14px;
    line-height: 18px;
    color: $grey;
  }
  &__price {
    font-family: $ptsansBold;
    font-size: 14px;
    line-height: 18px;
    color: $black;
  }
  &__rating {
    display: flex;
  }
  &__star {
    margin-right: 4px;
  }
  &__rating-number {
    font-family: $ptsansBold;
    font-size: 10px;
    line-height: 13px;
    color: $yellow;
  }
  &__button {
    margin-left: auto;
    background-color: $white;
    padding: 0;
    border: none;
    outline: none;
    &:hover {
      path {
        fill: green;
      }
    }
  }
}
</style>
