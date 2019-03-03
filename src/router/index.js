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
			path: '/cssflex',
			name: 'cssflex',
			component: require('../components/css_practice/flex_layout').default
		},
		{
			path: '/bfcandgrail',
			name: 'bfcandgrail',
			component: require('../components/css_practice/bfc_and_grail').default
		},
		{
			path: '/autocursor',
			name: 'autocursor',
			component: require('../components/js_practice/auto_cursor').default
		},
		{
			path: '/bubbling',
			name: 'bubbling',
			component: require('../components/js_practice/bubbling').default
		}
	]
})
