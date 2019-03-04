import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
	mode: 'history', //history模式（去掉路由上的 #）
	routes: [
		{
			path: '/',
			name: 'home',
			component: require('../components/index').default
		},
		{
			path: '/detail',
			name: 'detail',
			component: require('../components/cartoom_details/detail').default
		}
	]
})
