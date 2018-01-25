import VueComponent from './loading.vue'
const component = {
  install: function(Vue) {
    Vue.component(VueComponent.name, VueComponent)
  }
}
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(component)
}
export default component
