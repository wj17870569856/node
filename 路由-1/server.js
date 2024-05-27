const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
    console.log('req.url----', req.url);
    const myURL = new URL(req.url, 'http://127.0.0.1');
    console.log('*********', myURL.pathname);
    switch (myURL.pathname) { // 可考虑使用策略模式
        case '/':
            res.writeHead(200, {
                'Content-Type': 'text/html;charset=utf8'
            });
            res.write(fs.readFileSync('./static/home.html'), 'utf-8');
            break;
        case '/login':
            res.writeHead(200, {
                'Content-Type': 'text/html;charset=utf8'
            });
            res.write(fs.readFileSync('./static/login.html'), 'utf-8');
            break;
        default:
            res.writeHead(404, {
                'Content-Type': 'text/html;charset=utf8'
            });
            res.write(fs.readFileSync('./static/404.html'), 'utf-8');
    }

    res.end();
}).listen(8080, () => {
    console.log('路由服务器启动啦。。。')
})