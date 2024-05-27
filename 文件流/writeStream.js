const fs = require('fs');

const ws = fs.createWriteStream('./2.txt', 'utf-8');

ws.write('123456789');
ws.write('aaaaaaaaaaaaa');
ws.write('bbbbbbbbbbbbbbb');

ws.end();