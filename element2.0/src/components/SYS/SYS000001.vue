<template>
	<div id="system-code" class='clearfix'>
		<div class="systemnav">
			<div class='codesearch'>
				<el-input placeholder="请输入关键词..." v-model='searchKey'>
					<el-button slot="append" icon="search" type='primary'></el-button>
				</el-input>
			</div>
			<ul class='codeitem'>
				<li v-for='(i,index) in codeFliter' :key='i.id' :class='{active:index==isActive}' 
				@click='getData(i,index)'>
				{{i.codename}}
			</li>
		</ul>
	</div>
	<div class="system-form" v-show='!isShow'>
		<div class="onself">
			<ul>
				<li>
					<span class='thisself'>当前编辑对象</span>
				</li>
				<li>
					<span class='selftitle'>{{thisSelf}}</span>
				</li>
				<li class='button'>
					<el-button type='primary' size='small' @click='addnew'>新增</el-button>
				</li>
				<li class='button'>
					<el-button type='primary'  size='small' @click='keep'>保存</el-button>
				</li>
			</ul>
		</div>
		<el-table :data='tableDate' border style='width:100%' fit  v-loading.body="listLoading">
			<el-table-column  label='No.' width='80' align='center'>
				<template slot-scope="scope">
					<span>{{scope.$index}}</span>
				</template>
			</el-table-column>
			<el-table-column  label='代码' width='150' align='center'>
				<template slot-scope='scope'>
					<el-input v-show='scope.row.edit' size='small' v-model='scope.row.code'></el-input>
					<span v-show='!scope.row.edit'>{{scope.row.code}}</span>
				</template>
			</el-table-column>
			<el-table-column label='名称' width='150' align='center'>
				<template slot-scope='scope'>
					<el-input v-show='scope.row.edit' size='small' v-model='scope.row.name'></el-input>
					<span v-show='!scope.row.edit'>{{scope.row.name}}</span>
				</template>
			</el-table-column>
			<el-table-column label='略称' width='150' align='center'>
				<template slot-scope='scope'>
					<el-input v-show='scope.row.edit' size='small' v-model='scope.row.shortname'></el-input>
					<span v-show='!scope.row.edit'>{{scope.row.shortname}}</span>
				</template>
			</el-table-column>
			<el-table-column label='排序' width='300' align='center'>
				<template slot-scope='scope'>
					<el-button type='primary' size='small' @click='moveup(scope.$index)'>上移</el-button>
					<el-button type='primary' size='small' @click='movedown(scope.$index)'>下移</el-button>
					<el-button type='primary' size='small' @click='movetop(scope.$index)'>置顶</el-button>
					<el-button type='primary' size='small' @click='movebottom(scope.$index)'>置底</el-button>
				</template>
			</el-table-column>
			<el-table-column label='操作' min-width='200'>
				<template slot-scope="scope">
					<el-button :type="scope.row.edit?'success':'primary'" @click='restore(scope)' size="small" >{{scope.row.edit?'还原':'编辑'}}</el-button>
					<el-button type='danger' size="small" @click='deleteThis(scope.$index)'>删除</el-button>
				</template>
			</el-table-column>
		</el-table>
	</div>
