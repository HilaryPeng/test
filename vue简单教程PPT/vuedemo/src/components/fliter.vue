<template>
	<div class="filter">
		<p class="contenttitle">筛选过滤</p>
		<div class="allcontent">
			<el-row>
				<el-col :span='6'>
					<el-input placeholder='请输入关键字' v-model='search'></el-input>
				</el-col>
			</el-row>
			<el-row>
				<el-col>
					<ul class='searchData'>
						<li v-for='item in searchData' >
							{{item.name}},价格：{{item.price}}
						</li>
					</ul>
				</el-col>
			</el-row>
		</div>
	</div>
</template>
<script type="text/javascript">
	export default {
		data(){
			return {
				products: [{
					name: '苹果',
					price: 25,
					category: "水果"
				}, {
					name: '香蕉',
					price: 15,
					category: "水果"
				}, {
					name: '雪梨',
					price: 65,
					category: "水果"
				}, {
					name: '宝马',
					price: 2500,
					category: "汽车"
				}, {
					name: '奔驰',
					price: 10025,
					category: "汽车"
				}, {
					name: '柑橘',
					price: 15,
					category: "水果"
				}, {
					name: '奥迪',
					price: 25,
					category: "汽车"
				}],
				search:'',
			}

		},
		methods:{

		},
		computed:{
			searchData: function(){
				var search = this.search;
				//这个if(search) 是什么意思
				if(search){
					return this.products.filter(function(t){
						// console.log(t); 这个只是一个参数 ，传入这个函数 进行一个对比
						return Object.keys(t).some(function(key){
							//console.log(key)  key是键值
							//对比这个t[key]是否有 适合的数组 返回出去
							return String(t[key]).toLowerCase().indexOf(search)>-1
						})
					})
				}
				return this.products
			}
	}
}
// object.keys() 获取所有可枚举的属性，返回一个数组
</script>
<style type="text/css">
	.searchData li{
		height:30px;
		line-height:30px;
		padding:5px;
	}

</style>