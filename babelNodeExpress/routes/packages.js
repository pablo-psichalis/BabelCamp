var express = require('express');
var router = express.Router();

const pkgCtrl = require('../controllers/package.controller.js')

/* GET users listing. */
router.get('/', function(req, res, next) {
  pkgCtrl.create(req.body)
  .then(res.json.bind(res))
  .catch(next)
});

module.exports = router;
