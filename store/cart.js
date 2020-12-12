export const state = () => ({
  productsList: [],
})

export const mutations = {
  setProductsList(state, productsList) {
    state.productsList = productsList
  },

  setProductsListItem(state, productsListItem) {
    const localStorageProductsList = JSON.parse(
      localStorage.getItem('productsList')
    )

    localStorage.setItem(
      'productsList',
      JSON.stringify([...localStorageProductsList, productsListItem])
    )

    state.productsList = [...state.productsList, productsListItem]
  },
}
