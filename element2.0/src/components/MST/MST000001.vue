<template>
  <div id="component">
    <div class="componentleft">
      <el-row style='padding:10px 10px 0px 10px'>
        <el-col :span='16'>
         <el-input placeholder="请输入公司名称" icon="search" v-model="searchcomponent" size='small'>
       </el-input>
     </el-col>
     <el-col :span='6' :offset='2'>
      <el-button type='primary' size='small' @click='bulidnewcom'>新建公司</el-button>
    </el-col>
  </el-row>
  <ul class='componentul'>
    <li v-for='(i,index) in componentName' :key='i.id' class='clearfix' :class='{active:index==isActive}' @click='changeActive(index)'>
      <div class="componentname">
        <p>{{i.componentname}}</p>
      </div>
      <div class="componenticon">
        <ul>
          <li @click='moveup(index,componentName)'><img src="../../../static/img/icon_move.png" height="14" width="12" alt=""></li>
          <li @click='movedown(index,componentName)'><img src="../../../static/img/icon_down.png" height="14" width="12" alt=""></span></li>
          <li @click='movetop(index,componentName)'><img src="../../../static/img/icon_top.png" height="14" width="12" alt=""></li>
          <li @click='movebottom(index,componentName)'><img src="../../../static/img/icon_bottom.png" alt=""></li>
        </ul>
      </div>
    </li>
  </ul>
</div>
<div class="componentright" v-show='isEdit'>

  <el-form ref="from" :model="fromcomponent" label-width="110px" :rules='rules'>
    <ul class='componentnewul'>
      <li>
       <p class='formtitle'>基础信息</p>
       <el-row>
        <el-col :span="12" >
         <el-form-item label="公司类型" prop='type'>
          <el-select v-model="fromcomponent.type" placeholder="选择类型" size='small' v-show='!edit'>
            <el-option label="总部" value="总部"></el-option>
            <el-option label="分公司" value='分公司'></el-option>
            <el-option label="子公司" value="子公司"></el-option>
          </el-select>
          <p v-show='edit' class='editnews'>{{fromcomponent.type}}</p>
        </el-form-item>
      </el-col>
      <el-col :span="12" >
        <el-form-item label="公司状态" prop='state'>
          <el-select v-model="fromcomponent.state" placeholder="选择状态" size='small' v-show='!edit'>
            <el-option label="待开业" value="待开业"></el-option>
            <el-option label="运营中" value="运营中"></el-option>
            <el-option label="停业" value="停业"></el-option>
            <el-option label="关闭" value="关闭"></el-option>
          </el-select>
          <p v-show='edit' class='editnews'>{{fromcomponent.state}}</p>
        </el-form-item>
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="12" >
        <el-form-item label="公司代码" prop='code'>
          <el-input v-model="fromcomponent.code" placeholder="001" size='small' v-show='!edit'></el-input >
          <p v-show='edit' class='editnews'>{{fromcomponent.code}}</p>
        </el-form-item>
      </el-col>
      <el-col :span="12" >
        <el-form-item label="公司简称" prop='shortname'>
          <el-input v-model="fromcomponent.shortname" placeholder="总部" size='small' v-show='!edit'></el-input>
          <p v-show='edit' class='editnews'>{{fromcomponent.shortname}}</p>
        </el-form-item>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="12" >
        <el-form-item label="负责人" prop='person'>
          <el-input v-model="fromcomponent.person" placeholder="王孙乐" size='small' v-show='!edit'></el-input>
          <p v-show='edit' class='editnews'>{{fromcomponent.person}}</p>
        </el-form-item>
      </el-col>
      <el-col :span="12" >
        <el-form-item label="联系方式" prop='phonenumber'>
          <el-input v-model="fromcomponent.phonenumber" placeholder="请输入联系方式" size='small' v-show='!edit'></el-input>
          <p v-show='edit' class='editnews'>{{fromcomponent.phonenumber}}</p>
        </el-form-item>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="12" >
        <el-form-item label="开业日期" prop='startdata' >
          <el-date-picker type="date" format v-model="fromcomponent.startdata" placeholder="请选择日期" format='yyyy年MM月dd日'  size='small' v-show='!edit'  style='width:100%' ></el-date-picker >
        <p v-show='edit' class='editnews' style='width:190px'>{{startdatap}}</p>
        </el-form-item>
      </el-col>
      <el-col :span="12" >
        <el-form-item label="工位总数" prop='tatalnum'>
          <el-input v-model="fromcomponent.tatalnum" placeholder="请输入工位总数" size='small' v-show='!edit'></el-input>
          <p v-show='edit' class='editnews'>{{fromcomponent.tatalnum}}</p>
        </el-form-item>
      </el-col>
    </el-row>
  </li>
  <li>
    <p>联系方式</p>
    <el-row>
      <el-col :span="12" >
        <el-form-item label="联系人" prop='commentperson'>
          <el-input v-model="fromcomponent.commentperson" placeholder="陈秀春" size='small' v-show='!edit'></el-input>
          <p v-show='edit' class='editnews'>{{fromcomponent.commentperson}}</p>
        </el-form-item>
      </el-col>
      <el-col :span="12" >
        <el-form-item label="联系方式" prop='commentpersonphone'>
          <el-input v-model="fromcomponent.commentpersonphone" placeholder="请输入联系方式" size='small' v-show='!edit'></el-input>
          <p v-show='edit' class='editnews'>{{fromcomponent.commentpersonphone}}</p>
        </el-form-item>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="12" >
        <el-form-item label="联系地址" prop='commentaddress'>
          <el-input v-model="fromcomponent.commentaddress" placeholder="请输入联系地址" size='small' v-show='!edit'></el-input>
          <p v-show='edit' class='editnews'>{{fromcomponent.commentaddress}}</p>
        </el-form-item>
      </el-col>
    </el-row>
  </li>
  <li>
    <p>注册信息</p>
    <el-form-item label="注册名称" prop='registername'>
      <el-input v-model="fromcomponent.registername" placeholder="请输入注册名称" size='small' v-show='!edit'></el-input>
      <p v-show='edit' class='editnews'>{{fromcomponent.registername}}</p>
    </el-form-item>
    <el-form-item label="注册地址" prop='registeraddress'>
      <el-input v-model="fromcomponent.registeraddress" placeholder="请输入注册地址" size='small' v-show='!edit'></el-input>
      <p v-show='edit' class='editnews'>{{fromcomponent.registeraddress}}</p>
    </el-form-item>

    
    <el-form-item label="注册日期" prop='registerdata'>
     <el-date-picker type="date" v-model="fromcomponent.registerdata" placeholder="请输入注册日期" format='yyyy年MM月dd日' size='small' v-show='!edit' style='width:100%'></el-date-picker>
     <p v-show='edit' class='editnews'>{{registerdatap}}</p>
   </el-form-item>

   <el-row>
    <el-col :span="24" >
      <el-form-item label="纳税人识别号" prop='dutynumber'>
        <el-input v-model="fromcomponent.dutynumber" placeholder="请输入识别号" size='small' v-show='!edit'></el-input>
        <p v-show='edit' class='editnews'>{{fromcomponent.dutynumber}}</p>
      </el-form-item>
    </el-col>
  </el-row>
  <el-row>
    <el-col :span="24" >
      <el-form-item label="开户行" prop='openbank'>
        <el-input v-model="fromcomponent.openbank" placeholder="请输入开户行" size='small' v-show='!edit'></el-input>
        <p v-show='edit' class='editnews'>{{fromcomponent.openbank}}</p>
      </el-form-item>
    </el-col>
  </el-row>
  <el-row>
    <el-col :span="24" >
      <el-form-item label="银行账号" prop='bankaccount'>
        <el-input v-model="fromcomponent.bankaccount" placeholder="请输入账号" size='small' v-show='!edit'></el-input>
        <p v-show='edit' class='editnews'>{{fromcomponent.bankaccount}}</p>
      </el-form-item>
    </el-col>
  </el-row>
