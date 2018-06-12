<template>
  <div id="header">
    <div class="logoimg clearfix">
      <img src='../../assets/logo.png'  width="142" class='logo'>
    </div>
    <div class="keyword">
      <div class="keywordinput clearfix">
      <input class='searchinput' placeholder="请输入关键字..." v-model='searchinput'>
      <span class='search' @click='searchkeyword(searchinput)'>
        <i class='el-icon-search'></i>
      </span>
      </div>
     
      <ul  v-show='isResult' class='searchresult'  v-loading="loading">
        <li v-for='i in result' key='i' @click='pushrouter(i)' v-show='!loading'>{{i.content}}</li>
      </ul>
    </div>
    <!-- 系统信息栏 -->
    <ul class='personnews clearfix'>
      <!-- 备忘录 -->
      <li class='memo' v-popover:memorandum>
        <div class='center'>
          <i class='el-icon-yj-beiwanglu'></i>
          <p>备忘录</p>
          <span class='newstip'>12</span>
        </div>
        <!-- 备忘录显示框 -->
        <el-popover ref='memorandum'  placement="bottom" width='300' trigger='click' name='memorandum' popper-class='proper'>
          <ul>
            <li class='newsmemo' @click='newdialogmemo=true'><span style='color:#0099FF;margin-right:5px'>+</span>新建备忘录</li>
            <li v-for='(i,index) in memo' class='memomessage' >
              <el-row>
                <div @click='showDialogmomo(i,index)'>
                  <el-col :span='2'>{{index+1}}.</el-col>
                  <el-col :span='16' style='overflow:hidden;text-overflow:ellipsis;
                  white-space:nowrap;'>{{i.content}}</el-col>
                </div>
                <el-col :span='6' align='right'><span class='memotime'>{{i.time}}</span><span style='color:red' class='closethismemo' @click='delmemonews(index)'>X</span></el-col>
              </el-row>
            </li>
          </ul>
        </el-popover>
      </li>
      <!-- 消息 -->
      <li class='news' v-popover:news>
        <i class='el-icon-yj-xiaoxi'></i>
        <p>消息</p>
        <span class='newstip'>
          6
        </span>
        <el-popover ref='news'  placement="bottom" width='300' trigger='click' name='news' popper-class='proper'>
          <ul>
            <li v-for='(i,index) in news' class='memomessage' @click='showDialognews(i,index)'>
              <el-row>
                <el-col :span='2'>{{index+1}}.</el-col>
                <el-col :span='14' style='overflow:hidden;text-overflow:ellipsis;white-space: nowrap;'>{{i.content}}</el-col>
                <el-col :span='8' align='right'><span v-show='!i.isNew'>{{i.time}}</span><span v-show='i.isNew'><el-button type='danger' size='mini'>New</el-button></span></el-col>
              </el-row>
            </li>
          </ul>
        </el-popover>
      </li>
      <!-- 邮件 -->
      <li class='email'>
        <i class='el-icon-yj-email'></i>
        <p>邮件</p>
      </li>
    <!-- 个人 -->
    <li class='person' v-popover:person>
      <i class='el-icon-yj-geren'></i>
      <p>个人</p>
      <el-popover ref='person'  placement="bottom" width='160' trigger='click' name='person' popper-class='proper'>
        <ul >
          <li  class='personage'>
            <p @click='dialogpersonnews=true'><i class='el-icon-yj-gerenxinxi'></i>个人信息</p>
            <p @click='passwordedit=true'><i class='el-icon-yj-gerenxinxi'></i>密码修改</p>
            <p @click='feedback=true'><i class='el-icon-yj-gerenxinxi'></i>意见反馈</p>
            <p @click='exit'><i class='el-icon-yj-gerenxinxi'></i>退出系统</p>
          </li>
        </ul>
      </el-popover>
    </li>

    <!-- 更多 -->
    <li class='more' v-popover:more>
      <i class='el-icon-yj-gengduo'></i>
      <p>更多</p>
      <el-popover ref='more'  placement="bottom" width='160' trigger='click' name='more' popper-class='proper'>
        <ul>
          <li  class='personage'>
            <p>佣金管理系统</p>
            <p>资产包管理系统</p>
          </li>
        </ul>
      </el-popover>
    </li>
  </ul>
  <!-- 备忘录弹框 -->
  <div class="newbuildmemo">
    <!-- 新建备忘录 -->
    <el-dialog title='新建备忘录' :visible.sync='newdialogmemo' size='tiny' :modal-append-to-body=false>   
      <el-form :model='newMemoform' ref='newMemoform' label-width='40' >
        <div class="clearfix">
          <div class="newbuildmemoleft left">
            <el-radio-group v-model='newMemoform.isSingle' @change='radiochange(newMemoform)'>
              <el-form-item>
                <el-radio  class='radio'  label='单次'>单次</el-radio>
              </el-form-item>
              <el-form-item>
                <el-radio  class='radio' label='重复'>重复</el-radio> 
              </el-form-item>
            </el-radio-group>
          </div>
          <div class="newbuildmemoright left">
            <ul class='clearfix'>
              <li>
                <el-form-item>
                  <el-date-picker v-model='newMemoform.singleDate' type='date' placeholder='请选择日期' :picker-options='pickerOptions0' size='small' style='width:120px' :disabled='newMemoform.singleTrue'></el-date-picker>
                </el-form-item>
              </li>
              <li>
                <el-form-item>
                  <el-time-picker v-model='newMemoform.singleTime' placeholder='选择时间' size='small' style='width:100px'  :disabled='newMemoform.singleTrue'>
                  </el-time-picker>
                </el-form-item>
              </li>
            </ul>
            <ul class='clearfix' style='margin-top:5px'>
              <li>
                <el-select v-model='newMemoform.repeatOption' placeholder='请选择' size='small' style='width:120px' :disabled='!newMemoform.singleTrue' @change='selectDefined(newMemoform)'>
                  <el-option v-for='item in options' :key='item.value' :label='item.label' :value='item.value'></el-option>
                </el-select>
              </li>
            <li>
              <el-time-picker v-model='newMemoform.repeatTime' placeholder='选择时间' size='small' style='width:100px' :disabled='!newMemoform.singleTrue'>
              </el-time-picker>
            </li>
          </ul>
          <el-form-item style='margin-left:10px'>
            <el-checkbox-group v-model='newMemoform.repeatDate' size='small' >
              <el-checkbox-button v-for='i in week' :label='i' :key='i' :disabled='newMemoform.isDefined'>{{i}}</el-checkbox-button>
            </el-checkbox-group>
          </el-form-item>
        </div>
      </div>
          <el-form-item label='提醒内容' >
            <el-input type="textarea" v-model="newMemoform.desc"></el-input>
          </el-form-item>
      </el-form>
      <div class="dialog-footer" slot='footer'>
        <el-button @click="savenewmemo" type="primary" size='small'>保存</el-button>
        <el-button @click="newdialogmemo = false" size='small' :plain="true" type="warning">取消</el-button>
      </div> 
    </el-dialog>
  <!-- 备忘录消息提示 -->
  <el-dialog title='消息提示-备忘录' :visible.sync="dialogmemo" size='tiny' :modal-append-to-body='false'>
    <div class="messagealert">
      {{dialogmemonews}}
    </div>
    <div class="dialog-footer" slot='footer'>
      <el-button @click="dialogmemo = false" type="primary" size='small'>已阅</el-button>
      <el-button @click="dialogmemo = false" size='small' :plain="true" type="warning">延时十分钟</el-button>
    </div> 
  </el-dialog>
