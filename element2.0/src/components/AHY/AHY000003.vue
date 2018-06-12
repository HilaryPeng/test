<template>
	<div id="duty">
		<div class="dutyleft">
			<div class="department clearfix">
				<p class='headoffice'><span><img src="../../../static/img/icon_menu_sel.png" height="12" width="12"></span>总部</p>
				<img src="../../../static/img/button_newly added.png" height="22" width="60" class='dutyadd' @click='addnewDepartment'>
			</div>
			<div class="department-con">
				<ul>
					<li v-for='(i,index) in duty' :key='i.id' class='clearfix departmentli' :class='{active:index==isActive}' @click='getDutydate(i,index)'>
						<div class="editinput" v-show='i.isShow'>
						<span class='dot'></span>
						<span>{{i.department}}</span>
						</div>
						<div class="editinput" v-show='!i.isShow'>
						<el-input v-model='i.department' size='mini' @keyup.enter.native="show(i)"></el-input>
						</div>
						<div class="edit">
							<ul>
								<li @click='moveup(index,duty)'><span><img src="../../../static/img/icon_move.png" height="14" width="12" alt=""></span></li>
								<li @click='movedown(index,duty)'><span><img src="../../../static/img/icon_down.png" height="14" width="12" alt=""></span></li>
								<li @click='movetop(index,duty)'><span><img src="../../../static/img/icon_top.png" height="14" width="12" alt=""></span></li>
								<li @click='movebottom(index,duty)'><span><img src="../../../static/img/icon_bottom.png" alt=""></span></li>
								<li @click='edit(i)'><span><img src="../../../static/img/icon_edit.png" height="14" width="13" alt=""></span></li>
								<li @click='delduty(index,duty)'><span><img src="../../../static/img/icon_close.png" height="12" width="12" alt=""></span></li>
							</ul>
						</div>
					</li>
				</ul>
			</div>
		</div>
		<!-- 部门信息 -->
		<div class="dutyright" v-show='isShow'>
			<div class="onself">
			<ul>
				<li>
					<span class='thisself' style='font-size:14px'>部门名称</span>
				</li>
				<li>
					<span class='selftitle'>{{thisSelf}}</span>
				</li>
				<li class='button'>
					<el-button type='primary' size='small' @click='addnewDuty'>新增职务</el-button>
				</li>
			</ul>
			<el-table :data='dutydata' border style='width:100%' fit v-loading.body="listLoading">
				<el-table-column  label='No.' width='80' align='center'>
					<template slot-scope="scope">
						<span>{{scope.$index}}</span>
					</template>
				</el-table-column>
				<el-table-column  label='职务名称' width='120' align='center'>
					<template slot-scope="scope">
						<span>{{scope.row.dutyname}}</span>
					</template>
				</el-table-column>
				<el-table-column  label='排序' width='260' align='center'>
					<template slot-scope="scope">
						<el-button type='primary' size='small' @click='moveup(scope.$index,dutydata)'>上移</el-button>
						<el-button type='primary' size='small' @click='movedown(scope.$index,dutydata)'>下移</el-button>
						<el-button type='primary' size='small' @click='movetop(scope.$index,dutydata)'>置顶</el-button>
						<el-button type='primary' size='small' @click='movebottom(scope.$index,dutydata)'>置底</el-button>
					</template>
				</el-table-column>
				<el-table-column  label='操作' min-width='260' align='left'>
					<template slot-scope="scope">
						<el-button type='primary' size='small' @click='copypage'>复制新增</el-button>
						<el-button type='primary' size='small' @click='details'>详情</el-button>
						<el-button type='primary' size='small' @click='delduty(scope.$index,dutydata)'>删除</el-button>
					</template>
				</el-table-column>
			</el-table>
		</div>
		</div>
		<!-- 弹出层1 新建职务 -->
		<el-dialog  :visible.sync="dialognewDuty">
			<el-form :label-position="labelPosition" label-width="80px" :model="newDuty" :rules='rules'>
				<div class="dutyname">
				  <el-form-item label="职务名称" prop='name'>
				    <el-input v-model="newDuty.name"></el-input>
				  </el-form-item>
			 	</div>
			 	<el-form-item label='职务权限' prop='jurisdiction'>
			 		<el-checkbox  class=''  v-model='newDuty.checkAll' @change='allCheck'>全选</el-checkbox>
			 		<div class="limit clearfix">
			 			<el-row >
			 				<el-col :span='6' class='limitleft center'>分类</el-col>
			 				<el-col :span='18' class='limitright center'>权限</el-col>
			 			</el-row>
			 			<el-row v-for='(i,index) in limits' key='i' >
			 				<el-col :span='6' class=' conleft' >
			 					<el-checkbox  v-model="newDuty.checkvalue[index].name" @change='secondAllcheck(index)' :label='i.name' :key='i.name'>{{i.name}}</el-checkbox>							
			 				</el-col>
			 				<el-col :span='18' class='conright'>
			 					<el-checkbox-group v-model="newDuty.checkvalue[index].children" >
								    <el-checkbox v-for="(city,index2) in i.children" :label="city" :key="city" @change='thiredCheck(index,index2)'>{{city}}</el-checkbox>
								</el-checkbox-group>
			 				</el-col>
			 			</el-row>
			 		</div>
				</el-form-item>
				<el-form-item class='formwidth'>
					<el-button type="primary" @click="save">保存</el-button>
    				<el-button @click='cancel(dialognewDuty)'>取消</el-button>
				</el-form-item>
			</el-form>
		</el-dialog>

		<!-- 弹出层2 详情页 -->
		<el-dialog :visible.sync="dutydetails">
			<el-form :label-position="labelPosition" label-width="80px" :model="copyDutyadd" :rules='rules'>
				<el-row>
					<el-col :span='10'>
				  <el-form-item label="部门">
				     <el-select v-model="copyDutyadd.value" placeholder="请选择">
					    <el-option
					      v-for="item in copyDutyadd.option"
					      :key="item.value"
					      :value="item.value">
					    </el-option>
					  </el-select>
				  </el-form-item>
					</el-col>
					<el-col :span='10' :offset='2'>
						 <el-form-item label="职务名称" prop='name'>
				    <el-input v-model="newDuty.name"></el-input>
				  </el-form-item>
					</el-col>
				</el-row>
			 	<el-form-item label='职务权限' prop='jurisdiction'>
			 		<el-checkbox  class=''  v-model='newDuty.checkAll' @change='allCheck'>全选</el-checkbox>
			 		<div class="limit clearfix">
			 			<el-row >
			 				<el-col :span='6' class='limitleft center'>分类</el-col>
			 				<el-col :span='18' class='limitright center'>权限</el-col>
			 			</el-row>
			 			<el-row v-for='(i,index) in limits' key='i' >
			 				<el-col :span='6' class=' conleft' >
			 					<el-checkbox  v-model="newDuty.checkvalue[index].name" @change='secondAllcheck(index)' :label='i.name' :key='i.name'>{{i.name}}</el-checkbox>							
			 				</el-col>
			 				<el-col :span='18' class='conright'>
			 					<el-checkbox-group v-model="newDuty.checkvalue[index].children" >
								    <el-checkbox v-for="(city,index2) in i.children" :label="city" :key="city" @change='thiredCheck(index,index2)'>{{city}}</el-checkbox>
								</el-checkbox-group>
			 				</el-col>
			 			</el-row>
			 		</div>
				</el-form-item>
				<el-form-item class='formwidth'>
					<el-button type="primary" @click="savecopy">保存</el-button>
    				<el-button @click='cancel(dutydetails)'>取消</el-button>
				</el-form-item>
			</el-form>

		</el-dialog>
	</div>
