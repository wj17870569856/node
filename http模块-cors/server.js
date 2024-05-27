const http = require('http');
const url = require('url');

http.createServer((req, res) => {
    const strParams = url.parse(req.url, true);
    console.log('strParams-----', strParams);
    res.writeHead(200, {
        'Content-Type': 'application/json;charset=utf-8',
        'access-control-allow-origin': '*'
    })
    res.end(`${
        JSON.stringify({
            name: 'wangjun123456',
            age: 18,
            sex: '男'
        })
    }`);
}).listen(8080, () => {
    console.log('服务器已启动');
});
