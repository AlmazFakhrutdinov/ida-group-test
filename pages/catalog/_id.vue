<template>
  <div class="catalog">
    <CatalogList />
    <SortDropdown />
  </div>
</template>

<script>
import CatalogList from '@/components/catalog/CatalogList'
import SortDropdown from '@/components/catalog/SortDropdown'
export default {
  components: {
    CatalogList,
    SortDropdown,
  },
}
</script>

<style>
.catalog {
  width: 100%;
}
</style>
