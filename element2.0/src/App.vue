<template>
  <div id="app">
  
    <router-view></router-view>

  </div>
</template>

<script>
import  '../static/css/index.less'
export default {
  name: 'app',
  data () {
    return {
      
    }
  }
}
</script>

<style>
 
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin:0px;
  padding:0px;
}


</style>
