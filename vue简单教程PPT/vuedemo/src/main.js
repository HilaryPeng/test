// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import store from './store/index'
// import vueResource from 'vue-resource'
import axios from 'axios';
Vue.prototype.$axios=axios;


// Vue.use(vueResource)
// import Echarts from 'echarts'
Vue.use(ElementUI)
// Vue.prototype.$echarts=Echarts
Vue.config.productionTip = false  //这个应该是vue的一些全局配置

/* eslint-disable no-new */
//这个应该是我们的实例化出来的实例 
//七点到郑州
new Vue({
  el: '#app',  //绑定到app上
  router,		//使用路由
  store,
  template: '<App/>', //模板使用哪个
  components: {
  	App
  }
})


