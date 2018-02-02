var WebSocketServer = require('ws').Server;
wss = new WebSocketServer({ port: 8181 });
wss.on('connection', function (ws) {
    console.log('连接完毕');
    ws.on('message', function (e) {
        console.log('我是从客户端接收的信息：'+e);
    });
});