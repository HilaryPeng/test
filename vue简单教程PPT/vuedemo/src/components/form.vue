<template>
	<div id="appTem1">
		<p class='contenttitle'>官网表单验证</p>
		<div class="allcontent">
			<el-form :model='form' ref='form' :rules='rules' label-width='80px' >
				<el-form-item label='用户名' prop='name'>
					<el-input v-model='form.name'></el-input>
				</el-form-item>
				<el-form-item label='密码' prop='password'>
					<el-input v-model='form.password'></el-input>
				</el-form-item>
			</el-form>
		</div>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				form: {
					name:'',
					password:'',
				},
				rules: {
					name:[{
						required:true,
						message:'请输入您的用户名并保证字符在3到五位之间',
						min:3,
						max:5,
						trigger:'blur,change'
					}],
					password:[{
						required:true,
						message:'请输入密码'
					}]
				}
			};
		},
		methods: {
			
			
		}
	}
</script>
<style>



</style>