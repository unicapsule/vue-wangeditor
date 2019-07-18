import Vue from 'vue'
import App from './App.vue'
import WangEditor from '../packages/index'

Vue.config.productionTip = false

console.log('Editor', WangEditor)
Vue.use(WangEditor)

new Vue({
  render: h => h(App),
}).$mount('#app')
