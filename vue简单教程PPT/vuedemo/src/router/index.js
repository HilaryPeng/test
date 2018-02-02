import Vue from 'vue'
import Router from 'vue-router'
// import post from '@/components/post' //这个@是webpack配置里面设置替代好的路径 表示src 

/*
 	可以在webpack的配置中查看
 alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src')
    }
    其中 @ 代表路径 src
    */

// import slider from '@/components/comment/slider'


Vue.use(Router)

export default new Router({
  routes: [
  {
    path: '/',
    name: 'login',
    component: resoleve => require(['@/components/login.vue'],resoleve) 
  },
  {
    path: '/connent', 
    component: resoleve => require(['@/components/commen/connent.vue'],resoleve),
    children:[{
      path:'/',
      component: resoleve => require (['@/components/index.vue'],resoleve),
    },{
      path:'/index',
      component: resoleve => require (['@/components/index.vue'],resoleve),
    },{
      path:'/formcheck',
      component: resoleve => require (['@/components/formcheck.vue'],resoleve),
    },{
      path:'/table',
      component:resoleve =>require (['@/components/table.vue'],resoleve)
    },
    {
      path:'/echart',
      component:resoleve =>require (['@/components/echart.vue'],resoleve)
    },{
      path: '/form',
      component: resoleve => require(['@/components/form.vue'],resoleve) 
    },{
      path: '/post',
      name: 'post',
      component: resoleve => require(['@/components/post.vue'],resoleve) 
    },{
      path: '/fliter',
      name: 'fliter',
      component: resoleve => require(['@/components/fliter.vue'],resoleve) 
    }]
  },
  {
    path: '/login',
    component: resoleve => require(['@/components/login.vue'],resoleve) 
  },
  {
      path: '/pdf',
      name: 'pdf',
      component: resoleve => require(['@/components/pdf.vue'],resoleve) 
    }
  ]
})
