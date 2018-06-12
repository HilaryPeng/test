	<template>
		<div id="system-parameter">
			<el-form ref='parameterform' :model='parameterform' :label-position="labelPosition" label-width='110px' :rules='rules'>
				<el-form-item label='系统邮箱' prop='email'>
					<el-input v-model='parameterform.email'></el-input>
				</el-form-item>
				<el-row>
					<el-col :span='11'>
						<el-form-item label='邮箱密码' prop='password'>
							<el-input v-model='parameterform.password'></el-input>
						</el-form-item>

					</el-col>				
					<el-col :span='11' :offset='2'>
						<el-form-item label='初始登录密码' prop='initpassword'>
							<el-input v-model='parameterform.initpassword'></el-input>
						</el-form-item>
					</el-col>
				</el-row>
				<el-row>
					<el-row>
						<el-col :span="7">
							<el-form-item label='数据锁定时间' prop='startTime'>
								<el-time-select
								placeholder="起始时间"
								v-model="parameterform.startTime"
								:picker-options="{
									start: '08:30',
									step: '00:15',
									end: '18:30'
								}"> 
							</el-time-select>
						</el-form-item>
					</el-col>
					<el-col :span="12">
						<el-form-item label='至' prop='endTime'>
							<el-time-select
							placeholder="结束时间"
							v-model="parameterform.endTime"
							:picker-options="{
								start: '08:30',
								step: '00:15',
								end: '18:30',
								minTime: parameterform.startTime
							}">
						</el-time-select>
					</el-form-item>
				</el-col>
			</el-row>
		</el-form-item>
	</el-col>
	</el-row>
	<p class='badmail'>异常邮件发送至</p>
	<el-input v-model='parameterform.bodmail' placeholder='多个邮件用分号表示'></el-input>
	<el-form-item>
		<el-button type='primary' class='parameterformsave' @click="submitForm('parameterform')">保存</el-button>
	</el-form-item>
	</el-form>
	</div>
	</template>
	<script type="text/javascript">
	export default {
		data(){
				//自定义校验邮件规则
				var  isEmail=(rule,value,callback)=>{
					let reg=/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((.[a-zA-Z0-9_-]{2,3}){1,2})$/;
					if(!reg.test(value)){
						callback(new Error('请输入正确的邮件'))
					}else{
						callback();
					}
				}
				var requiretime=(rule,value,callback)=>{
					if(value){
						callback();
					}else{
						callback(new Error('请选择结束时间'))
					}
				}
				return {
					parameterform:{
						email:'',
						password:'',
						initpassword:'',
						startTime: '',
						endTime: '',
						bodmail:''
					},
					labelPosition:'right',
					rules:{
						email:[{required:true,validator:isEmail,trigger:'blur'}],
						password:[{required:true,message:'请输入邮件',trigger:'blur'}],
						initpassword:[{required:true,message:'请输入邮件',trigger:'blur'}],
						startTime:[{required:true,message:'请选择开始时间',trigger:'blur'}],
						endTime:[{validator:requiretime,trigger:'blur'}]
					}
				}

			},
			methods:{
				submitForm(formName) {
					this.$refs[formName].validate((valid) => {
						if (valid) {
							console.log('提交数据')
						} else {
							console.log('error submit!!');
							return false;
						}
					});
				},
			}

		}


		</script>
		<style type="text/css" scoped>
		#system-parameter{
			width:800px;
			margin-top:20px;
			margin-left:20px;
		}
		.badmail{
			font-size: 14px;
			color: #2E406C;
			letter-spacing: 0;
			margin-bottom:15px;
		}
		.parameterformsave{
			margin-left:300px;
			margin-top:20px;
		}

		</style>
