const Router = require('koa-router');
const router = new Router();

router.get('/', async(ctx, next) => {
    await ctx.render('home', {title: '只是测试'}); // 自动查找views/home.ejs  加上async/await是需要等待模版解析完毕之后再输出
});

module.exports = router;