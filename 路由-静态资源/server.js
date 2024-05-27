const http = require('http');
const fs = require('fs');
const path = require('path');
const mime = require('mime');

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
            if (readStaticFile(req, res)) {
                return;
            }
            res.writeHead(404, {
                'Content-Type': 'text/html;charset=utf8'
            });
            res.write(fs.readFileSync('./static/404.html'), 'utf-8');
    }

    res.end();
}).listen(8080, () => {
    console.log('路由服务器启动啦。。。')
})

// 静态资源管理
function readStaticFile(req, res) {
    // 获取路径值
    const myURL = new URL(req.url, 'http://127.0.0.1');
    const pathname = path.join(__dirname, '/static', myURL.pathname);
    if (fs.existsSync(pathname)) {
        res.writeHead(200, {
            'Content-Type': `${mime.getType(path.extname(pathname))};charset=utf8`
        })
        res.write(fs.readFileSync(pathname), 'utf-8');
        res.end();
        return true;
    } else {
        return false;
    }
}