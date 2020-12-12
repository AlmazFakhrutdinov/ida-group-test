export const state = () => ({
  catalogList: [],
})

export const mutations = {
  setCatalogList(state, catalogList) {
    state.catalogList = catalogList
  },
}

export const actions = {
  async getCatalogList({ commit }, categoryId) {
    const { data } = await this.$api.getCatalogList(categoryId)
    commit('setCatalogList', data)
  },
}
