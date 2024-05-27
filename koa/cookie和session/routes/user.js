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

router.post('/login', (ctx, next) => {
    console.log('请求参数---', ctx.request.body);
    const {username, password} = ctx.request.body;
    if (username === 'wangjun' && password === '123456') {
        // 设置sessionId
        ctx.session.user = {
            username: 'wang'
        }
        ctx.body = {
            msg: '登录成功',
            code: 0
        };
    } else {
        ctx.body = {
            msg: '登录失败',
            code: 1
        };
    }
})


module.exports = router;