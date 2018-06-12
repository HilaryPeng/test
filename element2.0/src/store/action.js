import vue from 'vue'
import axios from 'axios'
const actions = {
  actionsAdd ({commit}) {
    // 执行异步操作 其中{commit}是es6的参数解构 来简化代码 原来的意思是 这
    // 个会传入一个obj，我们只需要obj里面的commit 所以用了es6的解构赋值
    setTimeout(() => {
      commit('add')
    }, 3000)
  },
  actionLogin (object, adminnews) {
    // 执行异步操作
    object.commit('add') // 提交的应该是 mutation里面的操作
    console.log(this)
    console.log(adminnews)
  },
  getName ({commit}) {
    // 异步获取数据
    axios.get('/api/admin').then(data => {
      commit('checkName', {data: data}) // 处理数据提交给mutation 我们先这样约定
    })
      .catch(error => {
        console.log(error)
      })
  },
  getRoles ({commit}, data) {
    axios.get('/api/roles', {params: {
        admin: data
    }}).then(data => {
      // 得到用户权限 然后开始比较要添加进去的router然后返回login
    })
  }
}
export default actions
