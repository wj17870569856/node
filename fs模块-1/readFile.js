const fs = require('fs');

fs.readFile('./image/a.md', 'utf-8', (err, data) => {
    console.log('data-----', data);
});