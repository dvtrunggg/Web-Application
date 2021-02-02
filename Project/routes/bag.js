var express = require('express');
var router = express.Router();

const ctrl = require('../controllers/bag');

router.get('/', ctrl.getBag);
router.post('/', ctrl.postBill);

module.exports = router;