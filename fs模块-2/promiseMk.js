const fs = require('fs').promises;

// fs.mkdir('./ceshi').then(res => {
//     console.log('创建文件夹', res);
// })

// fs.writeFile('./ceshi/a.txt', 'sss').then(res => {
//     console.log('写入文件----', res);
// })

fs.readFile('./ceshi/a.txt', 'utf-8').then(res => {
    console.log('读取文件----', res);
});