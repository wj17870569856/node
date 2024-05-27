const http = require('http');
const fs = require('fs');
const zlib = require('zlib');

const gzip = zlib.createGzip();

http.createServer((req, res) => {
    const readStream = fs.createReadStream('./text.html');
    res.writeHead(200, {
        'Content-Type': 'application/x-javascript; charset=utf-8',
        'Content-Encoding': 'gzip'
    })
    readStream.pipe(gzip).pipe(res)

}).listen(8080, () => {
    console.log('zlip服务器启动啦')
})