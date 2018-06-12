const mutations={
		changeBol:function(state){
			if(state.isCollapse==false){
				state.isCollapse=true
			}else{
				state.isCollapse=false
			}
		},
		add:(state)=>state.count++,
		addtwo:(state,data)=>{return state.count+=data.num},
		reduce:(state,data)=>{return state.count-=data.num},
		checkName:function(state,data){
			//处理异步拿过来的数据
			state.getName=data.data.data.name
		},
		setToken:function(state,data){
			//注入到vuex中
			state.key=data.data
		}

	}
export default mutations