</li>
</ul>
<el-form-item style='text-align: center;margin-top:20px'>
  <el-button type='primary' @click='onSumit(fromcomponent)' v-show='!edit'>保存</el-button>
  <el-button type='primary' @click='editcomponent()' v-show='edit'>编辑</el-button>
  <el-button @click='cancel'>取消</el-button>
</el-form-item>
</el-form> 
</div>
</div>
</template>
<script type="text/javascript">
import moment from 'moment';
export default{
  name:'component',
  data(){
    return{
      isActive:-1,
      searchcomponent:'',
      component:[{id:1,componentname:'上海永嘉信风管理有限公司'},{id:2,componentname:'上海运营部'},{id:3,componentname:'北京分公司'}],
      edit:false, //控制输入框的显示
      isEdit:false,  //是否是编辑或者新建状态
      fromcomponent:{ //新增公司数据
          id:'',
          type:'', //公司类型
          state:'', //公司状态
          code:'', //公司代码
          shortname:'', //公司简称
          person:'', //负责人
          phonenumber:'', //负责人联系方式
          startdata:'', //开业时期           
          tatalnum:'', //工位总数
          commentperson:'', //联系人
          commentpersonphone:'', //联系方式
          commentaddress:'', //联系地址
          registername:'', //注册名称
          registeraddress:'', //注册地址
          registerdata:'', //注册日期
          dutynumber:'', //纳税人识别号
          openbank:'', //开户行
          bankaccount:'' //银行账号

        },
      rules:{  //验证规则
       type:[{required:true,message:'请选择公司类型',trigger:'blur,change'}],
       state:[{required:true,message:'请选择公司状态',trigger:'blur,change'}],
       code:[{required:true,message:'请输入公司代码',trigger:'blur,change'}],
       shortname:[{required:true,message:'请输入公司简称',trigger:'blur,change'}],
       startdata:[{type:"date",required:true,message:'请选择开业时期',trigger:'blur'}],
       tatalnum:[{required:true,message:'请输入工位总数',trigger:'blur,change'}],
       commentperson:[{required:true,message:'请输入联系人',trigger:'blur,change'}],
       commentpersonphone:[{required:true,message:'请输入联系方式',trigger:'blur,change'}],
       commentaddress:[{required:true,message:'请输入联系地址',trigger:'blur,change'}],
       registername:[{required:true,message:'请输入注册名称',trigger:'blur,change'}],
       registeraddress:[{required:true,message:'请输入注册地址',trigger:'blur'}],
       registerdata:[{type:"date",required:true,message:'请选择注册日期',trigger:'blur'}],
       dutynumber:[{required:true,message:'请输入纳税人识别号',trigger:'blur,change'}],
       openbank:[{required:true,message:'请输入开户行',trigger:'blur,change'}],
       bankaccount:[{required:true,message:'请输入银行账号',trigger:'blur,change'}],
     } 
   }
 },
 computed:{
  componentName(){
    let searchcomponent=this.searchcomponent;
    if(searchcomponent){
      return this.component.filter(function(i) {
       if(i.componentname.indexOf(searchcomponent)>-1){
        return i.componentname
      }
    });
    }
    return this.component;
  },
 startdatap:function(){
    //转换过的日期
    return moment(this.fromcomponent.startdata).format('YYYY年MM月DD日')
  },
  registerdatap:function(){
    //转换日期
     return moment(this.fromcomponent.registerdata).format('YYYY年MM月DD日')
  }
},
methods:{
    changeActive:function(index){
      //改变状态

      this.isActive=index;
      console.log(this.isActive);
    },
    editcomponent:function(fromcomponent){
      this.edit=false;
    },
    bulidnewcom:function(){ //新建公司
      this.isEdit=true;
    },
    onSumit:function(fromcomponent){ //提交验证
        this.$refs.from.validate((valid)=>{
          if(valid){
            if(fromcomponent.id==''){ 
            fromcomponent.id=this.component.length+1;
              this.edit=true;
              //这里新增操作
            }else{
              //说明是编辑状态的 这里取得id 并进行替换操作
            this.edit=true
            }
          }
        })
      },
      cancel:function(){
        this.$refs.from.resetFields();
      },
    // 排序操作
    moveup(e,data){
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
          obj=data[i-1];
          // console.log(obj);
          data[i-1]=data[i];
          data[i]=obj;
          this.$set(data,i,data[i]);
        }
      },
      movedown(e,data){
        // console.log(this.tableDate.length);
        // console.log(e.$index)
        if(e==data.length-1){
          this.$message({
            message: '该条信息已经在最底部',
            type: 'warning',
            duration:1000
          });
        }else{
          let i=e;
          let obj={};
          obj=data[i+1];
          data[i+1]=data[i];
          data[i]=obj;
          this.$set(data,i,data[i]);
        }
      },
      movetop(e,data){
        if(e==0){
          this.$message({
            message: '该条信息已经在最顶部',
            type: 'warning',
            duration:1000
          });
        }else{
          let i=e;
          let obj={};
          obj=data[i];
          //console.log(data[i]);
          data.splice(i,1);
          data.unshift(obj);
          this.$set(data,i,data[i]);
        }
      },
      movebottom(e,data){
        if(e==data.length-1){
          this.$message({
            message: '该条信息已经在最底部',
            type: 'warning',
            duration:1000
          });
        }else{
          let i=e;
          let obj={};
          obj=data[i];
          data.splice(i,1);
          data.push(obj);
          this.$set(data,i,data[i]);
        }
      },


    }
  }


  </script>
  <style type="text/css" scoped>
  .componentleft{
    position:fixed;
    width:300px;
    box-sizing:border-box;
    height:100%;
    background: #E5F2FF;
    box-shadow: 2px 0 4px 0 #C7DFFC;
  }
  .componentname{
    float:left;
    font-size:12px;
    font-size: 12px;
  }
  .componenticon{
    float:right;
  }
  .componenticon ul li{
    float:left;
    margin-right:10px;
    cursor:pointer;
    color: #2E406C;
  }
  .componentul{
    margin-top:10px;
  }
  .componentul>li{
    padding:0px 10px;
    height:30px;
    height:30px;
    line-height:30px; 
    box-sizing:border-box;
    cursor:pointer;
  }
  .componentul>li:hover,.active{
    background: #5AADFF;
    color:#fff;
  }
  .componentright{
    padding-left:320px;
    width:620px;

  }
  .formtitle{
    color:#2e406c;
    font-weight:600;
  }
  .componentnewul li>p{
    color:#2e406c;
    font-weight:600;
    margin-bottom:20px;
    margin-top:20px;
  }
  .editnews{
    background:#F3F3F3;
    color: #333333;
    padding-left:10px;
    box-sizing:border-box;
  }
  </style>
