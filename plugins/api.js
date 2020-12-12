export default function ({ $axios }, inject) {
  const axios = $axios.create({})

  axios.setBaseURL(`${process.env.BASE_URL}/api`)

  const api = {
    getMenuList() {
      return axios.get('/product-category')
    },
    getCatalogList(categoryId) {
      const params = { category: categoryId }
      return axios.get('/product', { params })
    },
  }

  axios.onResponse((config) => {
    return {
      data: config.data,
      status: true,
    }
  })

  axios.onError((error) => {
    return {
      data: error.response?.data,
      status: false,
    }
  })

  inject('api', api)
}
