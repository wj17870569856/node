const Koa = require('koa');
const Router = require('koa-router');
const static = require('koa-static');
const path = require('path');
const WebSocket = require('ws');
const WebSocketServer = WebSocket.WebSocketServer;

const app = new Koa();
const route = new Router();

route.get('/list', (ctx, next) => {
    ctx.body = {
        ok: 0
    }
});

const wss = new WebSocketServer({ port: 8080 });
wss.on('connection', function connection(ws) {

  ws.on('error', console.error);

  ws.on('message', function message(data) {
    console.log('received: %s', data);
    // 转发给其他人
    wss.clients.forEach(function each(client) {
        if (client !== ws && client.readyState === WebSocket.OPEN) {
          client.send(data, {binary: false});
        }
    });
  });

  ws.send('欢迎来到聊天室');

});

app.use(static(path.join(__dirname, 'public')));
app.use(route.routes()).use(route.allowedMethods());

app.listen(3000, () => {
    console.log('服务器启动啦啦啦啦---')
});