const Koa = require('koa');
const static = require('koa-static');
const path = require('path');
const bodyParser = require('koa-bodyparser');
const router = require('./routes');


const app = new Koa();

// 应用级
app.use(bodyParser()); // 获取post参数
app.use(static(path.join(__dirname, 'public')));

// 配置模版引擎
app.use(router.routes()).use(router.allowedMethods());

app.listen(3000, () => {
    console.log('koa服务启动啦----');
});