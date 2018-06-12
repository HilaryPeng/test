<template>
  <div id='banerrortext'>
    <div class="input_but">
          <el-input type="text" placeholder="请输入禁止文字" class="input-new-tag" v-if="inputVisible" v-model="inputValue"  @keyup.enter.native="handleInputConfirm" size='small'></el-input>
          <el-button type='primary' size='small' class="button-new-tag" @click='handleInputConfirm'>添加</el-button>
         <span class="annotation1">注：<span class="annotation2">添加的关键字将不能在催记中录入。</span></span>
   </div>
   <div class="card11">
    <p>已添加文字</p>
    <hr>
    <el-tag
    v-for="(tag,index) in dynamicTags"
    :key="tag"
    :closable='true'
    :disable-transitions="false"
    @close="handleClose(tag)" class="tag1">
    {{tag}}
  </el-tag>
</div>

</div>
</template>

<script>
export default {
  name:'banerrortext',
  data() {
    return {
      dynamicTags: ["招商银行-信用卡1", "招商银行-信用卡22", "招商银行-信用卡33"],
      inputVisible: true,
      inputValue: ""
    };
  },
  methods: {
    handleClose(tag) {
      this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
    },
    handleInputConfirm() {
      let inputValue = this.inputValue;
      if (inputValue) {
        this.dynamicTags.push(inputValue);
      }
      this.inputVisible = true;
      this.inputValue = "";
    }
  }
};
</script>

<style>
.input-new-tag {
  width: 220px;
  height: 30px;
/*  line-height:30px;*/
  margin-left: 15px;
  margin-top: 4px;
}
.input_but {
  height: 40px;
  background: #c7dffc;
  border: 1px solid #97cbff;
}
.annotation1 {
  font-size: 14px;
  color: #ff4d43;
  letter-spacing: 0;
  font-weight: bold;
}
.annotation2 {
  font-size: 14px;
  color: #001c00;
  letter-spacing: 0;
  line-height: 18px;
}
.card11 {
  min-height: 238px;
  background: #ffffff;
  box-shadow: 0 2px 5px 0 rgba(179, 189, 198, 0.5);
  border-radius: 2px;
}
hr {
  border: 1px dashed #97cbff;
  margin-left: 30px;
}
.card11 p {
  height: 30px;
  line-height: 30px;
  font-family: MicrosoftYaHeiUI;
  font-weight: bold;
  padding-left: 30px;
  font-size: 12px;
  color: #2e406c;
  letter-spacing: 0;
}
.tag1 {
  margin-left: 30px;
  margin-top: 10px;
  height: 24px;
  min-width: 170px;
  text-align: center;
  background-color: #e5f2ff;
  color: #2e406c;
  position:relative;
  padding-right:24px;
  box-sizing:border-box;

}
.tag1 .el-icon-close{
  position: absolute;
  right:5px;
  top:3px;
}
.text2{
  background:red;
  width:200px;
}
.text2:hover .close{
  display:block;
}
.close{
  display:none;
}
</style>
