<template>
<div>
    <div class="zhu"><p>注：<span>被银行检查的分公司将屏蔽【快速索搜】和【共案】功能</span></p></div>
    <div class="check_out"><p>选择被检查分公司
  <el-checkbox v-model="checkAll" @change="handleCheckAllChange" class="checkbox1" >全选</el-checkbox></p>
  <hr>
  <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange" class="gr">
    <el-checkbox-button v-for="city in cities" :label="city" :key="city" class="but">{{city}}</el-checkbox-button>
  </el-checkbox-group>
  </div>


   
  </div>
</template>
<script>
const cityOptions = [
  "上海运营部",
  "北京运营部",
  "广州运营部",
  "深圳运营部",
  "上海运营总部",
  "北京分公司",
  "鄂尔多斯分公司",
];

export default {
  data() {
    return {
      checkAll: false,
      checkedCities: [],
      cities: cityOptions,      
    };
  },
  methods: {
    handleCheckAllChange(event) {
      this.checkedCities = event.target.checked ? cityOptions : [];
    },
    handleCheckedCitiesChange(value) {
      let checkedCount = value.length;
      this.checkAll = checkedCount === this.cities.length;
    },
  }
};
</script>
<style type="text/css" scoped>
.zhu {
  height: 40px;
  line-height: 40px;
  text-align: left;
  padding-left: 20px;
  background: #c7dffc;
  border: 1px solid #97cbff;
}
.zhu p {
  font-family: MicrosoftYaHeiUI;
  font-weight: bold;
  font-size: 14px;
  color: #ff4d43;
  letter-spacing: 0;
}
.zhu span {
  font-family: MicrosoftYaHeiUI;
  font-size: 14px;
  color: #001c00;
  letter-spacing: 0;
  line-height: 18px;
}
.check_out {
  height: 238px;
  background: #ffffff;
  box-shadow: 0 2px 5px 0 rgba(179, 189, 198, 0.5);
  border-radius: 2px;
}
.check_out p {
  height: 30px;
  line-height: 30px;
  font-family: MicrosoftYaHeiUI;
  font-weight: bold;
  padding-left: 30px;
  font-size: 12px;
  color: #2e406c;
  letter-spacing: 0;
}
.checkbox1 {
  padding-left: 20px;
}
hr {
  border: 1px dashed #97cbff;
  margin-left: 30px;
}
.gr {
  padding-left: 20px;
}
.but {
  padding-left: 10px;
  padding-top: 10px;
}

.el-checkbox-button.is-checked .el-checkbox-button__inner {
  background: #97cbff;
  border-radius: 2px;
}

</style>
