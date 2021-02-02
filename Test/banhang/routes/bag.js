var express = require('express');
var router = express.Router();

const ctrl_bag = require('../controllers/bag');

router.get('/', ctrl_bag.getBag);
router.get('/:name', ctrl_bag.getSheet)

module.exports = router;
