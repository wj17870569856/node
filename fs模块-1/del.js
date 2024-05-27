const fs = require('fs');

fs.readdir('./image', (err, data) => {
    data.forEach(file => {
        fs.unlink(`./image/${file}`, err => {
            if (err) throw err;
            console.log('删除成功');
        })
    })

    fs.rmdir('./image', (err) => {
        console.log('errr', err);
    });
})