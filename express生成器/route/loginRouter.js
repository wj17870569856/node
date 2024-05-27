const express = require('express');

const router = express.Router();

// 路由级别-响应前端的get请求

router.get('/', (req, res) => { // 该接口是负责login的服务端渲染代码
    console.log('获取参数----', req.query)
    // res.send('<b>啦啦啦</b>')   send // 片段  & json
    // res.json([1,2,3]) // json

    // 渲染模版返回给前端
    res.render('login', {title: '1234567'});
})

router.post('/', (req, res) => {
    console.log('post请求体', req.body)
    if (req.body.username === 'wangjun' && req.body.password === '123456') {
        console.log('登录成功');

        // 重定向到home页面
        res.redirect('/ceshihome')
    } else {
        console.log('登录失败');
        res.redirect('/ceshilogin')
    }
})

router.get('/abc', (req, res) => {
    res.send('******* login router  abc ********')
})

module.exports = router;