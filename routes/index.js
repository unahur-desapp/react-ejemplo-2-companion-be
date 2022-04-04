var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({ app: 'Authors and phrases' });
});

module.exports = router;
