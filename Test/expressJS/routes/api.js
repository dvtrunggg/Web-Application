// mình sẽ định nghĩa tất cả đường dẫn


var express = require('express');
var router = express.Router();
// var router = require('express').Router(); // cái này bỏ nha

//định nghĩa các đường dẫn router để định nghĩa page cho mình
var homeController = require('../controllers/APIs/home_controller');
var productController = require('../controllers/APIs/product_controller');

router.get('/',function(req, res){
    res.json({
        status: 'API is working',
        message: 'Welcome to RESTHuh APO of System'
    });
});

router.route('/home').get(homeController.home); // nhét zô thằng home
router.route('/home/list').get(homeController.listOfProduct);
router.route('/product/getall').get(productController.getAllProduct);


module.exports = router;