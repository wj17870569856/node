const crypto = require('crypto');

function encrypt() {
    const dep = crypto.createCipheriv('aes-128-cbc', key, iv);
    return dep.update(data, 'binary');
}

function name(params) {
    
}