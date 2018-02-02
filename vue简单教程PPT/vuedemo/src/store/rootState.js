const state={
	count:0
}
export default state;
const store = new Vuex.Store({
	state:{
		count:0
	},
	mutations:{
		add:state=>state.count++,
		subtract:state=>state.count++
	}
})