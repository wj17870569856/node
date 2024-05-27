const Koa = require('koa');
const static = require('koa-static');
const path = require('path');
const bodyParser = require('koa-bodyparser');
const views = require('koa-views');
const session = require('koa-session-minimal');
const router = require('./routes');

const app = new Koa();

// 应用级
app.use(bodyParser()); // 获取post参数
app.use(static(path.join(__dirname, 'public')));

app.use(views(path.join(__dirname, 'views'), {extension: 'ejs'}));

// session的配置
app.use(session({
    key: 'wangjunSessionId',
    cookie: {
        maxAge: 1000 * 60 * 60
    }
}))

app.use(async(ctx, next) => {
    if (ctx.url.includes('login')) {
        await next();
        return;
    }
    if (ctx.session.user) {
        ctx.session.date = Date.now();
        await next();
    } else {
        ctx.redirect('/login');
    }
})

app.use(router.routes()).use(router.allowedMethods());

app.listen(3000, () => {
    console.log('koa服务启动啦----');
});