const express = require('express');

const app = express();

app.use((req, res, next) => {
    console.log('1111111');
    next();
    console.log('4444444');
    res.send('express服务成功搭建')
})

app.use(async (req, res, next) => {
    console.log('222222222');
    // 异步
    await delay(1000);
    console.log('333333333');
})

app.listen(3000, () => {
    console.log('server is running at port 3000');
})


function delay(time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, time)
    });
}