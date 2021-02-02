var Product = require('../../models/ipad');

var mongoose = require('mongoose');
// const { exists } = require('../models/product');
mongoose.connect("mongodb+srv://18VP:Trung@123@cluster0.xar5c.mongodb.net/18VP?retryWrites=true&w=majority", {
    useUnifiedTopology: true,
    useNewUrlParser: true
});
var iPadPro = [
    new Product({
        name : 'ipad pro',
        inch: '11',
        color: 'grey',
        rom : '128GB',
count: 50,
        more : 'wifi',
        price : 799    ,
    image : '/images/img_ipad/img_buy-ipad-pro/ipad-pro.png'
}),
    new Product({
        name : 'ipad pro',
        inch: '11',
        color: 'grey',
        rom : '256GB',
count: 50,
        more : 'wifi',
        price : 899    ,
    image : '/images/img_ipad/img_buy-ipad-pro/ipad-pro.png'
}),
    new Product({
        name : 'ipad pro',
        inch: '11',
        color: 'grey',
        rom : '512GB',
count: 50,
        more : 'wifi',
        price : 1099    ,
    image : '/images/img_ipad/img_buy-ipad-pro/ipad-pro.png'
}),
    new Product({
        name : 'ipad pro',
        inch: '11',
        color: 'grey',
        rom : '1T',
        more : 'wifi',
        price : 1299    ,
    image : '/images/img_ipad/img_buy-ipad-pro/ipad-pro.png'
}),
    new Product({
        name : 'ipad pro',
        inch: '11',
        color: 'silver',
        rom : '128GB',
count: 50,
        more : 'wifi',
        price : 799   ,
    image : '/images/img_ipad/img_buy-ipad-pro/ipad-pro.png'
}),
    new Product({
        name : 'ipad pro',
        inch: '11',
        color: 'silver',
        rom : '256GB',
count: 50,
        more : 'wifi',
        price : 899   , 
    image : '/images/img_ipad/img_buy-ipad-pro/ipad-pro.png'
}),
    new Product({
        name : 'ipad pro',
        inch: '11',
        color: 'silver',
        rom : '512GB',
count: 50,
        more : 'wifi',
        price : 1099   , 
    image : '/images/img_ipad/img_buy-ipad-pro/ipad-pro.png'
}),
    new Product({
        name : 'ipad pro',
        inch: '11',
        color: 'silver',
        rom : '1T',
        more : 'wifi',
        price : 1299  ,  
    image : '/images/img_ipad/img_buy-ipad-pro/ipad-pro.png'
}),
    new Product({
        name : 'ipad pro',
        inch: '12.9',
        color: 'grey',
        rom : '128GB',
count: 50,
        more : 'wifi',
        price : 899 ,   
    image : '/images/img_ipad/img_buy-ipad-pro/ipad-pro.png'
}),
    new Product({
        name : 'ipad pro',
        inch: '12.9',
        color: 'grey',
        rom : '256GB',
count: 50,
        more : 'wifi',
        price : 999    ,
    image : '/images/img_ipad/img_buy-ipad-pro/ipad-pro.png'
}),
    new Product({
        name : 'ipad pro',
        inch: '12.9',
        color: 'grey',
        rom : '512GB',
count: 50,
        more : 'wifi',
        price : 1199    ,
    image : '/images/img_ipad/img_buy-ipad-pro/ipad-pro.png'
}),
    new Product({
        name : 'ipad pro',
        inch: '12.9',
        color: 'grey',
        rom : '1T',
        more : 'wifi',
        price : 1299    ,
    image : '/images/img_ipad/img_buy-ipad-pro/ipad-pro.png'
}),
    new Product({
        name : 'ipad pro',
        inch: '12.9',
        color: 'silver',
        rom : '128GB',
count: 50,
        more : 'wifi',
        price : 899   ,
    image : '/images/img_ipad/img_buy-ipad-pro/ipad-pro.png'
}),
    new Product({
        name : 'ipad pro',
        inch: '12.9',
        color: 'silver',
        rom : '256GB',
count: 50,
        more : 'wifi',
        price : 999    ,
    image : '/images/img_ipad/img_buy-ipad-pro/ipad-pro.png'
}),
    new Product({
        name : 'ipad pro',
        inch: '12.9',
        color: 'silver',
        rom : '512GB',
count: 50,
        more : 'wifi',
        price : 1199    ,
    image : '/images/img_ipad/img_buy-ipad-pro/ipad-pro.png'
}),
    new Product({
        name : 'ipad pro',
        inch: '12.9',
        color: 'silver',
        rom : '1T',
        more : 'wifi',
        price : 1299  ,  
    image : '/images/img_ipad/img_buy-ipad-pro/ipad-pro.png'
}),
    new Product({
        name : 'ipad pro',
        inch: '12.9',
        color: 'grey',
        rom : '128GB',
count: 50,
        more : 'wifi cellular',
        price : 949   , 
    image : '/images/img_ipad/img_buy-ipad-pro/ipad-pro.png'
}),
    new Product({
        name : 'ipad pro',
        inch: '12.9',
        color: 'grey',
        rom : '256GB',
count: 50,
        more : 'wifi cellular',
        price : 1049    ,
    image : '/images/img_ipad/img_buy-ipad-pro/ipad-pro.png'
}),
    new Product({
        name : 'ipad pro',
        inch: '12.9',
        color: 'grey',
        rom : '512GB',
count: 50,
        more : 'wifi cellular',
        price : 1249,    
    image : '/images/img_ipad/img_buy-ipad-pro/ipad-pro.png'
}),
    new Product({
        name : 'ipad pro',
        inch: '12.9',
        color: 'grey',
        rom : '1T',
        more : 'wifi cellular',
        price : 1299 ,   
    image : '/images/img_ipad/img_buy-ipad-pro/ipad-pro.png'
}),
    new Product({
        name : 'ipad pro',
        inch: '12.9',
        color: 'silver',
        rom : '128GB',
count: 50,
        more : 'wifi cellular',
        price : 949   ,
    image : '/images/img_ipad/img_buy-ipad-pro/ipad-pro.png'
}),
    new Product({
        name : 'ipad pro',
        inch: '12.9',
        color: 'silver',
        rom : '256GB',
count: 50,
        more : 'wifi cellular',
        price : 1049 ,   
    image : '/images/img_ipad/img_buy-ipad-pro/ipad-pro.png'
}),
    new Product({
        name : 'ipad pro',
        inch: '12.9',
        color: 'silver',
        rom : '512GB',
count: 50,
        more : 'wifi cellular',
        price : 1249 ,   
    image : '/images/img_ipad/img_buy-ipad-pro/ipad-pro.png'
}),
    new Product({
        name : 'ipad pro',
        inch: '12.9',
        color: 'silver',
        rom : '1T',
        more : 'wifi cellular',
        price : 1299  ,  
    image : '/images/img_ipad/img_buy-ipad-pro/ipad-pro.png'
}),

    new Product({
        name : 'ipad pro',
        inch: '11',
        color: 'grey',
        rom : '128GB',
count: 50,
        more : 'wifi cellular',
        price : 899    ,
    image : '/images/img_ipad/img_buy-ipad-pro/ipad-pro.png'
}),
    new Product({
        name : 'ipad pro',
        inch: '11',
        color: 'grey',
        rom : '256GB',
count: 50,
        more : 'wifi cellular',
        price : 999   , 
    image : '/images/img_ipad/img_buy-ipad-pro/ipad-pro.png'
}),
    new Product({
        name : 'ipad pro',
        inch: '11',
        color: 'grey',
        rom : '512GB',
count: 50,
        more : 'wifi cellular',
        price : 1149    ,
    image : '/images/img_ipad/img_buy-ipad-pro/ipad-pro.png'
}),
    new Product({
        name : 'ipad pro',
        inch: '11',
        color: 'grey',
        rom : '1T',
        more : 'wifi cellular',
        price : 1249   , 
    image : '/images/img_ipad/img_buy-ipad-pro/ipad-pro.png'
}),
    new Product({
        name : 'ipad pro',
        inch: '11',
        color: 'silver',
        rom : '128GB',
count: 50,
        more : 'wifi cellular',
        price : 899   ,
    image : '/images/img_ipad/img_buy-ipad-pro/ipad-pro.png'
}),
    new Product({
        name : 'ipad pro',
        inch: '11',
        color: 'silver',
        rom : '256GB',
count: 50,
        more : 'wifi cellular',
        price : 999   , 
    image : '/images/img_ipad/img_buy-ipad-pro/ipad-pro.png'
}),
    new Product({
        name : 'ipad pro',
        inch: '11',
        color: 'silver',
        rom : '512GB',
count: 50,
        more : 'wifi cellular',
        price : 1149 ,   
    image : '/images/img_ipad/img_buy-ipad-pro/ipad-pro.png'
}),
    new Product({
        name : 'ipad pro',
        inch: '11',
        color: 'silver',
        rom : '1T',
        more : 'wifi cellular',
        price : 1249    ,
    image : '/images/img_ipad/img_buy-ipad-pro/ipad-pro.png'
}),





 

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

