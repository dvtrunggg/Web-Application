var express = require('express');
var router = express.Router();

const ctrl_mac = require('../controllers/mac');

router.get('/', ctrl_mac.getMac);
router.get('/item/:name', ctrl_mac.getItem);
router.get('/form/:name', ctrl_mac.getForm);

module.exports = router;