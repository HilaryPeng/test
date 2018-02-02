<template>
<div class='slider'>
	<ul class='firstul'>
		<li v-for='(item,index) in lists'  @click='doThis(index)' :class='{active:index==isActive}'>
		{{item.address}}</li>
	</ul>

	<!-- <p>{{count}}</p>
	<el-button @click='subtract' type='info'>点击减少</el-button> -->
</div>




</template>
<script type="text/javascript">
export default{
	data(){
		return{
			lists:[{address:'index'},
				   {address:"formcheck"},
				   {address:"table"},
				   {address:"form"},
				   {address:"post"},
				   {address:"echart"},
				   {address:"fliter"},],
			isActive:0,
			tagItem:['index'],

		}
	},
	created:function(){
		// this.$axios.get('api/beimei/interface/v1.0/cleanArid/selectCleanArid',{
		// 	params:{
		// 	"cleanId":"1",
		// 	}
		// })
		// .then(data=>{
		// 	console.log(data.data.rows)
		// })
		// .catch(error=>{
		// 	console.log(error)
		// })


	},
	computed:{
		count () {
	    return this.$store.state.count
    }
	},
	methods:{
		subtract(){
			this.$store.commit('subtract')
		},
		doThis:function($index){
			this.isActive=$index; //控制点击之后菜单被选中的颜色
			let router=this.lists[$index].address //获取选中的变量 
			this.$router.push(router) //跳转路由
			this.tagItem.push(router); //将获取的路由推送给tagItem这个数组
			this.tagItem=[...new Set(this.tagItem)]; //将数组进行去重
			this.$parent.$refs.tag.item=this.tagItem; //将去重后的数组给到tags组件的数组
			this.$parent.$refs.tag.isActive=this.tagItem.length-1; //控制tags被选中的颜色
			//console.log(this.$parent.$refs.tag.item) ;

			for(let i=0;i<this.$parent.$refs.tag.item.length;i++){
				if(this.$parent.$refs.tag.item[i] ==router){
						this.$parent.$refs.tag.isActive=i
				}
			};  //对重新选中 并且tags组件里有的数组进行一个排序 并给予其颜色


		}
	}

}

</script>

<style scoped>
	.slider{
		background:#ddd;

	}
	.slider .firstul li{
		height:40px;
		line-height:40px;
		text-align: center;
		font-size:18px;
		cursor:pointer;
	}
	.slider .firstul li.active{
		background:#eee;
	}
	.slider .firstul li:hover{
		background:#eee;
	}


</style>