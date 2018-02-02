// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import ElementUi from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
Vue.use(Vuex)
Vue.use(ElementUi)
Vue.config.productionTip = false
const store = new Vuex.Store({
  state:{
		count:0
	},
	mutations:{
		add:state=>state.count++,
		subtract:state=>state.count--
	}
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
console.log(store)