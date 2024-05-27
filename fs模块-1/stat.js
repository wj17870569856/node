const fs = require('fs');

fs.stat('./image', (err, data) => {
    console.log('判断是否是文件---', data.isFile());
    console.log('判断是否是目录---', data.isDirectory());
})