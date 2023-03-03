import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import xindex from './cons/Xindex.vue'
import xregiste from './cons/Xregiste.vue'
import xlogin from './cons/Xlogin.vue'
import xmyshopping from './cons/XMyshopping.vue'
import xspqx from './cons/Xspqx.vue'
import xspxz from './cons/Xspxz.vue'
import shoppingcar from './cons/XshoppingCar.vue'
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
	{
		path: '/xmyshopping',
		component: xmyshopping
	},
	{
		path: '/xspqx',
		component: xspqx
	},
	{
		path: '/xspxz',
		component: xspxz
	},
	{
		path: '/shoppingcar',
		component: shoppingcar
	}
]
const router = new VueRouter({
	routes
})
const store = new Vuex.Store({
	state: {
		shows: false,
		bool: false,
		xr: false,
		dl:false,
		zcdl:true,
		shopping:false,
		spxz:false,
		spsj:[],
		sjpz:[],
		gwcButon:false,
	}
})
new Vue({
	render: h => h(App),
	router,
	store
}).$mount('#app')