</div>
<!-- 消息提醒与详情 -->
    <el-dialog :visible.sync='dialognew.dialognews' :modal-append-to-body='false' size='tiny'>
        <span slot='title'>{{dialognew.newtitle}}</span>
        <p>{{dialognew.newsmessage}}</p>
      <span slot='footer'>
        <el-button type='primary' size='small' @click='closeDialognews(dialognew)'>{{dialognew.footerbutton}}</el-button>
        
      </span>
    </el-dialog>

    <!-- 个人信息 -->
    <el-dialog :visible.sync='dialogpersonnews' :modal-append-to-body='false' size='tiny' :close-on-click-modal='false' title='个人信息修改'>
        <el-form :model='personnewsform' ref='personnewsform' label-width='80px' class='personnewsform'>
          <!-- <div class="clearfix"> -->
          <el-row >
            <el-col :span='12'>
               <el-form-item label='姓名'>
              <p class='personformp'>{{personnewsform.name}}</p>
               </el-form-item>
            </el-col>
            <el-col :span='12'>
              <el-form-item label='性别'>
              <p class='personformp'>{{personnewsform.sex}}</p>
              </el-form-item>
            </el-col>
          </el-row>
            <el-form-item label='工号'>
              <p class='personformp'>{{personnewsform.jobnum}}</p>
            </el-form-item>
            <el-form-item label='职务'>
              <p class='personformp'>{{personnewsform.duty}}</p>
            </el-form-item>
            <el-form-item label='所属'>
              <p class='personformp'>{{personnewsform.beloneto}}</p>
            </el-form-item>
            <el-form-item label='身份证号'>
              <p class='personformp'>{{personnewsform.id}}</p>
            </el-form-item>
            <el-form-item label='手机号码'>
              <el-input size='small' v-model='personnewsform.phone'></el-input>
            </el-form-item>
            <el-form-item label='企业邮箱'>
              <el-input size='small' v-model='personnewsform.email'></el-input>
            </el-form-item>
            <el-form-item label='入职日期'>
              <p class='personformp' >{{personnewsform.date}}</p>
            </el-form-item>
            <el-form-item label='账号状态'>
              <p class='personformp'>{{personnewsform.state}}</p>
            </el-form-item>       
        </el-form>
        <div slot="footer">
          <el-button size='small' type='primary' @click='dialogpersonnews=false'>保存</el-button>
          <el-button size='small' type='warning' :plain="true" @click='dialogpersonnews=false'>取消</el-button>
        </div>
    </el-dialog>
    <!-- 密码修改弹框 -->
    <el-dialog :visible.sync='passwordedit' :modal-append-to-body='false' size='tiny' :close-on-click-modal='false' title='密码修改'>
      <el-form :model='passwordform' ref='passwordform' label-width='100px'  :rules='rules'>
          <el-form-item label='原始密码' prop='primarycode' v-show='passwordform.isFirst'>
            <el-input type="password" name="" v-model='passwordform.primarycode' size='small' placeholder='请输入原始密码'></el-input>
          </el-form-item>
          <el-form-item label='新密码' prop='newpassword'>
            <el-input type="password" name="" v-model='passwordform.newpassword' size='small' placeholder='请输入新密码'></el-input>
          </el-form-item>
          <el-form-item label='确认新密码' prop='againnewpassword'>
            <el-input type="password" name="" v-model='passwordform.againnewpassword' size='small' placeholder='请再次输入新密码以确认'></el-input>
          </el-form-item>
      </el-form>
        <div slot='footer'>
          <el-button size='small' type='primary' @click='surepasswordedit(passwordform)'>确认</el-button>
            <el-button size='small' :plain='true' type='warning' @click='passwordedit=false'>取消</el-button>
        </div>
    </el-dialog>
    <!-- 意见反馈弹框 -->
    <el-dialog :visible.sync='feedback' :modal-append-to-body='false' size='tiny' :close-on-click-modal='false' title='意见反馈'>
        <el-input type='textarea' v-model='opinion' placeholder='请输入不少于五个字的留言内容' class='feedbacktextarea'></el-input>
        <div slot='footer'>
          <el-button size='small' type='primary' @click='savefeedback'>确认</el-button>
            <el-button size='small' :plain='true' type='warning' @click='feedback=false'>取消</el-button>
        </div>
    </el-dialog>
