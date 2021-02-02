var Product = require('../../models/ipad');

var mongoose = require('mongoose');
// const { exists } = require('../models/product');
mongoose.connect("mongodb+srv://18VP:Trung@123@cluster0.xar5c.mongodb.net/18VP?retryWrites=true&w=majority", {
    useUnifiedTopology: true,
    useNewUrlParser: true
});
var iPadPro = [
    new Product({
        name : 'ipad air',
        color: 'grey',
        rom : '64GB',
count: 50,
        more : 'wifi',
        price : 499    ,
    image: '/images/img_ipad/img_buy-ipad-air/ipad-air.jpg'
}),

    new Product({
        name : 'ipad air',
        color: 'grey',
        rom : '256GB',
count: 50,
        more : 'wifi',
        price : 649    ,
    image: '/images/img_ipad/img_buy-ipad-air/ipad-air.jpg'
}),
    new Product({
        name : 'ipad air',
        color: 'silver',
        rom : '64GB',
count: 50,
        more : 'wifi',
        price : 499    ,
    image: '/images/img_ipad/img_buy-ipad-air/ipad-air.jpg'
}),
    new Product({
        name : 'ipad air',
        color: 'silver',
        rom : '256GB',
count: 50,
        more : 'wifi',
        price : 649   ,
    image: '/images/img_ipad/img_buy-ipad-air/ipad-air.jpg'
}),
    new Product({
        name : 'ipad air',
        color: 'gold',
        rom : '64GB',
count: 50,
        more : 'wifi',
        price : 499  ,  
    image: '/images/img_ipad/img_buy-ipad-air/ipad-air.jpg'
}),
    new Product({
        name : 'ipad air',
        color: 'gold',
        rom : '256GB',
count: 50,
        more : 'wifi',
        price : 649  ,  
    image: '/images/img_ipad/img_buy-ipad-air/ipad-air.jpg'
}),
  
    new Product({
        name : 'ipad air',
        color: 'grey',
        rom : '64GB',
count: 50,
        more : 'wifi cellular',
        price : 549   , 
    image: '/images/img_ipad/img_buy-ipad-air/ipad-air.jpg'
}),

    new Product({
        name : 'ipad air',
        color: 'grey',
        rom : '256GB',
count: 50,
        more : 'wifi cellular',
        price : 699  ,  
    image: '/images/img_ipad/img_buy-ipad-air/ipad-air.jpg'
}),
    new Product({
        name : 'ipad air',
        color: 'silver',
        rom : '64GB',
count: 50,
        more : 'wifi cellular',
        price : 549   , 
    image: '/images/img_ipad/img_buy-ipad-air/ipad-air.jpg'
}),
    new Product({
        name : 'ipad air',
        color: 'silver',
        rom : '256GB',
count: 50,
        more : 'wifi cellular',
        price : 699  , 
    image: '/images/img_ipad/img_buy-ipad-air/ipad-air.jpg'
}),
    new Product({
        name : 'ipad air',
        color: 'gold',
        rom : '64GB',
count: 50,
        more : 'wifi cellular',
        price : 549   , 
    image: '/images/img_ipad/img_buy-ipad-air/ipad-air.jpg'
}),
    new Product({
        name : 'ipad air',
        color: 'gold',
        rom : '256GB',
count: 50,
        more : 'wifi cellular',
        price : 699    ,
        image: '/images/img_ipad/img_buy-ipad-air/ipad-air.jpg'

    })
  


];


var done=0;
for (var i = 0; i<iPadPro.length; i++){
    iPadPro[i].save(function(err, result){
        done++;
        if (done === iPadPro.length){
            exit();
        }
    });
}

function exit(){
    mongoose.disconnect();
}

