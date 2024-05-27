const http = require('http');
const url = require('url');

http.createServer((req, res) => {
    const strParams = url.parse(req.url, true);
    console.log('strParams-----', strParams);
    res.end(`${strParams.query.callback}(${
        JSON.stringify({
            name: 'wangjun123456',
            age: 18,
            sex: '男'
        })
    })`);
}).listen(8080, () => {
    console.log('服务器已启动');
});
