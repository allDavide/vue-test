// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter  from 'vue-router'
Vue.use(VueRouter)
import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper)

//首页面
import Home  from './components/home.vue'
import Cart  from './components/cart.vue'
import Mine  from './components/mine.vue'
import Classify  from './components/classify.vue'

//二级路由
import Login from './components/home/login.vue'
import Regist from './components/home/regist.vue'
//三级路由
import More from './components/home/login/more.vue'
import Other from './components/home/login/other.vue'


Vue.config.productionTip = false



const routes =[

//{path:'*',redirect:'/home'},
{
	path:'/home',
	component:Home,
	name:'home',
	children:[
	{
		path:'login',
//		name:'Login',
		component:Login,
		
		children:[
//		{path:'/',name:'other',component:Other},
		{path:'more',component:More},
		{path:'other',component:Other}
		]
	},
	
	{
	path:'regist',
//	name:'Regist',
	component:Regist}
//	{path:'*',redirect:'/regist'}
	
	]
},




{path:'/cart',component:Cart},
{path:'/mine',component:Mine},
{path:'/classify',component:Classify}

]
const router = new VueRouter({
	routes
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router
})