</template>
<script type="text/javascript">
import {moveup,movedown,movebottom,movetop} from './../comment/commentjs/comment.js'
console.log(movedown)
	export default {
		name:'duty',
		data(){
			return{	
				isActive:-1, //控制active状态
				isShow:false, //控制左边数据的显示
				listLoading:false,//缓冲层
				thisSelf:'', // 编辑对象
				dialognewDuty:false,//新增职务框
				dutydetails:false,//详情职务框
				duty:[{     //总部数据
					id:1,
					department:'总经理办公室',
					isShow:true
				},
				{
					id:2,
					department:'业务部',
					isShow:true
				},
				{
					id:3,
					department:'信息技术部第二部',
					isShow:true
				},
				{
					id:4,
					department:'法律事务部',
					isShow:true
				},
				{
					id:5,
					department:'行政部',
					isShow:true
				},
				{
					id:6,
					department:'财务部',
					isShow:true
				},{
					id:7,
					department:'人力资源部',
					isShow:true
				},
				{
					id:8,
					department:'数据中心',
					isShow:true
				},{
					id:9,
					department:'设计部门',
					isShow:true
				}],
				dutydata:[{ //对应部门的对应数据
					id:1,
					dutyname:'业务总监'
				},{
					id:2,
					dutyname:'客户经理'
				},{
					id:3,
					dutyname:'客户专员'
				},{
					id:4,
					dutyname:'稽核经理'
				},{
					id:5,
					dutyname:'稽核专员'
				},{
					id:6,
					dutyname:'数据主管'
				},{
					id:7,
					dutyname:'数据管理'
				}],
				//新增职务数据
				newDuty:{  
					name:'',
					jurisdiction:[],
					checkAll:false,
					checkvalue:[{name:'',children:[]},{name:'',children:[]},{name:'',children:[]},{name:'',children:[]}]
				},
				limits:[{name:'系统代码维护功能',children:['权限1','权限2','权限3']},{name:'密码策略配置',children:['权限1','权限2','权限3']},{name:'异常信息查看',children:['权限1','权限2','权限3']},{name:'职务权限设置',children:['权限1','权限2','权限3']}],
				labelPosition:'top',
				//验证规则
				rules:{
					name:[{required:true,message:'请填入职务名称',trigger:'blur'}],
					jurisdiction:[{required:true,message:'请选择职务权限',trigger:'blur'}]
				},
				//赋值新增数据
				copyDutyadd:{
					name:'',
					value:'',
					option:[{value:'总经理办公室'},{value:'财务部'},{value:'行政部'},{value:'人力资源部'}],
					checkAll:false,
					checkvalue:[{name:'',children:[]},{name:'',children:[]},{name:'',children:[]},{name:'',children:[]}]
				}
			}
		},
		created:function(){
		
		},
		methods:{
			//编辑
			savecopy:function(){
				this.dutydetails=false;
			},
			edit:function(i){
				i.isShow=!i.isShow;
			},
			//点击请求数据
			getDutydate:function(i,index){
				this.isActive=index;
				this.isShow=true;
				this.thisSelf=i.department;
			},
			//回车编辑完毕
			show:function(e){
				e.isShow=true;
			},
			//新增部门
			addnewDepartment:function(){
				let obj={};
				obj.id=this.duty.length+1;
				obj.department='';
				obj.isShow=false;
				this.duty.push(obj)
			},
			// 排序操作
			moveup:moveup,
			movebottom:movebottom,
			movetop:movetop,
			movedown:movedown,
			// 删除职务操作
			delduty:function(e,data){
				this.$confirm('此操作将删除该部门, 是否继续?', '提示', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					type: 'warning'
				}).then(()=>{
					let i=e;
					//console.log(i)
					data.splice(i,1);
					this.$message({
						type: 'success',
						message: '删除成功!',
						duration:1000
					});
				}).catch(()=>{
					//失败操作
				})
			},
			//弹出层
			addnewDuty:function(){
				this.dialognewDuty=true;
			},
			// 二级权限点击事件 
			secondAllcheck:function(index){
				// console.log(this.newDuty.checkvalue[index].name)
			if(this.newDuty.checkvalue[index].name){
				this.newDuty.checkvalue[index].children=this.limits[index].children;
				//console.log(this.newDuty.checkvalue[index].name)
				//遍历看是否全部选中
				}else{
					this.newDuty.checkvalue[index].children=[]
				}
			for(let i=0;i<this.limits.length;i++){
					// console.log(this.newDuty.checkvalue[i])
				if(this.newDuty.checkvalue[i].children.length==this.limits[i].children.length){
					this.newDuty.checkAll=true;
				}else{
					this.newDuty.checkAll=false;
					return false;
			}
			}
			},
			// 三级权限点击事件
			thiredCheck:function(index,index2){
				//console.log(index,index2);
				//console.log(this.newDuty.checkvalue)
				if(this.newDuty.checkvalue[index].children.length>0){
					this.newDuty.checkvalue[index].name=true;
				}else{
					this.newDuty.checkvalue[index].name=false;
				};

				for(let i=0;i<this.limits.length;i++){
					// console.log(this.newDuty.checkvalue[i])
				if(this.newDuty.checkvalue[i].children.length==this.limits[i].children.length){
					this.newDuty.checkAll=true;
				}else{
					this.newDuty.checkAll=false;
					return false;
			}
			}
			},
			//全选事件
			allCheck:function(){
				if(this.newDuty.checkAll){

				for( let i=0;i<this.limits.length;i++){
					this.newDuty.checkvalue[i].name=true;
					this.newDuty.checkvalue[i].children=this.limits[i].children;
				}

				}else{
					for( let i=0;i<this.limits.length;i++){
					this.newDuty.checkvalue[i].name='';
					this.newDuty.checkvalue[i].children=[];
				}
				}
			},
			//复制新增
			copypage:function(){
				this.dutydetails=true;
			},
			details:function(){
				this.dialognewDuty=true;
			},

			//保存新增
			save:function(){
				console.log('提交数据');
				let obj={};
				obj.id=this.dutydata.length+1;
				obj.dutyname=this.newDuty.name;
				this.dutydata.push(obj);
				this.dialognewDuty=false;
			},
			cancel:function(e){
				this.dialognewDuty=false;
				this.dutydetails=false;
				e=false;

			},
		}
	}
