<template>
  <div id="login">
  <div class="loginbox">
    <p class='title'>永嘉后台登录</p>
    <div class="login-admin">
      <el-form :label-position='labelPosition' label-width='60px' :model='formLabelAlign' :rules='rules' ref='formLabelAlign'>

        <el-form-item label='admin' prop='admin'>
          <el-input v-model='formLabelAlign.admin'></el-input>
        </el-form-item>

        <el-form-item label='密码' prop='password'>
          <el-input v-model='formLabelAlign.password' type='password'></el-input>
        </el-form-item>


          <el-button type='primary'  @click='onSubmit()' style='margin-top:10px'>确定</el-button>
      </el-form>

    </div>
  </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        labelPosition:'left',
        formLabelAlign:{
          admin:'',
          password:'',
        },
        rules:{
          admin:[{
            required:true,
            message:'请输入您的用户名'
          }],
          password:[{
            required:true,
            message:'请输入您的密码'
          }]
        }
      }
    },
    methods: {
       onSubmit:function(){
       // this.$refs[formLabelAlign].validate(function(valid){
       //        if(valid){
       //          alert('验证成功')
       //        }else{
       //          console.log('验证失败');
       //          return false
       //        }
           
       //    })
       //实际也不需要传递参数 直接可以通过this.$ref.formLabelAlign得到该数组
       this.$refs.formLabelAlign.validate(valid=>{
          if(valid){
            this.$router.push('/connent')
          }else{
            return false
          }
       })
       }
    }
  }



  /*
  关于element ui 中 验证的问题 其中提交的数据应为
  @click='onSubmit()' 要把参数传入进去 就是这个表单 this.$refs.formLabelAlign.validate .validate()
  */
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#login{
  position:absolute;
  width:100%;
  height:100%;
  background:gray;
  text-align: center
}
.loginbox{
  position:absolute;
  left:50%;
  top:50%;
  width:400px;
  height:300px;
  margin-left:-200px;
  margin-top:-150px;
  background:#ddd;
  border-radius:10px;

}
.title{
  font-size:24px;
  padding:25px;
}
.login-admin{
 padding-right:35px;
 padding-left:35px;
  margin-top:20px;
}


</style>
