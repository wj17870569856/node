const http = require('http');
const https = require('https');

http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'application/json;charset=utf-8',
        'access-control-allow-origin': '*'
    });
    httpGet((data) => {
        res.end(data)
    });
}).listen(8080, () => {
    console.log('猫眼服务器启动---');
})


function httpGet(cb) {
    let data = '';
    https.get('https://i.maoyan.com/api/mmdb/movie/v3/list/hot.json?ct=%E6%B1%89%E4%B8%AD&ci=357&channelId=4', res => {
        res.on('data', (chunk) => {
            data += chunk;
        });

        res.on('end', () => {
            console.log('data')
            cb(data);
        });
    })
}