</div>
</template>

<script>

export default {
  name:'header',
  data() {
    //验证规则
    var checkold=(rule,value,callback)=>{
        // 如果是第一次登录 
        console.log(this.$refs.passwordform.model.isFirst)
        if(this.$refs.passwordform.model.isFirst){
           if(!value){
          return callback(new Error('请输入原始密码'));
        }else{
          callback();
        } 
        }else{
          callback();
        }
    };
    var checkagain=(rule,value,callback)=>{
      console.log(this.$refs.passwordform.model.newpassword);
      if(value==''){
        callback(new Error('请再次输入密码以确认'))
      }else if(value==this.$refs.passwordform.model.newpassword){
          // callback(new Error('两次密码不一致'))
          //console.log('提交代码')
          callback()
      }else{
        callback(new Error('两次密码不一致，请再次输入'))
      }
    }
    return {
       loading:false,
      memo:[{  //备忘录数据
        id:1,
        content:'zuoyixiexiangzuodshiqing',
        time:'今天'
      },{
        id:2,
        content:'修改昨天的数据',
        time:'昨天'
      },{
        id:3,
        content:'修改昨天的数据',
        time:'前天19:00'
      }],
      news:[{ //消息数据
        id:1,
        content:'修改昨天的数据',
        time:'14:25',
        isNew:true
      },{
        id:2,
        content:'提交和反馈意见的修改信息',
        time:'昨天',
        isNew:true
      },{
        id:3,
        content:'外访人员出入登记表上交',
        time:'前天19:00',
        isNew:false
      },{
        id:4,
        content:'出访美国和奥巴马喝茶',
        time:'前天19:00',
        isNew:false
      },{
        id:5,
        content:'90后写作月入30~50万',
        time:'前天19:00',
        isNew:false
      },],
        options: [{  //新建备忘录重复选项的数据
          value: '1',
          label: '每天'
        }, {
          value: '2',
          label: '周一至周五'
        }, {
          value: '3',
          label: '自定义'
        }],
        week:['周一','周二','周三','周四','周五','周六','周日'],
        dialogmemo:false, // 备忘录消息提示弹出框
        dialogmemonews:'', // 备忘录提示内容
        newdialogmemo:false, //新建备忘录
        newMemoform:{   //新建备忘录填写的信息
            isSingle:'单次', //单次或者重复
            singleDate:'', //单次的日期
            singleTime:'',//单次time
            repeatOption:'',//重复 的选项
            isDefined:true,//是否自定义 默认false 只有选择自定义时才会出现
            repeatTime:'',  //重复 的时间
            repeatDate:[],
            singleTrue:false,
            desc:''
          },
          pickerOptions0: { //日期选择 只允许选择当天之后的日期
            disabledDate(time) {
              return time.getTime() < Date.now() - 8.64e7;
            }
          },

        dialognew:{
          dialognews:false, //消息弹框
          newtitle:'', //标题
          newsmessage:'', //信息内容
          footerbutton:'', //按钮内容
          id:'', //该条信息的id号
        },
         dialogpersonnews:false, //个人信息修改弹框
         personnewsform:{
              name:'黄致鹏',
              sex:'男',
              jobnum:'63M03000005',
              duty:'稽核专员',
              beloneto:'总部业务部',
              id:'410721199508133056',
              phone:'15565319710',
              email:'huangzhipeng@yichengsystem',
              date:'2002年11月12日',
              state:'正常'
         },
         passwordedit:false, //控制修改密码弹出层
         passwordform:{
            isFirst:true, //是否第一次登录
            primarycode:'',
            newpassword:'',
            againnewpassword:'',
         },
         rules:{
            //验证规则
            primarycode:[{validator:checkold,trigger:'blur'}],
            newpassword:[{required:true,message:'请输入密码',trigger:'blur'}],
            againnewpassword:[{validator: checkagain,trigger:'blur'}]
         },
         feedback:false,
         opinion:'',  //意见反馈信息,
         isResult:false,
         searchinput:'',
         result:[],
        
        }

      },
      created(){
          
      },
      methods:{
        searchkeyword:function(e){
          console.log(e);
          //先做验证 如果通过 进行请求数据 然后显示 
          
          var ok1=false,ok2=false,ok3=false;
          // console.log(ok1,ok2,ok3)
          //电话号or座机号
          var mobile = /^1[3|5|8]\d{9}$/ , phone = /^0\d{2,3}-?\d{7,8}$/;
          if(mobile.test(e)||phone.test(e)){
            ok1=true;
          }
          //身份证号
          var regId= /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
          if(regId.test(e)){
            ok2=true;
          }
          //姓名
          var regName =/^[\u4e00-\u9fa5]{2,4}$/;
          if(regName.test(e)){
            console.log(ok3)
            ok3=true;
          }
          if(ok1 || ok2 || ok3){
            //请求数据
          this.isResult=true;
          this.loading=true;
          this.$axios.get('api/result').then(data=>{
            this.result=data.data;
            this.loading=false;
          })
          .catch(error=>{
            console.log(error)
          })
          }else{
            this.$message({
            type: 'warning',
            message: '请输入正确的姓名、身份证号或者手机号'
          });
          }
        },
        pushrouter(e){
          console.log(this)
          this.$router.push(e.id);
          this.isResult=false;
        },
        showDialogmomo:function(i,index){ //显示备忘录信息
          // console.log(11)
          // console.log(i);   
          //带着ID去请求 数据 返回之后给到this.messagealert;
          this.dialogmemonews=i.content;
          this.dialogmemo=true;
        },
        radiochange:function(e){  //新建备忘录控制禁用按钮
          if(e.isSingle=='重复'){
            e.singleTrue=true;
            if(e.repeatOption==3){
              e.isDefined=false;
            }
          }else{
            e.singleTrue=false;
            e.isDefined=true;
          }
        },
        selectDefined:function(e){  //多选框禁用按钮
          // console.log(e.repeatOption)
          if(e.repeatOption==3){
           e.isDefined=false;
         }else{
          e.isDefined=true;
        }
      },
      savenewmemo:function(){  //保存备忘录
        //
        console.log('保存信息')
        this.$message({
          message: '添加备忘录成功',
          type: 'success',
          duration:1000
        });
        this.newdialogmemo=false;
      },
      delmemonews:function(index){ //删除备忘录消息
        this.$confirm('你确定要删除该条消息么', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.memo.splice(index,1)
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
      },
      showDialognews:function(i,index){  //显示消息弹框
        this.dialognew.newtitle='消息详情';
        this.dialognew.dialognews=true;
        this.dialognew.newsmessage=i.content;
        this.dialognew.footerbutton='关闭';
        i.isNew=false;
      },
      closeDialognews:function(e){
        this.dialognew.dialognews=false;
      },
      surepasswordedit:function(e){
        this.$refs.passwordform.validate((valid)=>{
          if(valid){
            this.passwordedit=false;
          }else{
            console.log('错误')
          }
        })
      },
      savefeedback:function(){
         if(this.opinion){
          this.feedback=false;
          this.opinion='';
         }else{
          this.$message({
            type: 'warning',
            message: '请输入信息在进行提交'
          });
         }
      },
      exit:function(){
        //退出系统
         this.$confirm('你确定要退出系统么', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          sessionStorage.removeItem('token');
          this.$router.push('login');
          this.$message({
            type: 'success',
            message: '您已退出系统!'
          });
        }).catch(() => {
         //          
        });
      }
    }
  }
  </script>

  <style scoped lang='less'>
  // 搜索框代码
  .searchresult{
    background:#fff;
    width:264px;
    
    max-height:160px;
    overflow-y:auto;
    border-radius:5px;
  }
  .searchresult li{
    height:30px;
    line-height:30px;
    // width:120px;
    padding:0px 10px;
    box-sizing:border-box;
    white-space:nowrap;
    overflow:hidden;
    text-overflow: ellipsis;
    width:100%;
    cursor:pointer;
    border-bottom:1px solid #eee;
  }
