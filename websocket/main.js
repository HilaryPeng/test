var webStocket=require('ws').Server;
ws2=new webStocket({port:8085});
ws2.on('connection',function(ws){
	//connection 表示连接成功
	console.log("连接完毕");
	ws.on('message',function(e){
		//message是信息 这两个参数都不能改变 必须写成这样。
		console.log(e);
		function sendNew(){
			var numrodom=Math.floor(Math.random()*100);
			ws.send(numrodom);
		
		};
		sendNew();
		ws.send('我是服务器发出的信息'),
//		function a(){
//			console.log(a);
//			setTimeout("a()",1000);
//		};
//		a();
	})
	
})
