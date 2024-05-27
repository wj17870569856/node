const fs = require('fs');

fs.readdir('./ceshi', (err, data) => {
    data.forEach(file => {
        fs.unlinkSync(`./ceshi/${file}`, err => {
            if (err) throw err;
            console.log('删除成功');
        })
    })

    fs.rmdir('./ceshi', (err) => {
        console.log('errr', err);
    });
})