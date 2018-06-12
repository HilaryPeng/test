<template>
  <div id="login">
    <div class="logoimg">
      <img src="../../../static/img/logo.png" height="50" width="248">
      <p class='logintitle'>永嘉业务系统</p>
    </div>
    <div class="loginbox">
      <div class="login-admin">
        <el-form :label-position='labelPosition' :model='formLabelAlign' :rules='rules' ref='from'>
          <el-form-item  prop='name' class='relative' style='padding-top:50px'>
            <span class='icon-name'></span>
            <el-input v-model='formLabelAlign.name' class='iconname' size='large'></el-input>
          </el-form-item>
          <el-form-item prop='password' class='relative' v-show='isClose' style='margin-top:30px'>
            <span class='icon-password'></span>
            <span class='icon-close' @click='clear'></span>
            <span class='icon-eyeclose' @click='isClose=!isClose'></span>
            <el-input v-model='formLabelAlign.password' type='password' class='iconname' size='large'></el-input >
          </el-form-item>
          <el-form-item prop='password' class='relative' v-show='!isClose' style='margin-top:30px'>
            <span class='icon-eye' @click='isClose=!isClose'></span>
            <span class='icon-password'></span>
            <span class='icon-close' @click='clear'></span>
            <el-input v-model='formLabelAlign.password' type='text' class='iconname' size='large'></el-input>
          </el-form-item>
          <el-button type='primary'  @click='onSubmit' style='margin-top:20px' :loading="isSuccess" class='loginsubmit' size='large'>登录</el-button>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  data() {
    return {
      isClose:true,
      labelPosition:'left',
      isSuccess:false,
      formLabelAlign:{
        name:'name ',
        password:'admin',
      },
        //验证登录规则
        rules:{
          name:[{required:true,message:'请输入登录名',trigger:'blur,change'}],
          password:[{required:true,message:'请输入密码',trigger:'blur,change'}]

        }
      };
    },

    computed:{
      ...mapState({
        router:'router'
      }),

    },
    methods: {
     onSubmit:function(formLabelAlign){
      this.isSuccess=true;
        this.$refs.from.validate((valid)=>{ //验证登录
          if(valid){
           // this.$message('登录成功'); 校验成功之后挂载路由 在登录之前挂载
           //请求接口 ，拿到token
           this.$axios.get('api/token').then(data=>{
            //成功拿到token，存储到session
            sessionStorage.setItem('token',data.data.token);
            this.$store.commit('setToken',{data:data.data.token})
            //然后带着这个去请求roles 分发到action中 
            this.$store.dispatch('getRoles',{data:data.data.token}).then((data)=>{
              //这里面应该遍历一下 addrouter的应该是返回来的对比的router
              this.$router.addRoutes(this.router) 
              this.isSuccess=true;
              this.$router.push('/index')
            }).catch(error=>{console.log(error)})         
          }).catch(error=>{
            this.isSuccess=false;
            console.log(error);

          })
           //开始挂载动态路由
           // this.$router.addRoutes(this.router) 
           //router格式就是我们之前配置的路由一摸一样即可  
          // this.$router.push('/index')
        }else{
          this.$message('失败')
          this.isSuccess=false;
          return false;
        }
      });
      },
      clear:function(){
        this.formLabelAlign.password='';
      }
    }
  }
  </script>

  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>

  #login{
    position:absolute;
    width:100%;
    height:100%;
    text-align:center;
    background-image:url(../../../static/img/logobackground.jpg);
    background-repeat: no-repeat;
    background-position: center center;
  }
  .logoimg{
    margin-top:100px;
  }
  .logintitle{
    font-size: 34px;
    color: #FFFFFF;
    margin-top:24px;
    letter-spacing: 0;
    text-shadow: 0 2px 4px rgba(0,0,0,0.50);
  }
  .loginbox{
    width:450px;
    height:300px;
    margin:0 auto;
    background:#ddd;
    border-radius:10px;
    box-shadow: 0 0 20px 0 rgba(46,64,108,0.50);
    border-radius: 4px;
    background:#fff;
    box-sizing:border-box;
  }

  .login-admin{
   padding-right:35px;
   padding-left:35px;
   margin-top:40px;
 }
 .relative{
  position:relative;
}
.icon-name,.icon-password{
  background:url(../../../static/img/login-user.png);
  width:22px;
  height:22px;
  display:inline-block;
  position:absolute;
  z-index: 1000;
  top:10px;
  left:10px;
}
.icon-password{
  background:url(../../../static/img/login-password.png);
  height:25px;
  width:22px;
}
.icon-close,.icon-eye,.icon-eyeclose{
  width:22px;
  height:22px;
  background:url(../../../static/img/login-close.png);
  right:36px;
  top:10px;
  display:inline-block;
  position:absolute;
  z-index: 1000;
  cursor:pointer;
}
.icon-eye{
  background:url(../../../static/img/login-eye.png);
  height:14px;
  right:5px;
  top:14px;
}
.icon-eyeclose{
  background:url(../../../static/img/login-eyeclose.png);
  height:11px;
  right:5px;
  top:16px;
}
.loginsubmit{
  width:100%;
  /*  height:45px;*/
  font-size: 20px;
}
</style>
