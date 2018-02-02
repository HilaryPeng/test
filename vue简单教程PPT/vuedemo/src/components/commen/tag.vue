<template>
	<div id="tag">
		<ul>

			<li v-for='(i,index) in item' class='clearfix' :class='{active:index==isActive}'>
			<span class='tagleft' @click='tagRouter(index)'>{{i}}</span>
			<span class='close' @click='close(index)'>X</span>
			</li>
		</ul>
	</div>
	

</template>
<script type="text/javascript">
	export default{
		data(){
			return {
				item:['index'],
				isActive:'0',
				isTrue:true,
			}
		},
		methods:{
			close:function(index){
				if(index==0){
					console.log(true);
					return false;
				}//阻止index被关掉
				this.item.splice(index,1);
				this.$parent.$refs.slider.tagItem=this.item;
				if(this.isActive==index){
					//console.log(this.item)
					if(this.isActive==this.item.length){
						this.isActive--;				
						this.$router.push(this.item[this.isActive]);
						//console.log(this.item[this.isActive]);					
						for(let i=0;i<this.$parent.$refs.slider.lists.length;i++){ 
						//	console.log(this.$parent.$refs.slider.lists[i])
							if(this.$parent.$refs.slider.lists[i].address==this.item[this.isActive]){
								//console.log(this.$parent.$refs.slider.lists[i].address)
								this.$parent.$refs.slider.isActive=i;
							}
						}
					}else{
						this.$router.push(this.item[this.isActive]);
						for(let i=0;i<this.$parent.$refs.slider.lists.length;i++){
						//	console.log(this.$parent.$refs.slider.lists[i])
							if(this.$parent.$refs.slider.lists[i].address==this.item[this.isActive]){
								//console.log(this.$parent.$refs.slider.lists[i].address)
								this.$parent.$refs.slider.isActive=i;
							}
						}
					}
					//跳转路由
				}else if(this.isActive>index){
					this.isActive--;
					this.$router.push(this.item[this.isActive]);
					for(let i=0;i<this.$parent.$refs.slider.lists.length;i++){
						//	console.log(this.$parent.$refs.slider.lists[i])
							if(this.$parent.$refs.slider.lists[i].address==this.item[this.isActive]){
								//console.log(this.$parent.$refs.slider.lists[i].address)
								this.$parent.$refs.slider.isActive=i;
							}
					}	
				}else if(this.isActive<index){
					//console.log('不变');
					//console.log(this.isActive);
				}
			},
			tagRouter:function(index){
				this.isActive=index;
				let router=this.item[index];
				this.$router.push(router);
				// console.log(router)
				//根据点击tag标签联动到 nav栏的操作
				for(let i=0;i<this.$parent.$refs.slider.lists.length;i++){
					if( this.$parent.$refs.slider.lists[i].address==router ){
						//console.log(this.$parent.$refs.slider.isActive)
						this.$parent.$refs.slider.isActive=i;
					}
				}
			}
		}
	}

</script>
<style type="text/css" scoped>
	#tag ul li{
		float:left;
		width:100px;  
		background:#eee;
		text-align: center;
		height:30px;
		line-height:30px;
		cursor:pointer;
		border-right:1px solid red;
	}
	.close{
		background:#ddd;
		float:left;
		width:20%;
	}
	.tagleft{
		float:left;
		width:80%;

	}
#tag ul li.active .tagleft{
	background:red;
}
#tag ul .bga{
	background:red;
}

</style>