import Vue from 'vue'
import App from './App.vue'
import Plugin from './index.js'
Vue.use(Plugin)
new Vue({
  el: '#app',
  render: h => h(App)
})
