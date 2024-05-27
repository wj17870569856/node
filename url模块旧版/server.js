const http = require('http');
const url = require('url');
const { renderHtml } = require('./constant');

const server = http.createServer();

server.on('request', (req, res) => { // 接收浏览器传的参数， 返回渲染内容
    // req 接受浏览器的参数
    // res 返回给浏览器的内容
    const urlObj = url.parse(req.url, true);
    console.log(urlObj.query); // 此处打印为json对象
    const pathname =  url.parse(req.url).pathname;
    console.log('****** req ******', pathname);
    if(pathname === '/favicon.ico') return;
    res.writeHead(200, { // 给浏览器设置响应头
        'Content-Type': 'text/html; charset=utf8', // 告诉浏览器，返回的数据类型是html格式，编码是utf8
    });
    res.write(renderHtml(pathname)); // 需要使用字符串，不能只直接使用json数据格式
    res.end(); // 代表已经结束了

    // res.write('[1, 2, 3]'); // 不可以，因为已经结束了 
})

server.listen(8080, () => {
    console.log('服务器启动成功');
})


// // 创建服务器
// http.createServer((req, res) => { // 接收浏览器传的参数， 返回渲染内容
//     // req 接受浏览器的参数
//     // res 返回给浏览器的内容
//     console.log('****** req ******', req.url);
//     if(req.url === '/favicon.ico') return;
//     res.writeHead(200, { // 给浏览器设置响应头
//         'Content-Type': 'text/html; charset=utf8', // 告诉浏览器，返回的数据类型是html格式，编码是utf8
//     });
//     res.write(renderHtml(req.url)); // 需要使用字符串，不能只直接使用json数据格式
//     res.end(); // 代表已经结束了

//     // res.write('[1, 2, 3]'); // 不可以，因为已经结束了
// }).listen(8080, () => {
//     console.log('服务器启动成功');
// })