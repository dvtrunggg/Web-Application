var express = require('express');
var router = express.Router();

const ctrl_ipad = require('../controllers/ipad');

router.get('/', ctrl_ipad.getIpad);
router.get('/form/:name', ctrl_ipad.getForm);

module.exports = router;