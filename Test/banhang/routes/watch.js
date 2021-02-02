var express = require('express');
var router = express.Router();

const ctrl_watch = require('../controllers/watch');

router.get('/', ctrl_watch.getWatch);
router.get('/item/:name', ctrl_watch.getItem);
router.get('/hermes/:name', ctrl_watch.getFormHermes);
router.get('/nike/:name', ctrl_watch.getFormNike);
router.get('/series3/:name', ctrl_watch.getFormSeries3);
router.get('/series5/:name', ctrl_watch.getFormSeries5);

module.exports = router;