export default async function ({ store, route, redirect, $api }) {
  const menuList = store.state.menu.menuList
  const firstMenuListId = Array.isArray(menuList) ? menuList[0]?.id : null
  const pageId = route.params.id

  if (firstMenuListId) {
    store.dispatch('catalog/getCatalogList', pageId)
  } else {
    const { status, data } = await $api.getMenuList()

    if (status === true && Array.isArray(data) && data[0]?.id) {
      const isPageIdInMenuList = data.find((el) => +el?.id === +pageId)
      store.commit('menu/setMenuList', data)

      if (isPageIdInMenuList) {
        await store.dispatch('catalog/getCatalogList', isPageIdInMenuList.id)
        return redirect(`/catalog/${isPageIdInMenuList.id}`)
      } else {
        await store.dispatch('catalog/getCatalogList', data[0].id)
        return redirect(`/catalog/${data[0].id}`)
      }
    } else {
      // FIXME
      // mutation in error module
      return redirect(`/error`)
    }
  }
}
