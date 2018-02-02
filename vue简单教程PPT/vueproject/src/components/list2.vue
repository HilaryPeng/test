<template>
	<div id="list2">
		<p>{{msg}}</p>
		<p>我是列表页2中的count:{{count}}</p>

	<button @click='doAdd'>点击我增加count</button>
	</div>

</template>
<script type="text/javascript">
	export default{
		name:'list2',
		created:function(){
			//console.log(this)
		},

		data:function(){
			return {
				msg:'list2'
			}
		},
		computed:{
			count:function(){
				return this.$store.state.count
			}
		},
		methods:{
			doAdd:function(){
				this.$store.commit('add')
			}
		}


	}
</script>
<style type="text/css">
	

</style>