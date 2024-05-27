const fs = require('fs');

fs.appendFile('./image/a.md', '<br/><h2>啦啦啦<h2>', err => { // 添加式写入
    console.log(err);
})