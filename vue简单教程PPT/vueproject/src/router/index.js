import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/hello',
      component: Hello,
      children:[{
      	path:'/',
      	component:reslove=>require(['@/components/list.vue'],reslove)
      },{
        path:'/list',
        component:reslove=>require(['@/components/list.vue'],reslove)
      },{
        path:'/list2',
        component:reslove=>require(['@/components/list2.vue'],reslove)
      },]
    },{
    	path:'/',
    	component:reslove=>require(['@/components/index.vue'],reslove)
    },{
    	path:'/index',
    	component:reslove=>require(['@/components/index.vue'],reslove)
    }
  ]
})
