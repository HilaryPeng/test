<template>
	<div id="mutations">
		<h2>mutations</h2>
	<p>count:{{count}}</p>
	<button @click='add'>点击增加</button>
	<button @click='addtwo({num:50})'>点击增加参数</button>
	<button @click='reduce'>点击减少其他类型</button>
	<router-link to='action'>去action页体验异步</router-link>
<!-- 	<button @click='asyacadd'>异步增加</button> -->
	</div>
</template>
<script type="text/javascript">
import {mapState} from 'vuex'
import {mapMutations } from 'vuex'
	export default{
		name:'mutations',
		data(){
			return{

			}
		},
		methods:{
			// ...mapMutations({
			// 	add:'add',
			// }),
			...mapMutations([
				'add',
				'addtwo'
				]),
			// addtwo:function(){
			// 	this.$store.commit('addtwo',{num:50})
			// },
			reduce:function(){
				this.$store.commit({
					type:'reduce',
					num:10
				})
			},

		},
		computed:{
			...mapState({
				count:'count'
			})
		}
	}
</script>
<style type="text/css" scoped></style>