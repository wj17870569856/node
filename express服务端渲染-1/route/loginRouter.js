const express = require('express');

const router = express.Router();

// 路由级别-响应前端的get请求

router.get('/', (req, res) => {
    console.log('获取参数----', req.query)
    res.send('******* login success ********')
})

router.post('/', (req, res) => {
    console.log('post请求体', req.body)
    res.send({ok: 1})
})

router.get('/abc', (req, res) => {
    res.send('******* login router  abc ********')
})

module.exports = router;