var express = require('express');
var router = express.Router();
// var Product = require('../models/product');
// var Cart = require('../models/product');

const ctrl_iphone = require('../controllers/iphone');

router.get('/', ctrl_iphone.getIphone);
router.get('/form/:name', ctrl_iphone.getForm);



module.exports = router;