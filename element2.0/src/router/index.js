import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      component: resolve => require(['@/components/page/login.vue'], resolve)
    },
    
    
    // {
    //   path: '/index',
    //   component: resolve => require(['@/components/comment/connent.vue'], resolve),
    //   children: [
    //   {
    //     path: '/',
    //     component: resolve => require(['@/components/vuex/state.vue'], resolve)
    //   },
    //   {
    //     path: '/chart',
    //     component: resolve => require(['@/components/page/chart.vue'], resolve)
    //   },
    //   {
    //     path:'/state',
    //     component: resolve => require(['@/components/vuex/state.vue'], resolve)
    //   },
    //   {
    //     path:'/getter',
    //     component: resolve => require(['@/components/vuex/getter.vue'], resolve)
    //   },
    //   {
    //     path:'/mutations',
    //     component: resolve => require(['@/components/vuex/mutations.vue'], resolve)
    //   },
    //   {
    //     path:'/action',
    //     component:resolve=>require(['@/components/vuex/action.vue'],resolve)
    //   }]
    // },
    {
      path:'/404',
      component:resolve=>require(['@/components/page/404.vue'],resolve)
    },{
      path:'*',
      component:resolve=>require(['@/components/page/404.vue'],resolve)
    },
  ]
})
