export const state = () => ({
  menuList: [],
})

export const mutations = {
  setMenuList(state, menuList) {
    state.menuList = menuList
  },
}
