<template>
  <div class="catalog-list">
    <CatalogListItem
      v-for="(catalogListItem, idx) in catalogList"
      :key="catalogListItem.id"
      :item="catalogListItem"
      :idx="idx"
      @putTheProductInTheCart="putTheProductInTheCart"
    />
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import CatalogListItem from './CatalogListItem'

export default {
  components: {
    CatalogListItem,
  },
  computed: {
    ...mapState('catalog', ['catalogList']),
    ...mapState('cart', ['productsList']),
  },
  methods: {
    ...mapMutations('cart', ['setProductsListItem']),
    putTheProductInTheCart(product) {
      const isProductInCart = this.productsList.find(
        (el) => el.id === product.id
      )

      if (!isProductInCart) {
        this.setProductsListItem(product)
      }
    },
  },
}
</script>

<style>
.catalog-list {
  display: flex;
  justify-content: flex-end;
  flex-wrap: wrap;
  margin-top: 97px;
}
</style>
