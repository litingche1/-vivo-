import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import xindex from './cons/Xindex.vue'
import xregiste from './cons/Xregiste.vue'
import xlogin from './cons/Xlogin.vue'
import Vuex from 'vuex' //var Vuex = require('vuex')
Vue.use(Vuex)
Vue.use(VueRouter)

Vue.config.productionTip = false
const routes = [{
		path: '/xindex',
		component: xindex
	},
	{
		path: '/xregiste',
		component: xregiste
	},
	{
		path: '/xlogin',
		component: xlogin
	},
]
const router = new VueRouter({
	routes
})
const store = new Vuex.Store({
	state: {
		shows: false,
		bool: false,
		xr: false,
	}
})
new Vue({
	render: h => h(App),
	router,
	store
}).$mount('#app')