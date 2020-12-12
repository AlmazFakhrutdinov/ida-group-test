<template>
  <div class="card">
    <div class="card__body">
      <div class="card__rating">
        <div class="card__star" :id="`card-star-${idx}`" v-html="star"></div>
        <p class="card__rating-number">{{ item.rating }}</p>
      </div>
      <img class="card__img" :src="imgUrl" alt="proudct photo" />
      <Button
        @click="$emit('putTheProductInTheCart', item)"
        class="card__button"
        iconSize="small"
      >
        iconName="box"
        <!-- <div class="card__button-icon" v-html="box"></div> -->
      </Button>
    </div>
    <p class="card__name">{{ item.name | capitalize }}</p>
    <p class="card__price">
      {{ item.price | spaceAfterEveryThirdCharacter }}&nbsp;Р
    </p>
  </div>
</template>

<script>
// import test from '@/components/test'
import Button from '@/components/shared/Button'
import star from '~/assets/images/icons/Star.svg?raw'
import box from '~/assets/images/icons/Box.svg?raw'
export default {
  components: {
    // test,
    Button,
  },

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
    return {
      star,
      box,
      range: '9.5 = 100%  11.5 2',
    }
  },

  mounted() {
    // FIXME
    const starIcon = document
      .getElementById(`card-star-${this.idx}`)
      .getElementsByTagName('rect')[0]
    const pers = this.item.rating * 2 * 10
    const devat = 9.5

    const result = 11.5 - devat * (pers / 100)
    // console.log(result)
    // console.log(this)
    starIcon.style.y = result
  },

  computed: {
    imgUrl() {
      return `${process.env.BASE_URL}${this.item.photo}`
    },
  },
}
</script>

<style lang="scss">
@import '@/assets/styles/fonts.scss';
@import '@/assets/styles/colors.scss';
@import '@/assets/styles/extends.scss';

.card {
  @extend .card-bs;
  display: flex;
  flex-direction: column;
  margin-left: 16px;
  margin-bottom: 16px;
  border-radius: 8px;
  padding: 16px;
  width: 264px;
  height: 272px;
  box-sizing: border-box;
  transition: 0.5s;
  &:hover {
    transform: scale(1.05);
  }
  &__body {
    display: flex;
    justify-content: space-between;
  }
  &__rating {
    display: flex;
  }
  &__star {
    margin-right: 3px;
  }
  &__rating-number {
    font-family: $ptsansBold;
    font-size: 10px;
    line-height: 13px;
    color: $yellow;
  }
  &__img {
    width: 143px;
    height: 180px;
  }
  &__button {
    height: 13px;
    width: 12px;
  }
  // &__button-icon {
  //   height: 13px;
  //   width: 12px;
  //   svg {
  //     height: 13px;
  //     width: 12px;
  //   }
  //   path {
  //     fill: $grey-light;
  //   }
  // }

  &__name {
    font-family: $ptsans;
    font-size: 14px;
    line-height: 18px;
    margin-top: 16px;
    color: $grey;
  }
  &__price {
    font-family: $ptsansBold;
    font-size: 14px;
    line-height: 18px;
    margin-top: 6px;
    color: $black;
  }
}
</style>
