const querystring = require('querystring');

const str = 'name=wangjun&age=100';

const obj = querystring.parse(str);

const escapestr = querystring.escape(str);

const escapeTest = 'name%3Dwangjun%26age%3D100';

console.log('obj---', querystring.unescape(escapeTest));