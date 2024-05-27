const Koa = require('koa');

const app = new Koa();

app.use((ctx, next) => { // ctx = context 里面包含了req和res
    console.log('ctx.request.path----', ctx.request.path);
    // ctx.response.body = '<b>hello world</b>';
    ctx.body = '<b>简写</b>';
})

app.listen(3000);