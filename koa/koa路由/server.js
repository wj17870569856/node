const Koa = require('koa');
const app = new Koa();
const router = require('./routes');

// 应用级
app.use(router.routes()).use(router.allowedMethods());

app.listen(3000, () => {
    console.log('koa服务启动啦----');
});