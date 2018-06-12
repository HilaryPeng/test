<template>
	<div id="password">
		<div class="passwordul">
			<el-row  class='mt'>
				<el-col :span='5' align='right' class='passwordright'>密码强度</el-col>
				<el-col :span='19'>
					<el-radio-group v-model="passwordform.passwordstrength" fill='#00D082'   @change='submitpassword'>
						<el-radio-button label="无"></el-radio-button>
						<el-radio-button label="弱"></el-radio-button>
						<el-radio-button label="中"></el-radio-button>
						<el-radio-button label="强"></el-radio-button>
						<el-radio-button label="极强"></el-radio-button>
					</el-radio-group>
				</el-col>
			</el-row>
			<el-row :gutter="20">
				<el-col :span="12" :offset="5"><div class="passwordintroduce">必须包含大写字符、小写字符、数字和符号。</div></el-col>
			</el-row>
			<el-row  class='mt'>
				<el-col :span='5' align='right' class='passwordright'>修改周期</el-col>
				<el-col :span='19'>
					<el-radio-group v-model="passwordform.passwordcycle" fill='#00D082' @change='submitpassword'>
						<el-radio-button label="无"></el-radio-button>
						<el-radio-button label="12M"></el-radio-button>
						<el-radio-button label="6M"></el-radio-button>
						<el-radio-button label="3M"></el-radio-button>
						<el-radio-button label="1M"></el-radio-button>
					</el-radio-group>
				</el-col>
			</el-row>
			<el-row :gutter="20">
				<el-col :span="12" :offset="5"><div class="passwordintroduce">密码最少每个月修改一次。</div></el-col>
			</el-row>
			<el-row  class='mt'>
				<el-col :span='5' align='right' class='passwordright'>重复间隔</el-col>
				<el-col :span='19'>
					<el-radio-group v-model="passwordform.repeat" fill='#00D082' @change='submitpassword' >
						<el-radio-button label="无"></el-radio-button>
						<el-radio-button label="1"></el-radio-button>
						<el-radio-button label="3"></el-radio-button>
						<el-radio-button label="5"></el-radio-button>
						<el-radio-button label="7"></el-radio-button>
					</el-radio-group>
				</el-col>
			</el-row>
			<el-row :gutter="20">
				<el-col :span="12" :offset="5"><div class="passwordintroduce">新密码不得与最近使用的5次密码相同。</div></el-col>
			</el-row>
			<el-row  class='mt'>
				<el-col :span='5' align='right' class='passwordright'>密码锁定</el-col>
				<el-col :span='19'>
					<el-radio-group v-model="passwordform.passwordlock" fill='#00D082' @change='submitpassword' >
						<el-radio-button label="无"></el-radio-button>
						<el-radio-button label="20"></el-radio-button>
						<el-radio-button label="10"></el-radio-button>
						<el-radio-button label="5"></el-radio-button>
						<el-radio-button label="3"></el-radio-button>
					</el-radio-group>
				</el-col>
			</el-row>
			<el-row :gutter="20">
				<el-col :span="12" :offset="5"><div class="passwordintroduce">密码连续输错3次，账号自动冻结。</div></el-col>
			</el-row>
			<el-row  class='mt'>
				<el-col :span='5' align='right' class='passwordright'>密码位数</el-col>
				<el-col :span='19'>
					<el-radio-group v-model="passwordform.passworddigit" fill='#00D082' @change='submitpassword' >
						<el-radio-button label="1"></el-radio-button>
						<el-radio-button label="6"></el-radio-button>
						<el-radio-button label="8"></el-radio-button>
						<el-radio-button label="10"></el-radio-button>
						<el-radio-button label="12"></el-radio-button>
					</el-radio-group>
				</el-col>
			</el-row>
			<el-row :gutter="20">
				<el-col :span="12" :offset="5"><div class="passwordintroduce">密码位数为12位。</div></el-col>
			</el-row>
			<el-row  class='mt'>
				<el-col :span='5' align='right' class='passwordright'>禁止连续字符</el-col>
				<el-col :span='19'>
					<el-switch   v-model="passwordform.passwordban"  on-color="#13ce66"  off-color="#B3BDC6" class='passwordban' @change='submitpassword'></el-switch>
				</el-col>
			</el-row>
			<el-row :gutter="20">
				<el-col :span="12" :offset="5"><div class="passwordintroduce">密码中不允许存在123，abc，ABC之类的连续字符。</div></el-col>
			</el-row>
			<el-row  class='mt'>
				<el-col :span='5' align='right' class='passwordright'>禁止连重复字符</el-col>
				<el-col :span='19'>
					<el-switch   v-model="passwordform.passwordnorepeat"  on-color="#13ce66"  off-color="#B3BDC6" class='passwordban' @change='submitpassword'></el-switch>
				</el-col>
			</el-row>
			<el-row :gutter="20">
				<el-col :span="12" :offset="5"><div class="passwordintroduce">密码中不允许存在111，aaa，AAA之类的连续字符。</div></el-col>
			</el-row>
		</div>
	</div>
</template>
<script type="text/javascript">
export default {
	name: 'password',
	data() {
		return {
			passwordform:{
				passwordstrength:'无',
				passwordcycle:'无',
				repeat:'无',
				passwordlock:'无',
				passworddigit:'1',
				passwordban:true,
				passwordnorepeat:false
			}
		}
	},
	methods:{
		submitpassword:function(){
			console.log('提交数据',this.passwordform);
		}
	}
}
</script>
<style type="text/css" scoped>

.passwordul{
	padding-top:15px;
	background-image: linear-gradient(-179deg, #FFFFFF 1%, #DCFFFF 52%, #F6FFFF 100%);
	border: 1px solid #C7DFFC;
	box-shadow: 0 2px 4px 0 #CCCCCC;
	border-radius: 4px;
	width:620px;
	height:560px;
	margin:10px;
	box-sizing:border-box;
}
.passwordright{
	height:36px;
	line-height:36px;
	font-weight:bold;
	color: #2E406C;
	padding:0px;
}
.mt{
	margin-top:10px;
}
.passwordintroduce{
	font-family: MicrosoftYaHeiUI;
	font-size: 12px;
	color: #0066FF;
	letter-spacing: 0;
	padding-left:10px;
	margin-top:10px;
}
.passwordban{
	margin-top:8px;
	margin-left:10px;
}
</style>