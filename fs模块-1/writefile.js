const fs = require("fs");

fs.writeFile('./image/a.md', '<h1>ceshi<h1>', err => { // 覆盖式写入
    console.log('err', err);
});