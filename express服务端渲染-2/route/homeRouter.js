const express = require('express');

const router = express.Router();


router.get('/', (req, res) => {
    // res.send('****** home router ******');
    const dataList = ['wangjun', 'cessjsj', 'wang']; // 数据库里面拿到的数据
    const myHtml = '<b>我是加粗代码片段</b>';
    res.render('home', {dataList, myHtml});
})

router.get('/abc', (req, res) => {
    res.send('****** home router abc ******');
})

router.get('/list', (req, res) => {
    res.send(['111', '222', '333'])
})

module.exports = router;