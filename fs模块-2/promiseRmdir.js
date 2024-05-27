const fs = require('fs').promises;

fs.readdir('./ceshi').then(async data => {
    const arr = [];
    data.forEach(file => {
        arr.push(fs.unlink(`./ceshi/${file}`));
    })

    await Promise.all(arr);
    console.log('任务-----', arr);
    fs.rmdir('./ceshi');
})