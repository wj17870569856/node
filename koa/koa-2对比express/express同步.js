const express = require('express');

const app = express();

app.use((req, res, next) => {
    console.log('1111111');
    next();
    console.log('3333333');
    res.send('express服务成功搭建')
})

app.use((req, res, next) => {
    console.log('222222222');
})

app.listen(3000, () => {
    console.log('server is running at port 3000');
})