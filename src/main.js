import Vue from 'vue'
import App from './App.vue'
import router from '@/router/router'
import CompositionApi from '@/plugins/CompositionApi'

Vue.config.productionTip = false

new Vue({
  router,
  CompositionApi,
  render: h => h(App)
}).$mount('#app')
