// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUi from 'element-ui'
import axios from 'axios'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/icon/iconfont.css'
import store from './store/index.js'
Vue.use(ElementUi)
Vue.config.devtools = true; //浏览器调试工具
Vue.config.productionTip = false
Vue.prototype.$axios=axios
//防止刷新重新进行加载
// beforerouter需要进行验证是否有token;
let admin= sessionStorage.getItem('token');
if(admin){
	let route=store.state.router
	router.addRoutes(route)
	// this.router.addRouter(this.router)
}
//router.beforeEach的作用是什么？
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
  data:{
  
  }
})
