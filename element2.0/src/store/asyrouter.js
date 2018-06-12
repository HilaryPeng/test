const router=[{
      path: '/index',
      component: resolve => require(['@/components/comment/connent.vue'], resolve),
      children: [{
        path:'/SYS000001',
        component:resolve=>require(['@/components/SYS/SYS000001.vue'],resolve)
      },{
        path:'/SYS000002',
        component:resolve=>require(['@/components/SYS/SYS000002.vue'],resolve)
      },{
        path:'/SYS000005',
        component:resolve=>require(['@/components/SYS/SYS000005.vue'],resolve)
      },{
        path:'/SYS000006',
        component:resolve=>require(['@/components/SYS/SYS000006.vue'],resolve)
      }, {
      	path:'/AHY000001',
        component:resolve=>require(['@/components/AHY/AHY000001.vue'],resolve)
      },{
        path: '/MST000001',
        component: resolve => require(['@/components/MST/MST000001.vue'], resolve)
      },{
        path: '/AHY000003',
        component: resolve => require(['@/components/AHY/AHY000003.vue'], resolve)
      }

      ]
    }]
export default router