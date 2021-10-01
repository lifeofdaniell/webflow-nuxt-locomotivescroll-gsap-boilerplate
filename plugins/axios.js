import { initWebFlow } from './webflow'

let requestConfig = {}

export default function ({
  $axios,
  store
}) {
  $axios.onRequest((config) => {
    requestConfig = config
    // config.headers.Authorization = 'Bearer ' + store.getters.getAccessToken
  })

  $axios.onResponse((response) => {
    const isImageUpload = requestConfig.url.includes('cloudinary')
    if (store.getters.getShouldInitWebflow && !isImageUpload) {
      initWebFlow()
    }
    store.commit('updateShouldInitWebflow', true)
  })

  $axios.onError((error) => {
    console.log(error)
    store.commit('updateShouldInitWebflow', true)
  })
}
