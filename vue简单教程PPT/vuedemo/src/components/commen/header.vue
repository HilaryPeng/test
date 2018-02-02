<template>
<div>
	<p>首页
	<!-- <span>{{count}}</span> -->
<!-- 		<el-button @click='add' type='warning'>点击增加</el-button> -->
	</p>

</div>

</template>
<script type="text/javascript">




export default {
    computed:{
		count () {
	    return this.$store.state.count
    }
	},
	methods:{
		add:function(){
			this.$store.commit('add')
		}
	}

}


</script>

<style scoped>
	
p{
	font-size:24px;
	height:60px;
	line-height: 60px;
	background:blue;
	text-align:center;
	width:100%;
	color:#fff;
}

</style>