const Router = require('koa-router');
const router = new Router();

router.get('/', (ctx, next) => {
    ctx.body = ['111111', '2222222', '333333'];
})
.post('/', (ctx, next) => {
    ctx.body = 'post请求发送'
})
.put('/:id', (ctx, next) => {
    console.log('ctx.params', ctx.params);
    ctx.body = 'put请求发送'
})
.del('/:id', (ctx, next) => {
    ctx.body = 'del请求发送'
})

module.exports = router;