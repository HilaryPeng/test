<template>
  <div class="app">
    <router-view></router-view>
  </div>
</template>

<script>

import './css/index.css'

export default {
  name: 'app',
  components:{
  },

}
//  <router-view></router-view> 是用来显示路由的内容的组件
//  现在要把Hello.vue和login.vue整合到一个页面

</script>

<style scoped>
 
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
ul{
	list-style: none
}
h1{
}
</style>
<!--  -->
