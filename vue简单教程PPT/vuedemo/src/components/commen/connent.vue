<template>
<div>
	<v-head class='header'></v-head>
	<div class="container clearfix">
	<v-slider class='slider' ref='slider'></v-slider>
	<tag class='tag' ref='tag'></tag>
	<div class='content'> 
	<router-view></router-view>
	</div>
	
</div>
</div>

</template>
<script type="text/javascript">

import vHead from './header.vue'
import vSlider from './slider.vue'
import tag from './tag.vue'
	export default{
		components:{
			vHead,vSlider,tag
		},
		methods:{

		}
	}
</script>

<style scoped>
	.header{
		position: fixed;
		top:0px;
		left:0px;
		width:100%;
		z-index: 2000;
	}
	.tag{
		position:fixed;
		top:60px;
		width:100%;
		left:200px;
		height:30px;
		z-index:2000;
	}
	.slider{
		position:fixed;
		top:60px;
		height:100%;
		left:0px;
		width:200px;
		background:red;
		
	}
	.content{
		padding-top:110px;
		padding-left:220px;
		padding-right:20px;
		padding-bottom:20px;
		width:100%;
		box-sizing:border-box;

	}
	  .el-table .positive-row {
    background: #e2f0e4;
  }
</style>