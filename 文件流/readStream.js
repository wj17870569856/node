const fs = require('fs');

const rs = fs.createReadStream('./1.txt', 'utf-8');

rs.on('data', chunk => {
    console.log('du----', chunk);
})
rs.on('end', () => {
    console.log('文件读取完毕');
})
rs.on('error', err => {
    console.log(err);
})