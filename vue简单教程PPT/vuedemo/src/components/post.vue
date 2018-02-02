<template>
  <div id="hello" >
  <nav >
  <el-button type='danger' @click='doSomething'>请求数据</el-button>
  <el-button type='warning' @click='open'>打开消息提示</el-button>
    <el-row>
        <el-col :span='12' >
          <el-table :data='t3' border v-loading.body='loading'>
            <el-table-column prop='date' label='日期'></el-table-column>
            <el-table-column prop='name' label='姓名'></el-table-column>
            <el-table-column prop='address' label='地址'></el-table-column>
          </el-table>
        </el-col>      
    </el-row>
</nav>
</div>
</template>
<script>
 export default {
    name:'hello',
    created:function(){
        // this.$ajax({
        //   method:'post',
        //   url:'http://localhost:3000/text',
        //   data:{

        //   },
        //   success:function(req){
        //     console.log(req.data)
        //   }
        // })
        //axios 的请求
    // this.$axios.get('http://localhost:3000/text',{
    // params:{ 参数
    // })
    // .then(function(data){
    //   console.log(data);

    // })
    // .catch(function(error){
    //   console.log(error)
    // })
    },
    methods: {
      doSomething:function(){
       
        // this.$http.get('http://localhost:3000/text').then(
        //   (response)=>{
        //      this.loading=true;
        //     setTimeout(()=>{
             
        //       this.t3=response.data;
        //       this.loading=false;
        //     },3000)
        //   },(response)=>{
        //     console.log('找不到资源')
        //   }
        //   )
      this.$axios.get('http://localhost:3000/text')
      .then(data=>{
        this.loading=true;

      setTimeout(()=>{
        this.t3=data.data;
        this.loading=false;
      },3000)

      })
      .catch((error)=>{

      this.$message('不好意思 服务器繁忙 请稍后重试')
      
      console.log(error);
      });

      },
      open:function(){
        this.$message('123')
      }
    
      },
 data() {
      return {
        loading:'',
        text:'132',
        t3:[{
          "date": "2016-05-03",
          "name": "王小虎",
          "address": "上海市普陀区金沙江路 1518 弄"
        }],
        t:[], //定义数组形式 这个时候就知道定义类型的好处了如果不预先定义好类型 那么报错的时候就一直很奇怪 找不到哪里错了 这就是ts定义借口的一个意义吧
        t2:[{
          "date": "2016-05-03",
          "name": "王小虎",
          "address": "上海市普陀区金沙江路 1518 弄"
        }, {
          "date": "2016-05-02",
          "name": "王小虎",
          "address": "上海市普陀区金沙江路 1518 弄"
        }, {
          "date": "2016-05-04",
          "name": "王小虎",
          "address": "上海市普陀区金沙江路 1518 弄"
        }, {
          "date": "2016-05-01",
          "name": "王小虎",
          "address": "上海市普陀区金沙江路 1518 弄"
        }, {
          "date": "2016-05-08",
          "name": "王小虎",
          "address": "上海市普陀区金沙江路 1518 弄"
        }, {
          "date": "2016-05-06",
          "name": "王小虎",
          "address": "上海市普陀区金沙江路 1518 弄"
        }, {
          "date": "2016-05-07",
          "name": "王小虎",
          "address": "上海市普陀区金沙江路 1518 弄"
        },{
          "date": "2016-05-03",
          "name": "王小虎",
          "address": "上海市普陀区金沙江路 1518弄"
        }, {
          "date": "2016-05-02",
          "name": "王小虎",
          "address": "上海市普陀区金沙江路 1518 弄"
        }, {
          "date": "2016-05-04",
          "name": "王小虎",
          "address": "上海市普陀区金沙江路 1518 弄"
        }, {
          "date": "2016-05-01",
          "name": "王小虎",
          "address": "上海市普陀区金沙江路 1518 弄"
        }, {
          "date": "2016-05-08",
          "name": "王小虎",
          "address": "上海市普陀区金沙江路 1518 弄"
        }, {
          "date": "2016-05-06",
          "name": "王小虎",
          "address": "上海市普陀区金沙江路 1518 弄"
        }, {
          "date": "2016-05-07",
          "name": "王小虎",
          "address": "上海市普陀区金沙江路 1518 弄"
        }]
      }
    },
   
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
nav{
  padding:50px;
  width:100%;
  box-sizing:border-box;

}
</style>
