<template>
  <div class="nav">
   <div class="packup" @click='checkBol' @mouseover='showtip' @mouseout='showtipover'>   
     <i class='el-icon-menu'></i>
     <transition name="fade">
      <span class="box" v-if="!isCollapse" transiton="fade"><p>收起菜单</p></span>
    </transition>
    <span class='showtip' :class='{block:isShow,none:!isShow}'>点击展开</span>  
  </div>
  <el-menu  class="el-menu-vertical-demo el-dark" :class='{auto:!isCollapse,inherit:isCollapse}'  :collapse="isCollapse" :unique-opened='onlyOne' :router='router'> 
    <el-submenu  :index='i.id'  v-for='i of navbar' key='myfirst'>
      <template slot="title" class='el-dark-title'>
        <i :class="i.icon"></i>
        <span slot="title">{{i.name}}</span>
      </template>
      <el-menu-item-group v-for='j in i.children' key='mysecond'>
        <el-menu-item :index="j.id">{{j.name}}</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
  </el-menu>
</div>
</template>
<script>
export default {
  data() {
    return {
         onlyOne:true,//是否永远只打开一个菜单选项
         router:true, //点击是否跳转路
         isShow:false,//控制鼠标hover事件的开关
       };
     },
     methods: {
      //点击回调事件
      // handleOpen(key, keyPath) {
      //   console.log(key, keyPath);
      // },
      // handleClose(key, keyPath) {
      //   console.log(key, keyPath);
      // },
      checkBol:function(){
        this.$store.commit('changeBol');
        this.isShow=false;
      },
      showtip:function(){
       if(this.isCollapse==true){
        this.isShow=true;
      }else{
        this.isShow=false
      }
    },
    showtipover:function(){
      this.isShow=false;
    }
  },
  computed:{
    navbar(){
      return this.$store.state.navbar;
    },
    isCollapse(){
       // console.log(this.$store.state.isCollapse)
       return this.$store.state.isCollapse
     }
   }
 }
 </script>
 <style scoped>
 *{
   margin: 0;
   padding: 0;
 }
 .el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
}
.el-menu-vertical-demo{
  height:98%;
}
.auto{
  overflow-y:auto;

}
::-webkit-scrollbar {width: 0px;height: 1px;}::-webkit-scrollbar-thumb {border-radius: 5px;-webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);background: rgba(0, 0, 0, 0.2);
}
.inherit{
  overflow: inherit;
}
.el-menu{
  height:90%;  
  background:#2b3141;
}
.packup{
  font-size:18px;
  padding:5px;
  background:#2B3141;
  color:#fff;
  cursor:pointer;
  height:30px;
  line-height: 30px;
  position:relative;
  margin-top:0px;
}
.packup i{
  padding-left:18px;
  padding-top:8px;
}
.box{
 width: 100px;
 display:inline-block;
 overflow:hidden;
 vertical-align: -8px;
 padding-left:5px;
}
.box p{
  width:100px;
}
.showtip{
  position:absolute;
  left:68px;
  top:3px;
  width:200px;
  height:40px;
  line-height:40px;
  padding-left:10px;
  font-size:16px;
  background:#2b3141;
  z-index:1000;
}

/*过渡动画*/
.fade-enter-active {
  animation-name: fold-in;
  animation-duration:.3s;
}
.fade-leave-active{
 animation-name: fold-out;
 animation-duration:.3s;
}
@keyframes fold-in{
  0%{
    width:0px;
  }
  50%{
    width:50px;
  }
  100%{
    width:100px;
  }
}
@keyframes fold-out{
  0%{
    width:100px;
  }
  50%{
    width:50px;
  }
  100%{
    width:0px;
  }
}
</style>
