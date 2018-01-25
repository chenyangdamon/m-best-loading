import Vue from 'vue'
import App from './App.vue'
import MBestLoading from './component/index.js'

Vue.use(MBestLoading)

new Vue({
  el: '#app',
  render: h => h(App)
})
