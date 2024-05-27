const http = require('http');
const https = require('https');
const cheerio = require('cheerio');

http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'application/json;charset=utf-8',
        'access-control-allow-origin': '*'
    });
    httpGet((data) => {
        res.end(spider(data))
    });
}).listen(8080, () => {
    console.log('爬虫服务器启动---');
})


function httpGet(cb) {
    let data = '';
    https.get('https://juejin.cn/', res => {
        res.on('data', (chunk) => {
            data += chunk;
        });

        res.on('end', () => {
            console.log('data')
            cb(data);
        });
    })
}

function spider(data) {
    let $ = cheerio.load(data);
    console.log('获取元素----123', $('.entry-list.list').html());
    // let movieList = $('.column.content');
    // console.log('movieList', movieList);

    // const movies = [];
    // movieList.each((indx, value) => {
    //     movies.push($(value).find('.title').text())
    // })

    // console.log('movies', movies);
    return JSON.stringify(data);
}