.searchresult li:hover{
  background:#ccc;
}
  .right{
    float:right
  }
  .left{
    float:left
  }
  .loginstate:hover .logincon{
    display:block;
  }
  .logincon{
    position:absolute;
    right:30px;
    top:60px;
    z-index: 100;
    background:#eee;
    display:none;
  }
  .logincon ul a{
    color:#000;
  }
  .keyword{
    .left;
    margin-top:12px;
  }
  .loginstate{
    float:right;
    margin-right:30px;
    cursor:pointer;
  }

  .searchinput{
    .left;
    background: #FFFFFF;
    border: 1px solid #97CBFF;
    border-radius: 5px 0px 0px 5px;
    width:264px;
    height:36px;
    padding-left:15px;
    box-sizing:border-box;
    color:#333;
    font-size:14px;
    line-height:36px;
  }

  .logoimg{
    width:200px;
    .left;
  }
  .logo{
    margin-top:18px;
    margin-left:25px;
  }
  input::-webkit-input-placeholder { 
    color:#999;
  }
  .search{
    .left;
    width:36px;
    height:36px;
    border-radius:0px 100px 100px 0px;
    background: #fff;
    margin-left:-1px;
    border:1px solid #97CBFF;
    border-left:none;
    box-sizing: border-box;
    background:#97CBFF;
    cursor:pointer
  }
  .search i{
    font-size:24px;
    .left;
    margin-top:6px;
    margin-left:4px;
    color:#0099FF;
  }
  .personnews{
    .right;
    margin-top:12px;
    color:#fff;
  }
  .personnews>li{
    .left;
  // text-align: center;
  cursor:pointer;
  margin-right:20px;
  position:relative;
}
.personnews li i{
  font-size:24px
}
.personnews li p{
  display:block;
  font-size:12px
}
.newstip{
  position: absolute;
  right:-3px;
  top:-8px;
  width:18px;
  height:18px;
  border-radius: 50%;
  background:#ff4d43;
  color:#fff; 
  font-size:12px;
  line-height:18px;
  text-align: center
}

