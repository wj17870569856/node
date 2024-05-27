var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log('读取cookies-----', req.cookies);
  res.cookie('gender', 'male');
  res.send('respond with a resource');
});

module.exports = router;
