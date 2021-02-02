var express = require('express');
var router = express.Router();

const ctrl = require('../controllers/detail');

// router.get('/', ctrl.getDetail);
router.get('/:id', ctrl.getDetailProduct);

router.post('/:id', ctrl.changeProperty);

module.exports = router;