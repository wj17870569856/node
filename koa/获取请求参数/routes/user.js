const Router = require('koa-router');
const router = new Router();

router.get('/', (ctx, next) => {
    console.log('12333', ctx.query)
    console.log('66766', ctx.querystring)
    ctx.body = ['111111', '2222222', '333333'];
})
.post('/', (ctx, next) => {
    console.log('获取post参数***', ctx.request.body); // 获取请求参数
    ctx.body = 'post请求发送';
})
.put('/:id', (ctx, next) => {
    console.log('ctx.params', ctx.params);
    ctx.body = 'put请求发送'
})
.del('/:id', (ctx, next) => {
    ctx.body = 'del请求发送'
})

module.exports = router;