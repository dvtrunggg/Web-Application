var Product = require('../../models/product');

var mongoose = require('mongoose');
// const { exists } = require('../models/product');
mongoose.connect("mongodb+srv://18VP:Trung@123@cluster0.xar5c.mongodb.net/18VP?retryWrites=true&w=majority", {
    useUnifiedTopology: true,
    useNewUrlParser: true
});
var iPhoneXR = [
    new Product({
        name : 'iphone xr',

        color: 'white',
        rom : '64GB',
count: 50,
        price : 599  ,  
            image: '/images/img_iphone/img-buy-iphone-xr/iphone-xr.jpg',
}),

    new Product({
        name : 'iphone xr',

        color: 'white',
        rom : '128GB',
count: 50,
        price : 649 ,   
            image: '/images/img_iphone/img-buy-iphone-xr/iphone-xr.jpg',
}),


    new Product({
        name : 'iphone xr',

        color: 'black',
        rom : '64GB',
count: 50,
        price : 599  ,  
            image: '/images/img_iphone/img-buy-iphone-xr/iphone-xr.jpg',
}),

    new Product({
        name : 'iphone xr',

        color: 'black',
        rom : '128GB',
count: 50,
        price : 649  ,  
            image: '/images/img_iphone/img-buy-iphone-xr/iphone-xr.jpg',
}),


    new Product({
        name : 'iphone xr',

        color: 'blue',
        rom : '64GB',
count: 50,
        price : 599   , 
            image: '/images/img_iphone/img-buy-iphone-xr/iphone-xr.jpg',
}),

    new Product({
        name : 'iphone xr',

        color: 'blue',
        rom : '128GB',
count: 50,
        price : 649   , 
            image: '/images/img_iphone/img-buy-iphone-xr/iphone-xr.jpg',
}),


    new Product({
        name : 'iphone xr',

        color: 'yellow',
        rom : '64GB',
count: 50,
        price : 599 ,   
            image: '/images/img_iphone/img-buy-iphone-xr/iphone-xr.jpg',
}),

    new Product({
        name : 'iphone xr',

        color: 'yellow',
        rom : '128GB',
count: 50,
        price : 649 ,   
            image: '/images/img_iphone/img-buy-iphone-xr/iphone-xr.jpg',
}),


    new Product({
        name : 'iphone xr',

        color: 'coral',
        rom : '64GB',
count: 50,
        price : 599  ,  
            image: '/images/img_iphone/img-buy-iphone-xr/iphone-xr.jpg',
}),

    new Product({
        name : 'iphone xr',

        color: 'coral',
        rom : '128GB',
count: 50,
        price : 649  ,  
            image: '/images/img_iphone/img-buy-iphone-xr/iphone-xr.jpg',
}),

    new Product({
        name : 'iphone xr',

        color: 'red',
        rom : '64GB',
count: 50,
        price : 599  ,  
            image: '/images/img_iphone/img-buy-iphone-xr/iphone-xr.jpg',
}),

    new Product({
        name : 'iphone xr',

        color: 'red',
        rom : '128GB',
count: 50,
        price : 649 ,   
            image: '/images/img_iphone/img-buy-iphone-xr/iphone-xr.jpg',
}),

];


var done=0;
for (var i = 0; i<iPhoneXR.length; i++){
    iPhoneXR[i].save(function(err, result){
        done++;
        if (done === iPhoneXR.length){
            exit();
        }
    });
}

function exit(){
    mongoose.disconnect();
}

