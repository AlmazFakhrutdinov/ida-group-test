<template>
  <div class="card"></div>
</template>

<script>
export default {
  data() {
    return {}
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
  margin-right: 16px;
  margin-bottom: 16px;
  border-radius: 8px;
  padding: 16px;
  width: 264px;
  height: 272px;
  box-sizing: border-box;
  &__body {
    display: flex;
    justify-content: space-between;
  }
  // &__rating-fill {
  //   background-color: black;
  //   height: 100%;
  // }
  &__img {
    width: 143px;
    height: 180px;
  }
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

.card__rating {
  path: {
    fill: black;
  }
  &:hover {
    path {
      fill: green;
    }
  }
}

.cart {
  path: {
    fill: black;
  }
  &:hover {
    path {
      fill: green;
    }
  }
}
</style>
