<template>
  <div class='con'>
   <v-head class='header' msg='something'></v-head>
   <slider class='slider'></slider>
   <router-view :class='{content:!isCollapse,contentpd:isCollapse}' class='transionpd'></router-view>
   </div>
</template>

<script>
import vHead from './header.vue';
import Slider from './slider.vue';
  export default {
    name:'con',
    data() {
      return {

      };
    },
    components:{
        vHead,Slider
    },
    computed:{
      isCollapse(){
       // console.log(this.$store.state.isCollapse)
        return this.$store.state.isCollapse
      }
    }
  }
</script>

<style scoped>

.header{
  width:100%;
  height:60px;
  background:#0099ff;
  box-sizing: border-box;
  position:fixed;
  top:0px;
  left:0px;
  min-width:1000px;
  z-index:2050;
}

.slider{
  position:fixed;
  top:60px;
  left:0px;
  height:100%;
  z-index:1000;
}
.transionpd{
  transition:all .5s;
  padding-top:60px;
}
.content{
  padding-left:200px;
}
.contentpd{
  padding-left:65px;
}



</style>
