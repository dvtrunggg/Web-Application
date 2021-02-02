var Product = require('../../models/product');

var mongoose = require('mongoose');
// const { exists } = require('../models/product');
mongoose.connect("mongodb+srv://18VP:Trung@123@cluster0.xar5c.mongodb.net/18VP?retryWrites=true&w=majority", {
    useUnifiedTopology: true,
    useNewUrlParser: true
});
var iPhone11pro = [


    new Product({
        name : 'iphone 11 pro',

        color: 'grey',
        rom : '64GB',
count: 50,
        price : 999,
            image: '/images/img_iphone/img-buy-iphone11-pro/iphone11-pro.jpg',
}),
    new Product({
        name : 'iphone 11 pro',

        color: 'gold',
        rom : '64GB',
count: 50,
        price : 999,
            image: '/images/img_iphone/img-buy-iphone11-pro/iphone11-pro.jpg',
}),
    new Product({
        name : 'iphone 11 pro',

        color: 'silver',
        rom : '64GB',
count: 50,
        price : 999,
            image: '/images/img_iphone/img-buy-iphone11-pro/iphone11-pro.jpg',
}),
    new Product({
        name : 'iphone 11 pro',

        color: 'green',
        rom : '64GB',
count: 50,
        price : 999,
            image: '/images/img_iphone/img-buy-iphone11-pro/iphone11-pro.jpg',
}),

    new Product({
        name : 'iphone 11 pro',

        color: 'grey',
        rom : '256GB',
count: 50,
        price : 1149,
            image: '/images/img_iphone/img-buy-iphone11-pro/iphone11-pro.jpg',
}),

    new Product({
        name : 'iphone 11 pro',

        color: 'silver',
        rom : '256GB',
count: 50,
        price : 1149,
            image: '/images/img_iphone/img-buy-iphone11-pro/iphone11-pro.jpg',
}),
    new Product({
        name : 'iphone 11 pro',

        color: 'green',
        rom : '256GB',
count: 50,
        price : 1149,
            image: '/images/img_iphone/img-buy-iphone11-pro/iphone11-pro.jpg',
}),
    new Product({
        name : 'iphone 11 pro',

        color: 'gold',
        rom : '256GB',
count: 50,
        price : 1149,
            image: '/images/img_iphone/img-buy-iphone11-pro/iphone11-pro.jpg',
}),

    new Product({
        name : 'iphone 11 pro',

        color: 'grey',
        rom : '512GB',
count: 50,
        price : 1349,
            image: '/images/img_iphone/img-buy-iphone11-pro/iphone11-pro.jpg',
}),

    new Product({
        name : 'iphone 11 pro',

        color: 'silver',
        rom : '512GB',
count: 50,
        price : 1349,
            image: '/images/img_iphone/img-buy-iphone11-pro/iphone11-pro.jpg',
}),

    new Product({
        name : 'iphone 11 pro',

        color: 'green',
        rom : '512GB',
count: 50,
        price : 1349,
            image: '/images/img_iphone/img-buy-iphone11-pro/iphone11-pro.jpg',
}),
    new Product({
        name : 'iphone 11 pro',

        color: 'gold',
        rom : '512GB',
count: 50,
        price : 1349,
            image: '/images/img_iphone/img-buy-iphone11-pro/iphone11-pro.jpg',
}),






    new Product({
        name : 'iphone 11 proMax',
type : 'promax',

        color: 'grey',
        rom : '64GB',
count: 50,
        price : 1099  ,  
            image: '/images/img_iphone/img-buy-iphone11-pro/iphone11-pro.jpg',
}),

    new Product({
        name : 'iphone 11 proMax',
type : 'promax',

        color: 'grey',
        rom : '256GB',
count: 50,
        price : 1249  ,
            image: '/images/img_iphone/img-buy-iphone11-pro/iphone11-pro.jpg',
}),

    new Product({
        name : 'iphone 11 proMax',
type : 'promax',

        color: 'grey',
        rom : '512GB',
count: 50,
        price : 1449   ,
            image: '/images/img_iphone/img-buy-iphone11-pro/iphone11-pro.jpg',
}),

    new Product({
        name : 'iphone 11 proMax',
type : 'promax',

        color: 'Silver',
        rom : '64GB',
count: 50,
        price : 1099   , 
            image: '/images/img_iphone/img-buy-iphone11-pro/iphone11-pro.jpg',
}),

    new Product({
        name : 'iphone 11 proMax',
type : 'promax',

        color: 'Silver',
        rom : '256GB',
count: 50,
        price : 1249   ,
            image: '/images/img_iphone/img-buy-iphone11-pro/iphone11-pro.jpg',
}),

    new Product({
        name : 'iphone 11 proMax',
type : 'promax',

        color: 'Silver',
        rom : '512GB',
count: 50,
        price : 1449   ,
            image: '/images/img_iphone/img-buy-iphone11-pro/iphone11-pro.jpg',
}),

    new Product({
        name : 'iphone 11 proMax',
type : 'promax',

        color: 'green',
        rom : '64GB',
count: 50,
        price : 1099    ,
            image: '/images/img_iphone/img-buy-iphone11-pro/iphone11-pro.jpg',
}),

    new Product({
        name : 'iphone 11 proMax',
type : 'promax',

        color: 'green',
        rom : '256GB',
count: 50,
        price : 1249  ,
            image: '/images/img_iphone/img-buy-iphone11-pro/iphone11-pro.jpg',
}),

    new Product({
        name : 'iphone 11 proMax',
type : 'promax',

        color: 'green',
        rom : '512GB',
count: 50,
        price : 1449   ,
            image: '/images/img_iphone/img-buy-iphone11-pro/iphone11-pro.jpg',
}),

    new Product({
        name : 'iphone 11 proMax',
type : 'promax',

        color: 'gold',
        rom : '64GB',
count: 50,
        price : 1099 ,   
            image: '/images/img_iphone/img-buy-iphone11-pro/iphone11-pro.jpg',
}),

    new Product({
        name : 'iphone 11 proMax',
type : 'promax',

        color: 'gold',
        rom : '256GB',
count: 50,
        price : 1249    ,
            image: '/images/img_iphone/img-buy-iphone11-pro/iphone11-pro.jpg',
}),

    new Product({
        name : 'iphone 11 proMax',
type : 'promax',

        color: 'gold',
        rom : '512GB',
count: 50,
        price : 1449   ,
        image: '/images/img_iphone/img-buy-iphone11-pro/iphone11-pro.jpg',

    })

   
];


var done=0;
for (var i = 0; i<iPhone11pro.length; i++){
    iPhone11pro[i].save(function(err, result){
        done++;
        if (done === iPhone11pro.length){
            exit();
        }
    });
}

function exit(){
    mongoose.disconnect();
}

