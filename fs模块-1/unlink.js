const fs = require('fs');

fs.unlink('./image/a.md', err => {
    console.log(err);
})