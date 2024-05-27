const express = require('express');

const app = express();

// app.get('/', (req, res) => {
//     res.send({
//         name: 'wangjun',
//         age: 18
//     });
// });

app.get('/ab', (req, res) => {
    console.log('进入-----');
    res.send({
        name: '测试一下',
        age: 18
    });
});

app.listen(8080, () => {
    console.log('服务器启动惹');
})