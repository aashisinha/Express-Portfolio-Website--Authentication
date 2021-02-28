/* users.js | Aashi Sinha | 301151250 | Feb 28, 2021 */

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Placeholder');
});

module.exports = router;
