<template>
	<div id="table">
		<p class='contenttitle'>table</p>
		<div class="allcontent">
			

			<el-row :gutter='100'>
				<el-col :span="12">
					<el-table :data='tableData' style='width:100%' border stripe :row-class-name="tableRowClassName" >
						<el-table-column prop='date' label='日期' >
						</el-table-column>
						<el-table-column prop='name' label='姓名' >
						</el-table-column>
						<el-table-column prop='address' label='地址' >
						</el-table-column>

					</el-table>

				</el-col>				
				<el-col :span='12'>
					<el-table :data='tableData3' style='width:100%' border ref='multipleTable' tooltip-effect='dark' @selection-change='handleSelectionChange' >
						<el-table-column type='selection' width='55'></el-table-column>
						<el-table-column  label='日期' prop='date' >

						</el-table-column>
						<el-table-column prop='name' label='姓名' ></el-table-column>
						<el-table-column prop='address' label='地址' width='120' show-overflow-tooltip ></el-table-column>
						<!-- show-overflow-tooltip 当内容的格子无法一下在显示完时会以省略号的形式显示 全部会以鼠标hover上显示 -->
					</el-table>
					<div class='operation'>
						<el-button @click='toggleSelection([tableData3[1],tableData3[2]])'>选中第2行和第三行</el-button>

						<el-button @click='toggleSelection()'>取消选择</el-button>

					</div>
					<!-- <div class="block">
						<span class="demonstration">页数较少时的效果</span>
						<el-pagination
						layout="prev, pager, next"
						:total="text">
					</el-pagination>
				</div> -->
			</el-col>
		</el-row>




		<el-button @click='sure'>确定</el-button>
	</div>

	<p class='contenttitle'>table2</p>
	<div class="allcontent">
		<!-- stripe 和 :row-class-name不能共存-->

		<el-row>
			<el-col :span="12" >
				<el-table

				:data="tableData2"
				style="width: 100%"
				:row-class-name="tableRowClassName"
				border
				>
				<el-table-column
				prop="date"
				label="日期"
				width="180">
			</el-table-column>
			<el-table-column
			prop="name"
			label="姓名"
			width="180">
		</el-table-column>
		<el-table-column
		prop="address"
		label="地址">
	</el-table-column>
</el-table>

</el-col>
</el-row>




<el-button @click='sure'>确定</el-button>
</div>

</div>


</template>
<script>
	export default{
		id:"#table", 
		data () {
			return {
				loading:true,
				tableData: [{
					date: '2016-05-02',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1518 弄上海市普陀区金沙江路上海市普陀区金沙江路上海市普陀区金沙江路上海市普陀区金沙江路'
				}, {
					date: '2016-05-04',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1517 弄'
				}, {
					date: '2016-05-01',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1519 弄'
				}, {
					date: '2016-05-03',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1516 弄'
				}],
				tableData2: [{
					date: '2016-05-02',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1518 弄',
				}, {
					date: '2016-05-04',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1518 弄'
				}, {
					date: '2016-05-01',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1518 弄',
				}, {
					date: '2016-05-03',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1518 弄'
				}],
				tableData3: [{
					date: '2016-05-03',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1518 弄'
				}, {
					date: '2016-05-02',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1518 弄'
				}, {
					date: '2016-05-04',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1518 弄'
				}, {
					date: '2016-05-01',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1518 弄'
				}, {
					date: '2016-05-08',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1518 弄'
				}, {
					date: '2016-05-06',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1518 弄'
				}, {
					date: '2016-05-07',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1518 弄'
				},{
					date: '2016-05-03',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1518 弄'
				}, {
					date: '2016-05-02',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1518 弄'
				}, {
					date: '2016-05-04',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1518 弄'
				}, {
					date: '2016-05-01',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1518 弄'
				}, {
					date: '2016-05-08',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1518 弄'
				}, {
					date: '2016-05-06',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1518 弄'
				}, {
					date: '2016-05-07',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1518 弄'
				}],
				multipleSelection:[],
			}
		},
		computed:{
			// text:function(){
			// 	console.log(typeof(this.tableData3[0].address))
			// //	return this.tableData3.length*10;

			// }
		},
		methods:{
			sure:function(){
				console.log(this.tableData)
				this.$router.push('/echart')
			},
			tableRowClassName(row, index) {
				if (index === 1) {
					return 'info-row';
				} else if (index === 3) {
					return 'positive-row';
				}
				return '';
			},
			toggleSelection(rows){
				if(rows){
					rows.forEach(row=>{
						this.$refs.multipleTable.toggleRowSelection(row);
					})
				}else{
					this.$refs.multipleTable.clearSelection();
				}
			},
			handleSelectionChange:function (val){
				this.multipleSelection=val;
			},

		}
	}

</script>
<style scoped>
	#table{
		padding:20px;
	}

	.el-table .positive-row {
		background: #e2f0e4;
	}
	
	/*关于上面这两个 写到当前页面不管用 只能写到了index.css里面才管用 ，感觉这里面的样式没有被加载出来*/
</style>