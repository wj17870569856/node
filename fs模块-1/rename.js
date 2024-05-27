const fs = require('fs');

fs.rename('./image', './image1', err => {
    console.log('err-----', err);
});