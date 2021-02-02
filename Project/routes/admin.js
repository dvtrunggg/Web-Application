var express = require('express');
var router = express.Router();

const ctrl = require('../controllers/admin');

router.get('/', ctrl.getAdmin);

module.exports = router;