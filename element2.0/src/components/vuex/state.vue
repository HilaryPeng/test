<template>
	<div id='state'>
		state
		<p>alt2:{{alt2}}</p>
		<p>count:{{count}}</p>
		<p>peng:{{peng}}</p>
		<p>msg:{{msg}}</p>
		<p>alt:{{alt}}</p>
		<router-link to='getter'>去getter页</router-link>
	</div>

</template>
<script type="text/javascript">
import {mapState} from 'vuex'
	export default{
		name:'state',
		data () {
			return {
				 alt:736052348
			}
		},
		methods:{
		},

		//这个是用计算属性进行返回所使用的方法
		// computed:{
		// 	count:function(){
		// 		return this.$store.state.count,
		// 	}
		// }

		//这个是通过辅助函数返回对象的形式
		// computed:mapState({
		// 	count:'count',
		// 	msg:'msg',
		// 	peng:function(state){
		// 		return state.count+this.alt
		// 	}//如果是混合状态的话 那么我们需要写成函数的形式来进行返回
		// 
		// })
		//这个是通过辅助函数返回数组的形式

		// computed:mapState([
		// 		// 当映射的计算名称与state子节点名称向同时，我们也可以传一个字符串数组 那么其区别是更节约代码量
		// 		// 映射 this.count 为 store.state.count
		// 	'count',
		// 	'msg'
		// 	])

		//对象展开运算符的写法 alt2是指不是通过store的运算属性，而下面的..mapState是es6的对象扩展运算符，来进行混合使用
		computed:{
			alt2(){
				return this.alt+10
			},
			...mapState({
				count:'count',
				msg:'msg',
				peng:(state)=>state.count+10
					
				}) 
		}
	}	

// class上面绑定多个域名

</script>
<style scoped>
.box{
	width:100px;
	height:100px;
	background:red;
}
.box2{
	width:100px;
	height:100px;
	background:yellow;
}
.box3{
	border:1px solid green;
	transition:all 1s;
}
</style>