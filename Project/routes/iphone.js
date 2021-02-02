var express = require('express');
var router = express.Router();

const ctrl_iphone = require('../controllers/iphone');

router.get('/', ctrl_iphone.getIphone);
router.get('/form/:name', ctrl_iphone.getForm);

module.exports = router;