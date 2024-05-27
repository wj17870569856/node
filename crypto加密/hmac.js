const crypto = require('crypto');

const hash = crypto.createHmac('sha256 ');

hash.update('hello world');

console.log(hash.digest('base64'));