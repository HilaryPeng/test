<template>
	<div id="getter">
		<p>getter</p>
		<h2>未删选过的</h2>
		<ul>
			<li v-for='i of item'>
				name:{{i.name}}
				<br>
				age:{{i.age}}
			</li>
		</ul>
		<h2>筛选后的操作</h2>
	 <ul>
			<li v-for='i of item2'>
				name:{{i.name}}
				<br>
				age:{{i.age}}
			</li>
		</ul>

	<router-link to='mutations'>去mutations</router-link>
	</div>


</template>
<script type="text/javascript">
	import {mapState} from 'vuex'
	import {mapGetters} from 'vuex'
	export default{
		name:'getter',
		data(){
			return{

			}
		},
		methods:{

		},
		computed:{

			...mapState({
				item:'item'
			}),
			...mapGetters([
				'item2'//单独写也是要加双引号的 不能直接写一个变量
				])
		}
	}
</script>
<style type="text/css" scoped>
</style>