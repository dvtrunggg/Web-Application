// const { json } = require('express');
// var express = require('express');
// var router = express.Router();
// var MongoClient = require('mongodb').MongoClient;
// var ObjectId = require('mongodb').ObjectID;
var array = require('../../config/arrayProduct');

const ctrl_iphone = require('../../controllers/iphone');

// router.get('/', ctrl_iphone.getIphone);
// router.get('/form/:name', ctrl_iphone.getForm);




var addToBag = document.getElementById('addToBag');
var color = document.getElementsByClassName('checkColor')[0];
var rom = document.getElementsByClassName('checkRom')[0];

addToBag.addEventListener('click', function(){
    console.log(color.innerText);
    console.log(rom.innerText);
    // let iphone11 = {
    //     mau: color.innerText,
    //     bonho: rom.innerText,
    //     ten : 'iphone SE'
    // }

    // let json = ctrl_iphone.productIphone(req, res, iphone11);

    // if (json == null)
    // {
    //     alert('het roi');
    // }
    // else
    // {
    //     alert('thanh cong');
    //     // them json vao trong cai mang global
    //     array.products.push(json);
    //     console.log(json);

    // }
});

// //  module.exports = router;
