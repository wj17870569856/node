const express = require('express');

const router = express.Router();

// 路由级别中间件

router.get('/home', (req, res) => {
    res.send('home');
});

router.get('/login', (req, res) => {
    res.send('login')
});

module.exports = router;