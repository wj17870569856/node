const fs = require('fs');

fs.readdir('./image', (err, data) => {
    console.log('文件目录----', data);
})