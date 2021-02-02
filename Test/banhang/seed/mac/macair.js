var Product = require('../../models/mac');

var mongoose = require('mongoose');
// const { exists } = require('../models/product');
mongoose.connect("mongodb+srv://18VP:Trung@123@cluster0.xar5c.mongodb.net/18VP?retryWrites=true&w=majority", {
    useUnifiedTopology: true,
    useNewUrlParser: true
});
var macair = [
    new Product({
        name : 'mac air 13',
        cpu: 'i3',
        color: 'grey',
        ram: '8GB',
        count: 50 , rom : '256GB',
        price : 899    ,
    image : '/images/img_mac/img-mac-air/macbook-air-space-gray.jpg'
}),
    new Product({
        name : 'mac air 13',
        cpu: 'i3',
        color: 'grey',
        ram: '8GB',
        count: 50 , rom : '512GB',
        price : 1099,    
    image : '/images/img_mac/img-mac-air/macbook-air-space-gray.jpg'
}),
    new Product({
        name : 'mac air 13',
        cpu: 'i3',
        color: 'grey',
        ram: '8GB',
        count: 50 , rom : '1T',
        price : 1259  ,
    image : '/images/img_mac/img-mac-air/macbook-air-space-gray.jpg'
}),
    new Product({
        name : 'mac air 13',
        cpu: 'i3',
        color: 'grey',
        ram: '8GB',
        count: 50 , rom : '2T',
        price : 1599 ,  
    image : '/images/img_mac/img-mac-air/macbook-air-space-gray.jpg'
}),
    new Product({
        name : 'mac air 13',
        cpu: 'i3',
        color: 'grey',
        ram: '16GB',
        count: 50 , rom : '256GB',
        price : 999  ,  
    image : '/images/img_mac/img-mac-air/macbook-air-space-gray.jpg'
}),
    new Product({
        name : 'mac air 13',
        cpu: 'i3',
        color: 'grey',
        ram: '16GB',
        count: 50 , rom : '512GB',
        price : 1199 ,   
    image : '/images/img_mac/img-mac-air/macbook-air-space-gray.jpg'
}),
    new Product({
        name : 'mac air 13',
        cpu: 'i3',
        color: 'grey',
        ram: '16GB',
        count: 50 , rom : '1T',
        price : 1359 , 
    image : '/images/img_mac/img-mac-air/macbook-air-space-gray.jpg'
}),
    new Product({
        name : 'mac air 13',
        cpu: 'i3',
        color: 'grey',
        ram: '16GB',
        count: 50 , rom : '2T',
        price : 1699  , 
    image : '/images/img_mac/img-mac-air/macbook-air-space-gray.jpg'
}),
    new Product({
        name : 'mac air 13',
        cpu: 'i5',
        color: 'grey',
        ram: '16GB',
        count: 50 , rom : '256GB',
        price : 1199  ,  
    image : '/images/img_mac/img-mac-air/macbook-air-space-gray.jpg'
}),
    new Product({
        name : 'mac air 13',
        cpu: 'i5',
        color: 'grey',
        ram: '16GB',
        count: 50 , rom : '512GB',
        price : 1299 ,   
    image : '/images/img_mac/img-mac-air/macbook-air-space-gray.jpg'
}),
    new Product({
        name : 'mac air 13',
        cpu: 'i5',
        color: 'grey',
        ram: '16GB',
        count: 50 , rom : '1T',
        price : 1599  ,
    image : '/images/img_mac/img-mac-air/macbook-air-space-gray.jpg'
}),
    new Product({
        name : 'mac air 13',
        cpu: 'i5',
        color: 'grey',
        ram: '16GB',
        count: 50 , rom : '2T',
        price : 1799  , 
    image : '/images/img_mac/img-mac-air/macbook-air-space-gray.jpg'
}),
    new Product({
        name : 'mac air 13',
        cpu: 'i7',
        color: 'grey',
        ram: '16GB',
        count: 50 , rom : '256GB',
        price : 1599 ,   
    image : '/images/img_mac/img-mac-air/macbook-air-space-gray.jpg'
}),
    new Product({
        name : 'mac air 13',
        cpu: 'i7',
        color: 'grey',
        ram: '16GB',
        count: 50 , rom : '512GB',
        price : 1899  ,  
    image : '/images/img_mac/img-mac-air/macbook-air-space-gray.jpg'
}),
    new Product({
        name : 'mac air 13',
        cpu: 'i7',
        color: 'grey',
        ram: '16GB',
        count: 50 , rom : '1T',
        price : 2199  ,
    image : '/images/img_mac/img-mac-air/macbook-air-space-gray.jpg'
}),
    new Product({
        name : 'mac air 13',
        cpu: 'i7',
        color: 'grey',
        ram: '16GB',
        count: 50 , rom : '2T',
        price : 2399 ,  
    image : '/images/img_mac/img-mac-air/macbook-air-space-gray.jpg'
}),

    new Product({
        name : 'mac air 13',
        cpu: 'i3',
        color: 'gold',
        ram: '8GB',
        count: 50 , rom : '256GB',
        price : 899  ,  
    image : '/images/img_mac/img-mac-air/macbook-air-space-gray.jpg'
}),
    new Product({
        name : 'mac air 13',
        cpu: 'i3',
        color: 'gold',
        ram: '8GB',
        count: 50 , rom : '512GB',
        price : 1099 ,   
    image : '/images/img_mac/img-mac-air/macbook-air-space-gray.jpg'
}),
    new Product({
        name : 'mac air 13',
        cpu: 'i3',
        color: 'gold',
        ram: '8GB',
        count: 50 , rom : '1T',
        price : 1259  ,
    image : '/images/img_mac/img-mac-air/macbook-air-space-gray.jpg'
}),
    new Product({
        name : 'mac air 13',
        cpu: 'i3',
        color: 'gold',
        ram: '8GB',
        count: 50 , rom : '2T',
        price : 1599 ,  
    image : '/images/img_mac/img-mac-air/macbook-air-space-gray.jpg'
}),
    new Product({
        name : 'mac air 13',
        cpu: 'i3',
        color: 'gold',
        ram: '16GB',
        count: 50 , rom : '256GB',
        price : 999 ,   
    image : '/images/img_mac/img-mac-air/macbook-air-space-gray.jpg'
}),
    new Product({
        name : 'mac air 13',
        cpu: 'i3',
        color: 'gold',
        ram: '16GB',
        count: 50 , rom : '512GB',
        price : 1199 ,   
    image : '/images/img_mac/img-mac-air/macbook-air-space-gray.jpg'
}),
    new Product({
        name : 'mac air 13',
        cpu: 'i3',
        color: 'gold',
        ram: '16GB',
        count: 50 , rom : '1T',
        price : 1359 , 
    image : '/images/img_mac/img-mac-air/macbook-air-space-gray.jpg'
}),
    new Product({
        name : 'mac air 13',
        cpu: 'i3',
        color: 'gold',
        ram: '16GB',
        count: 50 , rom : '2T',
        price : 1699  , 
    image : '/images/img_mac/img-mac-air/macbook-air-space-gray.jpg'
}),
    new Product({
        name : 'mac air 13',
        cpu: 'i5',
        color: 'gold',
        ram: '16GB',
        count: 50 , rom : '256GB',
        price : 1199 ,   
    image : '/images/img_mac/img-mac-air/macbook-air-space-gray.jpg'
}),
    new Product({
        name : 'mac air 13',
        cpu: 'i5',
        color: 'gold',
        ram: '16GB',
        count: 50 , rom : '512GB',
        price : 1299   , 
    image : '/images/img_mac/img-mac-air/macbook-air-space-gray.jpg'
}),
    new Product({
        name : 'mac air 13',
        cpu: 'i5',
        color: 'gold',
        ram: '16GB',
        count: 50 , rom : '1T',
        price : 1599 , 
    image : '/images/img_mac/img-mac-air/macbook-air-space-gray.jpg'
}),
    new Product({
        name : 'mac air 13',
        cpu: 'i5',
        color: 'gold',
        ram: '16GB',
        count: 50 , rom : '2T',
        price : 1799 ,  
    image : '/images/img_mac/img-mac-air/macbook-air-space-gray.jpg'
}),
    new Product({
        name : 'mac air 13',
        cpu: 'i7',
        color: 'gold',
        ram: '16GB',
        count: 50 , rom : '256GB',
        price : 1599,    
    image : '/images/img_mac/img-mac-air/macbook-air-space-gray.jpg'
}),
    new Product({
        name : 'mac air 13',
        cpu: 'i7',
        color: 'gold',
        ram: '16GB',
        count: 50 , rom : '512GB',
        price : 1899  ,  
    image : '/images/img_mac/img-mac-air/macbook-air-space-gray.jpg'
}),
    new Product({
        name : 'mac air 13',
        cpu: 'i7',
        color: 'gold',
        ram: '16GB',
        count: 50 , rom : '1T',
        price : 2199 , 
    image : '/images/img_mac/img-mac-air/macbook-air-space-gray.jpg'
}),
    new Product({
        name : 'mac air 13',
        cpu: 'i7',
        color: 'gold',
        ram: '16GB',
        count: 50 , rom : '2T',
        price : 2399  , 
    image : '/images/img_mac/img-mac-air/macbook-air-space-gray.jpg'
}),

    new Product({
        name : 'mac air 13',
        cpu: 'i3',
        color: 'silver',
        ram: '8GB',
        count: 50 , rom : '256GB',
        price : 899  ,  
    image : '/images/img_mac/img-mac-air/macbook-air-space-gray.jpg'
}),
    new Product({
        name : 'mac air 13',
        cpu: 'i3',
        color: 'silver',
        ram: '8GB',
        count: 50 , rom : '512GB',
        price : 1099 ,   
    image : '/images/img_mac/img-mac-air/macbook-air-space-gray.jpg'
}),
    new Product({
        name : 'mac air 13',
        cpu: 'i3',
        color: 'silver',
        ram: '8GB',
        count: 50 , rom : '1T',
        price : 1259  ,
    image : '/images/img_mac/img-mac-air/macbook-air-space-gray.jpg'
}),
    new Product({
        name : 'mac air 13',
        cpu: 'i3',
        color: 'silver',
        ram: '8GB',
        count: 50 , rom : '2T',
        price : 1599 ,  
    image : '/images/img_mac/img-mac-air/macbook-air-space-gray.jpg'
}),
    new Product({
        name : 'mac air 13',
        cpu: 'i3',
        color: 'silver',
        ram: '16GB',
        count: 50 , rom : '256GB',
        price : 999  ,  
    image : '/images/img_mac/img-mac-air/macbook-air-space-gray.jpg'
}),
    new Product({
        name : 'mac air 13',
        cpu: 'i3',
        color: 'silver',
        ram: '16GB',
        count: 50 , rom : '512GB',
        price : 1199 ,   
    image : '/images/img_mac/img-mac-air/macbook-air-space-gray.jpg'
}),
    new Product({
        name : 'mac air 13',
        cpu: 'i3',
        color: 'silver',
        ram: '16GB',
        count: 50 , rom : '1T',
        price : 1359 , 
    image : '/images/img_mac/img-mac-air/macbook-air-space-gray.jpg'
}),
    new Product({
        name : 'mac air 13',
        cpu: 'i3',
        color: 'silver',
        ram: '16GB',
        count: 50 , rom : '2T',
        price : 1699  , 
    image : '/images/img_mac/img-mac-air/macbook-air-space-gray.jpg'
}),
    new Product({
        name : 'mac air 13',
        cpu: 'i5',
        color: 'silver',
        ram: '16GB',
        count: 50 , rom : '256GB',
        price : 1199   , 
    image : '/images/img_mac/img-mac-air/macbook-air-space-gray.jpg'
}),
    new Product({
        name : 'mac air 13',
        cpu: 'i5',
        color: 'silver',
        ram: '16GB',
        count: 50 , rom : '512GB',
        price : 1299   , 
    image : '/images/img_mac/img-mac-air/macbook-air-space-gray.jpg'
}),
    new Product({
        name : 'mac air 13',
        cpu: 'i5',
        color: 'silver',
        ram: '16GB',
        count: 50 , rom : '1T',
        price : 1599  ,
    image : '/images/img_mac/img-mac-air/macbook-air-space-gray.jpg'
}),
    new Product({
        name : 'mac air 13',
        cpu: 'i5',
        color: 'silver',
        ram: '16GB',
        count: 50 , rom : '2T',
        price : 1799   ,
    image : '/images/img_mac/img-mac-air/macbook-air-space-gray.jpg'
}),
    new Product({
        name : 'mac air 13',
        cpu: 'i7',
        color: 'silver',
        ram: '16GB',
        count: 50 , rom : '256GB',
        price : 1599  ,  
    image : '/images/img_mac/img-mac-air/macbook-air-space-gray.jpg'
}),
    new Product({
        name : 'mac air 13',
        cpu: 'i7',
        color: 'silver',
        ram: '16GB',
        count: 50 , rom : '512GB',
        price : 1899  ,  
    image : '/images/img_mac/img-mac-air/macbook-air-space-gray.jpg'
}),
    new Product({
        name : 'mac air 13',
        cpu: 'i7',
        color: 'silver',
        ram: '16GB',
        count: 50 , rom : '1T',
        price : 2199  ,
    image : '/images/img_mac/img-mac-air/macbook-air-space-gray.jpg'
}),
    new Product({
        name : 'mac air 13',
        cpu: 'i7',
        color: 'silver',
        ram: '16GB',
        count: 50 , rom : '2T',
        price : 2399  , 
    image : '/images/img_mac/img-mac-air/macbook-air-space-gray.jpg'
}),




// ------------------------
new Product({
    name : 'mac air 13',
    cpu: 'i5',
    color: 'grey',
    ram: '8GB',
    count: 50 , rom : '1T',
    price : 1259  ,
image : '/images/img_mac/img-mac-air/macbook-air-space-gray.jpg'
}),

new Product({
    name : 'mac air 13',
    cpu: 'i7',
    color: 'grey',
    ram: '8GB',
    count: 50 , rom : '1T',
    price : 1259  ,
image : '/images/img_mac/img-mac-air/macbook-air-space-gray.jpg'
}),


 
];


var done=0;
for (var i = 0; i<macair.length; i++){
    macair[i].save(function(err, result){
        done++;
        if (done === macair.length){
            exit();
        }
    });
}

function exit(){
    mongoose.disconnect();
}

