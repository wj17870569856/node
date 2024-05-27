const express = require('express');
const indexRouter = require('./indexRouter');
const homeRouter = require('./route/homeRouter');
const loginRouter = require('./route/loginRouter');

const app = express();

app.use((req, res, next) => { // 应用级别中间件
    console.log('验证token');
    next();
})

// 配置模板引擎
app.set('views', './template');
app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);

// 配置静态资源
app.use(express.static('public'))

// 配置解析post参数的中间件 - express内置
app.use(express.urlencoded({extended: false}));  // post参数 - username=kerwin&password=1234
app.use(express.json()); // post参数 - {name: 'wa', age: 18}

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