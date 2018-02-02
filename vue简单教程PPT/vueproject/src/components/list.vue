<template>
	<div id="list">
		
		<p>{{msg}}</p>
		<p>我是列表页1中的count:{{count}}</p>
		<button @click='subcut'>点击一次就减少一个</button>
	</div>


</template>
<script type="text/javascript">
	export default{
		name:'list',
		data (){
			return {
				msg:'我是列表页'
			}
		},
		computed:{
			count (){
				return this.$store.state.count
			}
		},
		methods:{
			subcut:function(){
				this.$store.commit('subtract');
			}
		}
	}

</script>
<style type="text/css" scoped>
	



</style>