const http = require('http');
const https = require('https');

http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'application/json;charset=utf-8',
        'access-control-allow-origin': '*'
    });
    httpPost((data) => {
        res.end(data)
    });
}).listen(8080, () => {
    console.log('猫眼服务器启动---');
})


function httpPost(cb) {
    let options = {
        hostname: 'm.xiaomiyoupin.com',
        port: 443,
        path: '/mtop/market/search/placeHolder',
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }
    }
    let data = '';
    const req = https.request(options, (res) => {
        res.on('data', (res) => {
            data += res;
        })
        res.on('end', () => {
            cb(data);
        })
    })
    req.write(JSON.stringify([{},{"baseParam":{"ypClient":1}}]))
    req.end()
}