</div>
</template>
<script type="text/javascript">
export default{
	name:'system-code',
	data(){
		return{
			code:[], //列表
			searchKey:'',  //筛选
			thisSelf:'', // 编辑对象
			isShow:true, //控制左侧开关
			isActive:-1, //控制样式active
			listLoading:false, //加载loading
			tableDate:[], //从服务器请求的表格数据
			interface:[], //中间存储数据
			tabledataLength:'', //表格数据长度
			tabledataLength2:'', //表格数据长度
			ok:true //控制提交开关
		}
	},
	created(){
			//获取系统参数列表
			this.$axios.get('api/code').then((data)=>{
				this.code=data.data;
			})
			.catch(error=>{
				console.log(error)
			})
			//然后根据其code添加异步路由
		},
		methods:{
			//控制左侧表格数据
			getData:function(e,index){
				this.isActive=index; //改变active状态
				this.isShow=false; //出现模块
				this.thisSelf=e.codename; //编辑对象
				//请求数据~
				this.listLoading=true;
				this.$axios.get('api/tableDate').then((data)=>{
					this.tableDate=data.data;
					this.tabledataLength=this.tableDate.length;
					this.tabledataLength2=this.tableDate.length;
					this.listLoading=false;
				}).catch((error)=>{
					console.log(error)
				})
			},
			//还原 编辑
			restore:function(e){
				let i=e.$index;
				//console.log(this.tabledataLength2)
				//取其ID iD 大于其length即可；
				//console.log(e.row.id);
				if(e.row.edit==false){
					e.row.edit=true;
				}else if(e.row.id>this.tabledataLength2){
					//
					this.tableDate[i].code='';
					this.tableDate[i].name='';
					this.tableDate[i].shortname=''
				}else{
					this.$axios.get('api/tableDate').then((data)=>{
						this.interface=data.data;
						this.listLoading=false;
					//还原的时候 取得该项的ID
					// console.log(this.tableDate[i].id);
					//拿到对应数据 tshi.interfacede id 对应的下标；
					for(let j=0;j<this.interface.length;j++){
						if(this.interface[j].id==this.tableDate[i].id){
							// console.log(this.interface[j]);
						//赋值给它
						this.tableDate[i]=this.interface[j];
						this.$set(this.tableDate,i,this.interface[j])
					}
				}
			}).catch((error)=>{
				console.log(error)
			})
		}

	},
			//上移操作
			//我们约定无论怎么移动 唯一标识ID不变
			moveup(e){
				// console.log(e.$index)
				if(e==0){
					this.$message({
						message: '该条信息已经在最顶部',
						type: 'warning',
						duration:1000
					});
				}else{
					//存储其ID 保证到时候从服务器取到的值是一样的
					let i=e;
					let obj={};
					obj=this.tableDate[i-1];
					// console.log(obj);
					this.tableDate[i-1]=this.tableDate[i];
					this.tableDate[i]=obj;
					this.$set(this.tableDate,i,this.tableDate[i]);
				}
			},
			movedown(e){
				// console.log(this.tableDate.length);
				// console.log(e.$index)
				if(e==this.tableDate.length-1){
					this.$message({
						message: '该条信息已经在最底部',
						type: 'warning',
						duration:1000
					});
				}else{
					let i=e;
					let obj={};
					obj=this.tableDate[i+1];

					this.tableDate[i+1]=this.tableDate[i];
					this.tableDate[i]=obj;
					this.$set(this.tableDate,i,this.tableDate[i]);
				}
			},
			movetop(e){
				if(e==0){
					this.$message({
						message: '该条信息已经在最顶部',
						type: 'warning',
						duration:1000
					});
				}else{
					let i=e;
					let obj={};
					obj=this.tableDate[i];
					//console.log(this.tableDate[i]);
					this.tableDate.splice(i,1);
					this.tableDate.unshift(obj);
					this.$set(this.tableDate,i,this.tableDate[i]);
				}
			},
			movebottom(e){
				if(e==this.tableDate.length-1){
					this.$message({
						message: '该条信息已经在最底部',
						type: 'warning',
						duration:1000
					});
				}else{
					let i=e;
					let obj={};
					obj=this.tableDate[i];
					this.tableDate.splice(i,1);
					this.tableDate.push(obj);
					this.$set(this.tableDate,i,this.tableDate[i]);
				}
			},
			deleteThis(scope){
				this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					type: 'warning'
				}).then(()=>{
					let i=scope
					this.tableDate.splice(i,1);
					this.$message({
						type: 'success',
						message: '删除成功!',
						duration:1000
					});
				}).catch(()=>{
					//失败操作
				})
			},
			addnew(){
				let a={}
				a.id=this.tabledataLength+1;
				this.tabledataLength++;
				a.code='';
				a.name='';
				a.shortname='';
				a.edit=true;
				this.tableDate.push(a);
			},
			keep:function(){
				//做一个验证 ，请填完所有的数据在进行提交
				let that=this;
				function TraversalObject(obj){
					for (var a in obj) {
						if (typeof (obj[a]) == "object") {
							if (TraversalObject(obj[a])) {
								continue;
							} else {
								return false;
							}
						}else{
							if(obj[a]===''){
								that.$message({
									message: '请将所有信息填写完毕后在进行提交',
									type: 'error',
									duration:1000
								});
								that.ok=false;
								return false;
							}
						}
					}
					return true
				}
				TraversalObject(this.tableDate);
				if(that.ok==true){
					console.log('提交数据') //提交数据的ID 这个时候是否要统一进行从0-n进行一个排序
				}
			}
			//执行一下其还原操作
		},
		computed:{
			codeFliter:function(){
				let searchKey=this.searchKey
				if(searchKey){
					//进行筛选
					return 	this.code.filter(function(i){
						if(i.codename.indexOf(searchKey)>-1){
							return i.codename
						}
					})
				}
				return this.code
			}
		}
	}
	</script>
	<style type="text/css" scoped>
	#system-code{
		position:relative;
	}
	.systemnav{
		position:fixed;
		width:200px;
		height:100%;
		background-image: linear-gradient(-179deg, #FFFFFF 1%, #E2FFFF 46%, #FFFFFF 100%);
		box-shadow: 2px 2px 4px 0 #E5F2FF;
		overflow-y:auto;
		box-sizing: border-box;
		z-index:100;
	}
	.system-item{
		float:left;
		margin-left:201px;
	}
	.codesearch{
		width:180px;
		margin:10px;
	}
	.codeitem li{
		font-size:14px;
		padding-left:13px;
		height:30px;
		line-height:30px;
		cursor:pointer;
		color: #2C4493;
		font-weight:600;

	}
	.codeitem li:hover{
		background: #5AADFF;
		color:#fff;
	}
	.system-form{
		padding-left:200px;
	}
	.button{
		margin-left:10px;
		margin-top:-2px;
	}
	.codeitem li.active{
		background: #5AADFF;
		color:#fff;
	}

	</style>