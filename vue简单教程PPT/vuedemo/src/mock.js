require.config({
	paths:{
		mock:'http://mockjs.com/dist/mock'
	}
})
//
require(['mock'],function(Mock){
	var data=Mock.mock({
		'list|1-10':[{
			'id|+1':1
		}]
	})
})