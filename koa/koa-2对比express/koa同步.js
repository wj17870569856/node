const Koa = require('koa');

const app = new Koa();

app.use((ctx, next) => {
    console.log('11111111')
    next();
    console.log('3333333');
    ctx.body = 'koa服务成功搭建';
})

app.use((ctx, next) => {
    console.log('222222222');
})

app.listen(3000, () => {
    console.log('server is running at port 3000');
})