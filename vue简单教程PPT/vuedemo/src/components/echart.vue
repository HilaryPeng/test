<template>
	<div id="echart">
		<p class="contenttitle">图表</p>
		<div id='myChart' style='width:800px;height:400px'></div>

	</div>
</template>
<script>
//引入基本模板
let echarts=require('echarts/lib/echarts')
//引入柱状图组件
require('echarts/lib/chart/bar')
require('echarts/lib/component/tooltip')
require('echarts/lib/component/title')
//局部使用echart 只引入需要的 减少打包因素的影响
export default{
	id:"#echart",
	data () {
		return {
			msg:'Welcome to Your Vue.js App',
			series:[{
					name: '销量',
					type: 'bar',
					data: [5, 20, 36, 10, 10, 20]
				}],
			//这里对数据进行一个代理 可以进行一些交互等操作
		}
	},
	mounted(){
		this.drawLine();
	},
	methods:{
		drawLine:function(){
			let myChart = echarts.init(document.getElementById('myChart'));
			myChart.setOption({
				title: { text: 'ECharts 入门示例' },
				tooltip: {},
				xAxis: {
					data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
				},
				yAxis: {},
				series: this.series,
			});
		}

	}
}


</script>
<style scoped>
	
</style>