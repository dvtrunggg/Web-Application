var express = require('express');
var router = express.Router();

const ctrl_home = require('../controllers/index');

router.get('/', ctrl_home.getHome);
router.get('/sheet/:name', ctrl_home.getSheet)

module.exports = router;
