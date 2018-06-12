import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import mutations from './mutation.js'
import actions from './action.js'
import router from './asyrouter.js'
const store = new Vuex.Store({
	state:{
		 navbar:[{
            id:'1',
            icon:'el-icon-message',
            name:'系统功能',
            children:[{
              id:'SYS000001',
              name:'系统代码'
            },
            {
              id:'AHY000001',
              name:'密码策略'
            },
            {
              id:'1-3',
              name:'日终'
            },
            {
              id:'AHY000003',
              name:'职务权限',
            }
            ,
            {
              id:'1-5',
              name:'设备',
            }
            ,
            {
              id:'1-6',
              name:'监控',
            }
            ,
            {
              id:'SYS000002',
              name:'系统参数',
            },
            {
              id:'1-8',
              name:'菜单',
            },
            {
              id:'1-9',
              name:'权限',
            },{
              id:'1-10',
              name:'公告',
            },{
              id:'SYS000005',
              name:'银行检查'
            },{
              id:'SYS000006',
              name:'禁止文字',
            }]
         },
         {
            id:'2',
            name:'基础信息',
            icon:'el-icon-menu',
            children:[{
              id: 'MST000001',
        name: '公司新建'
            },
            {
              id:'2-2',
              name:'身份证验证'
            },
            {
              id:'2-3',
              name:'员工'
            },
            {
              id:'2-4',
              name:'设备分组',
            },
            {
              id:'2-5',
              name:'项目组',
            },
            {
              id:'2-4',
              name:'合作机构',
            }]
         },
         {
            id:'3',
            name:'案件管理',
            icon:'el-icon-setting',
            children:[{
              id:'3-1',
              name:'案件导入'
            },{
              id:'3-2',
              name:'批次修改'
            },{
              id:'3-3',
              name:'案件操作'
            },{
              id:'3-4',
              name:'案件分派'
            },{
              id:'3-5',
              name:'案件移交'
            },]
      },

      {
        id: '4',
        name: '催收',
        icon: 'el-icon-setting',
        children: [{
          id: '4-2',
          name: '我的案件'
        }, {
          id: '4-3',
          name: '评语'
        }, {
          id: '4-4',
          name: '我的还款'
        }, {
          id: '4-5',
          name: '下述案件'
        }]
      },
      {
        id: '5',
        name: '信访管理',
        icon: 'el-icon-setting',
        children: [{
          id: '5-1',
          name: '苹果'
        }]
      },
      {
        id: '6',
        name: '外坊管理',
        icon: 'el-icon-setting',
        children: [{
          id: '6-1',
          name: '苹果'
        }]
      },
      {
        id: '7',
        name: '银行报告',
        icon: 'el-icon-setting',
        children: [{
          id: '7-1',
          name: '苹果'
        }]
      }, {
        id: '8',
        name: '还款',
        icon: 'el-icon-setting',
        children: [{
          id: '8-1',
          name: '苹果'
        }]
      }, {
        id: '9',
        name: '统计分析',
        icon: 'el-icon-setting',
        children: [{
          id: '9-1',
          name: '苹果'
        }]
      }, {
        id: '10',
        name: '框架',
        icon: 'el-icon-setting',
        children: [{
          id: '10-1',
          name: '苹果'
        }]
      }], // 根据权限不同生成不同的导航栏组件 navbar即是一个动态的列表栏
    isCollapse: false, // 默认是否展开 注入到vuex中进行统一管理，
    count: 101,
    msg: 12,
    item: [{name: '黄致鹏',age: 18}, {name: '汪洋琴',age: 16}, {name: '小妹妹',age: 9}, {name: '阿汪',age: 8}],
    router: router,
    getName: '暂不知道',
    key: ''
  },
  mutations,
  getters: {
    item2: function (state) {
      state.item.push({name: '张三',age: 18})
      return state.item.filter(i => {
        // 这个filter的参数永远是值 也就是每一个{name:'黄致鹏',age:18}
        return i.age > 10
      })
    }
  },
actions})
export default store
