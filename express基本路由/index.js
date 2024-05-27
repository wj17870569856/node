const express = require('express');

const app = express();


app.get('/', (req, res, next) => {
    // res.send({
    //     name: '测试',
    //     age: 18
    // });
    console.log('你你你你你你你牛');
    next();
}, (req, res) => {
    res.send('测试一下链式-----');
})

app.get('/ab?cd', (req, res) => {
    res.send({
        name: 'wangjun',
        age: 18
    });
})

app.listen(8080, () => {
    console.log('服务器启动惹');
})