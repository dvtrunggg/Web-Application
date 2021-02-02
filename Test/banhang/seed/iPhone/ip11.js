var Product = require('../../models/product');

var mongoose = require('mongoose');
// const { exists } = require('../models/product');
mongoose.connect("mongodb+srv://18VP:Trung@123@cluster0.xar5c.mongodb.net/18VP?retryWrites=true&w=majority", {
    useUnifiedTopology: true,
    useNewUrlParser: true
});
var iPhone11 = [
    new Product({
        name : 'iphone 11',

        color: 'white',
        rom : '64GB',
count: 100,
        price : 699   , 
            image: '/images/img_iphone/img-buy-iphone11/iphone11.jpg',
}),

    new Product({
        name : 'iphone 11',

        color: 'white',
        rom : '128GB',
count: 100,
        price : 749  ,  
            image: '/images/img_iphone/img-buy-iphone11/iphone11.jpg',
}),

    new Product({
        name : 'iphone 11',

        color: 'white',
        rom : '256GB',
count: 100,
        price : 849   ,
            image: '/images/img_iphone/img-buy-iphone11/iphone11.jpg',
}),

    new Product({
        name : 'iphone 11',

        color: 'black',
        rom : '64GB',
count: 100,
        price : 699    ,
            image: '/images/img_iphone/img-buy-iphone11/iphone11.jpg',
}),

    new Product({
        name : 'iphone 11',

        color: 'black',
        rom : '128GB',
count: 100,
        price : 749    ,
            image: '/images/img_iphone/img-buy-iphone11/iphone11.jpg',
}),

    new Product({
        name : 'iphone 11',

        color: 'black',
        rom : '256GB',
count: 100,
        price : 849   ,
            image: '/images/img_iphone/img-buy-iphone11/iphone11.jpg',
}),

    new Product({
        name : 'iphone 11',

        color: 'green',
        rom : '64GB',
count: 100,
        price : 699  ,  
            image: '/images/img_iphone/img-buy-iphone11/iphone11.jpg',
}),

    new Product({
        name : 'iphone 11',

        color: 'green',
        rom : '128GB',
count: 100,
        price : 749   , 
            image: '/images/img_iphone/img-buy-iphone11/iphone11.jpg',
}),

    new Product({
        name : 'iphone 11',

        color: 'green',
        rom : '256GB',
count: 100,
        price : 849   ,
            image: '/images/img_iphone/img-buy-iphone11/iphone11.jpg',
}),

    new Product({
        name : 'iphone 11',

        color: 'yellow',
        rom : '64GB',
count: 100,
        price : 699    ,
            image: '/images/img_iphone/img-buy-iphone11/iphone11.jpg',
}),

    new Product({
        name : 'iphone 11',

        color: 'yellow',
        rom : '128GB',
count: 100,
        price : 749    ,
            image: '/images/img_iphone/img-buy-iphone11/iphone11.jpg',
}),

    new Product({
        name : 'iphone 11',

        color: 'yellow',
        rom : '256GB',
count: 100,
        price : 849   ,
            image: '/images/img_iphone/img-buy-iphone11/iphone11.jpg',
}),

    new Product({
        name : 'iphone 11',

        color: 'purple',
        rom : '64GB',
count: 100,
        price : 699   , 
            image: '/images/img_iphone/img-buy-iphone11/iphone11.jpg',
}),

    new Product({
        name : 'iphone 11',

        color: 'purple',
        rom : '128GB',
count: 100,
        price : 749    ,
            image: '/images/img_iphone/img-buy-iphone11/iphone11.jpg',
}),

    new Product({
        name : 'iphone 11',

        color: 'purple',
        rom : '256GB',
count: 100,
        price : 849   ,
            image: '/images/img_iphone/img-buy-iphone11/iphone11.jpg',
}),

    new Product({
        name : 'iphone 11',

        color: 'red',
        rom : '64GB',
count: 100,
        price : 699   , 
            image: '/images/img_iphone/img-buy-iphone11/iphone11.jpg',
}),

    new Product({
        name : 'iphone 11',

        color: 'red',
        rom : '128GB',
count: 100,
        price : 749  ,  
            image: '/images/img_iphone/img-buy-iphone11/iphone11.jpg',
}),

    new Product({
        name : 'iphone 11',

        color: 'red',
        rom : '256GB',
count: 100,
        price : 849   ,
    })
];


var done=0;
for (var i = 0; i<iPhone11.length; i++){
    iPhone11[i].save(function(err, result){
        done++;
        if (done === iPhone11.length){
            exit();
        }
    });
}

function exit(){
    mongoose.disconnect();
}