.newsmemo{
  height:40px;
  text-align: center;
  line-height:40px;
  font-size:14px;
  cursor:pointer;
  border-bottom:1px solid #eee;
}
.memomessage,.personage p{
  padding:10px;
  box-sizing:border-box;
  height:40px;
  line-height:20px;
  border-bottom:1px solid #eee;
  cursor:pointer;
}
.memomessage:hover,.personage p:hover{
  color:#00D082;
  background:#eee;
}
.newbuildmemoright ul li{
  float:left;
  margin-left:10px;
}
.memomessage:hover .memotime{
  display:none
}
.memomessage:hover .closethismemo{
  display:block;
}
.memotime{
  display:block;
}
.closethismemo{
  display:none;
}
.personformp{
  background: #FAFAFA;
  border-radius: 2px;
  box-sizing:border-box;
  padding-left:5px;
}
.feedback{
  min-height:300px;
  border:1px solid #E5F2FF;
  min-width:400px;
}
//手写样式

// .newmemo,.newperson,.moreperson,.newnews{
//   position:absolute;
//   z-index:1000;
//   color:#666;
//   width:300px;
//   left:-140px;
//   border:1px solid #eee;
//   background:#fff;
//   top:55px;
// }
// .newmemo:before,.newperson:before,.moreperson:before,.newnews:before{
//   content:"";
//   display:inline-block;
//   width:0px;
//   height:0px;
//   position: absolute;
//   left:140px;
//   top:-10px;
//   border-left:10px solid transparent;
//   border-right:10px solid transparent;
//   border-bottom:10px solid red

// }
// .newmemo ul li,.newperson ul li,.moreperson ul li,.newnews ul li{
//   min-height:40px;
//   line-height:40px;
//   border-bottom:1px solid #eee;
//   z-index:1000000
// }
// .newmemo ul li:last-child,.newperson ul li:last-child,.moreperson ul li:last-child,.newnews ul li:last-child{
//   border-bottom:none;
// }
// .newmemo ul li:hover,.newperson ul li:hover,.moreperson ul li:hover,.newnews ul li:hover{
//   color:#00D082;
// }
// .addnewmemo{
//   color:#000;
// }
// .addnewmemo span{
//   font-size:18px;
//   color:#0099FF 
// }
// .newperson,.moreperson{
//   width:160px;
//   left:-100px;
// }
// .newperson:before{
//   left:100px;
// }
// .newperson ul li i{
//   font-size:18px;
// }
// .moreperson{
//   left:-120px;
// }
// .moreperson:before{
//   left:120px;
// }
</style>
