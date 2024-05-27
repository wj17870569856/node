const fs = require('fs');

fs.rmdir('./image', err => {
    console.log(err);
})