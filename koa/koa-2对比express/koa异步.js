const Koa = require('koa');

const app = new Koa();

app.use(async (ctx, next) => {
    console.log('1111111');
    await next();
    console.log('4444444');
    ctx.body = 'koa服务成功搭建';
})

app.use(async (ctx, next) => {
    console.log('222222222');
    // 异步
    await delay(1000);
    console.log('333333333');
})

app.listen(3000, () => {
    console.log('server is running at port 3000');
})


function delay(time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, time)
    });
}