import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import xindex from './cons/Xindex.vue'
//import xtb from './cons/Xtb.vue'
Vue.use(VueRouter)

Vue.config.productionTip = false
const routes = [
  { path: '/xindex', component: xindex },
//{ path: '/xtb', component: xtb },
]
const router = new VueRouter({
  routes 
})
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
