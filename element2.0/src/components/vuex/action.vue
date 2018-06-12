<template>
	<div id="action">
		<h2>action</h2>
		<p>请求来的数据：{{getName}}</p>
		<p>count:{{count}}</p>
		<button @click='checkAction'>异步操作状态</button>
		<button @click='add'>同步操作状态</button>
		<button @click='clickAsy'>点击我</button>
	</div>

</template>
<script type="text/javascript">
import {mapState} from 'vuex'
import {mapMutations} from 'vuex'
	export default{
		name:'action',
		data(){
			return{

			}
		},
		computed:{
			...mapState({
				count:'count',
				getName:'getName'
			})
		},
		methods:{
			...mapMutations({
				add:'add'
			}),
			checkAction(){
				this.$store.dispatch('actionsAdd')	
			},
			clickAsy:function(){
				// this.$axios.get('api/admin').then(data=>{
				// 	console.log(data.data);
				// 	this.post=data.data.name
				// })
				// .catch(error=>{
				// 	console.log(error)
				// })
				//分发状态
				this.$store.dispatch('getName')
			}
		}
	}

</script>
<style type="text/css" scoped></style>