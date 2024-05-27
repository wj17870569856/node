const express = require('express');
const indexRouter = require('./indexRouter');
const homeRouter = require('./homeRouter');
const loginRouter = require('./loginRouter');

const app = express();

app.use((req, res, next) => { // 应用级别中间件
    console.log('验证token');
    next();
})


// 应用级别中间件
app.use('/', indexRouter);
app.use('/ceshihome', homeRouter);
app.use('/ceshilogin', loginRouter);

app.use((req, res) => {
    res.status(404).send('丢了。。。。。')
})


app.listen(8080, () => {
    console.log('中间件服务启动啦')
})