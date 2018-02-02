<template>
	<div id="form">
	<p class='contenttitle'>自定义表单验证</p>
		<div class="allcontent">
			<el-row>
				<el-col :span='8'>
					<el-form :model='form2' label-width='80px' ref='form2' :rules="rules2">

						<el-form-item label='姓名' prop='name' >
							<el-input v-model='form2.name' placeholder='请输入您的姓名'></el-input>
						</el-form-item>

						<el-form-item label='年龄' prop='age' >
							<el-input  v-model.number='form2.age' placeholder='请输入您的年龄'></el-input>
						</el-form-item>

						<el-form-item label='密码' prop='password'>
							<el-input type='' v-model='form2.password' placeholder='请输入密码' auto-complete="off" type='password'></el-input>
						</el-form-item>
						<el-form-item>
							<el-button type='primary' @click='submitForm2' v-on:keyup.enter='submitForm2'>提交</el-button>
							<el-button type='danger' @click='resetForm2'>重置</el-button>
						</el-form-item>
					</el-form>
				</el-col>
			</el-row>

		</div>
		<p class='contenttitle'>表单验证</p>
		<div class="allcontent">
			<el-form ref='form' :model='form' label-width='80px' :rules='rules'>

				<el-form-item label='活动名称' prop='name'>
					<el-input v-model='form.name'></el-input>
				</el-form-item>

				<el-form-item label='活动区域' prop='region'>
					<el-select v-model='form.region' placeholder='请选择活动区域' >
						<el-option label='区域一' value='shanghai' ></el-option>
						<el-option label='区域二' value = 'beijing'></el-option>
					</el-select>
				</el-form-item>

				<el-form-item label='活动时间' required>
					<el-col :span='11'>
						<el-form-item prop='date1'>
							<el-date-picker type='date'  placeholder='选择日期' v-model ='form.date1' style='width:100%'></el-date-picker>
						</el-form-item>
					</el-col>
					<!-- 这里绑定的form.date1 和prop =date1 是一样的 必须要是一样的名字 -->
					<el-col class="line" :span="2">-</el-col>
					<el-col :span='11'>
						<el-form-item prop='date2'>
							<el-time-picker type='fixed-time' placeholder='选择时间' v-model='form.date2' style='width:100%'></el-time-picker>
						</el-form-item>
					</el-col>
				</el-form-item>

				<el-form-item label='即时配送' prop='delivery'>
					<el-switch on-text='' off-text='' v-model='form.delivery'></el-switch>
				</el-form-item>

				<el-form-item label='活动性质' prop='type'>
					<el-checkbox-group v-model='form.type'>
						<el-checkbox label='美食/餐厅线上活动' name='type'></el-checkbox>
						<el-checkbox label="地推活动" name='type'></el-checkbox>
						<el-checkbox label='线下主题活动' name='type'></el-checkbox>
						<el-checkbox label='单纯品牌曝光' name='type'></el-checkbox>
					</el-checkbox-group>
				</el-form-item>


				<el-form-item label='特殊资源' prop='resource'>
					<el-radio-group v-model='form.resource' >
						<el-radio label='线上品牌商赞助'></el-radio>
						<el-radio label='线下场地免费'></el-radio>
					</el-radio-group>
				</el-form-item>

				<el-form-item label='活动形式' prop='desc'>
					<el-input type='textarea' v-model='form.desc'></el-input>
				</el-form-item>

				<el-form-item>
					<el-button type='primary' @click.enter='submitForm("form")' >提交</el-button>
					<el-button @click='resetForm("form")'>重置</el-button>
				</el-form-item>

			</el-form>
		</div>
		

	</div>
</template>
<script>
	export default{
		id:"#form",
		data () {
			var checkName=function(rule,value,callback){
				if(!value){
					return callback(new Error('姓名不能为空'))
				}else if(value!='admin'){

					return callback(new Error('没有您的用户名 请重新输入'))
				}else{
					callback();
				}
				//这个steTimeout 的意思就是 输入离开焦点之后延时多少秒执行该函数，看是否符合要求 ，并出现动画等效果
			};
			var checkAge=function(rule,value,callback){

					if(!value){
					return callback(new Error('请输入您的年龄'))
				}else if(value>120){
					return callback(new Error('您的年龄似乎有些大'))
				}else if(value<0){
					return callback(new Error('请输入正确的年龄'))
				}else{
					return callback()
				}
				
			
			};
			var checkPassword=(rule,value,callback)=>{
				if(!value){
					callback('密码不能为空')
				}else if(value!='admin'){
					callback('请输入正确的密码')
				}else{
					callback();
				}
			}
			return {
				form:{
					name:'',
					region:'',
					date1:'',
					date2:'',
					delivery:true,
					type:[],
					resource:'',
					desc:''
				},
				form2:{
					name:'',
					age:'',
					password:''
				},
				rules2:{
					name:[{
						 validator: checkName, trigger: 'blur,change' 
					}],
					age:[{
						required:true,message:'年龄不能为空'
					},{
						type:'number',message:'年龄必须为数字',
					},{
						validator:checkAge,trigger:'blur,change'
					}],
					password:[{
						validator:checkPassword,trigger:'blur,change'
					}]
				},
				rules:{
					name:[{
						required:true,message:'请输入活动名称',trigger:'blur'
					},{
						min:3,max:5,message:'长度在3到5个字符',trigger:'blur'
					}],
					region:[{
						required:true,message:'请选择活动区域',trigger:'change'
					}],
					date1:[{
						type:'date',required:true,message:'请选择日期',trigger:'change'
					}],
					date2:[{
						type:'date',required:true,message:'请选择事件',trigger:'change'
					}],
					type:[{
						type:'array',required:true,message:'请至少选择一个活动性质',trigger:'change'
					}],
					resource:[{
						required:true,message:'请选择活动资源',trigger:'change'
					}],
					desc:[{
						required:true,message:'请填写活动形式',trigger:'blur'
					}]

				},
			}
		},
		methods:{
			submitForm:function(form){
				this.$refs[form].validate((valid)=>{
					if(valid){
						this.$router.push('table')
					}else{
						console.log('error submit');
						return false
					}
				});
				console.log(this.$refs.form)
				console.log(this);
				console.log(this.form);
			},
			resetForm:function(form){
				this.$refs[form].resetFields();
			},
			submitForm2:function(){
				this.$refs.form2.validate((valid)=>{
					if (valid) {
						this.$router.push('table')
					} else {
						console.log('error submit!!');
						return false;
					}
				})
			},
			resetForm2:function(){
				this.$refs.form2.resetFields();
			},

		}
	}
	// Form 组件提供了表单验证的功能，只需要通过 rule 属性传入约定的验证规则，并 Form-Item 的 prop 属性设置为需校验的字段名即可。校验规则参见 
	// async-validator

</script>

<style scoped>
	ul{
		list-style:none;
	}

	.line{
		text-align: center
	}
</style>