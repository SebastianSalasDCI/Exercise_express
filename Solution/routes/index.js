var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index',{data: 'data'});
  res.sendFile('index.html')
});

module.exports = router;