</script>
<style type="text/css" scoped>
	.dutyleft{
		position:fixed;
		width:280px;
		height:100%;
		background: #C7DFFC;
		box-shadow: 2px 2px 4px 0 #C7DFFC;
		overflow-y:auto;
		box-sizing: border-box;
		z-index:100;
	}

	.department{
		background: #5AADFF;
		height:34px;
		line-height:34px;
		overflow: hidden;
	}
	 .headoffice{
		float:left;
		font-size: 14px;
		color: #FFFFFF;
	}
	.headoffice span{
		display:inline-block;
		margin-left:10px;
		margin-right:5px;
		vertical-align: -1px;
	}
	.dutyadd{
		float:right;
		margin-top:6px;
		margin-right:10px;
		cursor:pointer;
	}
	.edit{
		float:right;
		margin-top:0px;
	}
	.edit ul li{
		float:left;
		margin-right:10px;
		cursor:pointer;

	}
	.departmentli{
		background: #E5F2FF;
		font-size: 12px;
		color: #2E406C;
		cursor:pointer;
		height:30px;
		box-sizing:border-box;
		line-height:30px;
		padding-left:10px;
	}
	.departmentli span img{

	}
	.departmentli:hover{
		background: #8FA9D5;
		color:#fff;
	}
	.departmentli:hover .dot{
		background:#fff;
	}
	.dot{
		display:inline-block;
		width:6px;
		height:6px;
		background:#2E406C;
		border-radius:6px;
		vertical-align: 1px;
		margin-right:5px;
	}
	.editinput{
		float:left;
		width:120px;
		overflow: hidden;
		text-overflow:ellipsis;
		white-space: nowrap;

	}
	.active{
		background: #8FA9D5;
		color:#fff;
	}
	.active .dot{
		background:#fff;
	}
	.dutyright{
		padding-left:280px;
	}
	.button{
		margin-left:20px;
		margin-top:-2px;
	}
	.dutyname{
		width:280px;
	}
	.limitleft,.limitright{
		background: #5AADFF;
		border: 1px solid #2E406C;
		color: #2E406C;
	}
	.limitright{
		border-left:none;
	}
	.conleft{
		border:1px solid #ccc;
		padding-left:5px;
	}

	.conright{
		border:1px solid #ccc;
		border-left:none;
		padding-left:5px;
	}
	.formwidth{
		width:100%;
		text-align: center
	}
</style>