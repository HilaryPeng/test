<template>
	<div id="error">
		<p class='sorry'>sorry</p>
		<p class='center'><span>404</span>你访问的页面不存在</p>

	</div>
</template>
<script type="text/javascript">
	export default {
		name:'error',
		date(){
			return{

			}
		}
	}


</script>
<style type="text/css" scoped>
	#error{
		position:absolute;
		height:100%;
		width:100%;
		background:#eee;
		text-align: center
	}
	.center{
		font-size:25px;
		padding-top:80px;
	}
	.center span{
		font-size:40px;
		padding-right:15px;
	}
	.sorry{
		font-size:50px;
		padding-top:60px;
	}
</style>