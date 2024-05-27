const Koa = require('koa');
const static = require('koa-static');
const path = require('path');
const router = require('./routes');

const app = new Koa();

// 应用级
app.use(static(path.join(__dirname, 'public')));
app.use(router.routes()).use(router.allowedMethods());

app.listen(3000, () => {
    console.log('koa服务启动啦----');
});