var express = require('express');
var router = express.Router();

const ctrl = require('../api_controller/data_controller');

// + -> %2B

router.get('/ipad', ctrl.getIpad);
router.get('/iphone', ctrl.getIphone);
router.get('/mac', ctrl.getMac);
router.get('/watch', ctrl.getWatch);

// router.get('/ipad/search', ctrl.getIpadItem);

module.exports = router;

