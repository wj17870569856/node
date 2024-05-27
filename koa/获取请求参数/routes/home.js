const Router = require('koa-router');
const router = new Router();

router.get('/', (ctx, next) => {
    ctx.body = `<html>
                    <h1>我是home页面</h1>
                </html>`;
});

module.exports = router;