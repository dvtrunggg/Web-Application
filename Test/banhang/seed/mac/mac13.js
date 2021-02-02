var Product = require('../../models/mac');

var mongoose = require('mongoose');
// const { exists } = require('../models/product');
mongoose.connect("mongodb+srv://18VP:Trung@123@cluster0.xar5c.mongodb.net/18VP?retryWrites=true&w=majority", {
    useUnifiedTopology: true,
    useNewUrlParser: true
});
var mac13 = [
    new Product({
        name : 'mac pro 13',
        cpu: 'i7',
        color: 'grey',
        ram: '8GB',
        count: 50 , rom : '256GB',
        price : 1500    ,
    image : '/images/img_mac/img-mac-pro13/macbook-pro-13-space-gray.jpg'
}),
    new Product({
        name : 'mac pro 13',
        cpu: 'i5',
        color: 'grey',
        ram: '8GB',
        count: 50 , rom : '512GB',
        price : 1800  ,  
    image : '/images/img_mac/img-mac-pro13/macbook-pro-13-space-gray.jpg'
}),

    new Product({
        name : 'mac pro 13',
        cpu: 'i5',
        color: 'grey',
        ram: '8GB',
        count: 50 , rom : '1T',
        price : 2100  ,  
    image : '/images/img_mac/img-mac-pro13/macbook-pro-13-space-gray.jpg'
}),

    new Product({
        name : 'mac pro 13',
        cpu: 'i5',
        color: 'grey',
        ram: '8GB',
        count: 50 , rom : '2T',
        price : 2500    ,
    image : '/images/img_mac/img-mac-pro13/macbook-pro-13-space-gray.jpg'
}),

    new Product({
        name : 'mac pro 13',
        cpu: 'i5',
        color: 'grey',
        ram: '16GB',
        count: 50 , rom : '256GB',
        price : 1700  ,  
    image : '/images/img_mac/img-mac-pro13/macbook-pro-13-space-gray.jpg'
}),

    new Product({
        name : 'mac pro 13',
        cpu: 'i5',
        color: 'grey',
        ram: '16GB',
        count: 50 , rom : '512GB',
        price : 2000   ,
    image : '/images/img_mac/img-mac-pro13/macbook-pro-13-space-gray.jpg'
}),

    new Product({
        name : 'mac pro 13',
        cpu: 'i5',
        color: 'grey',
        ram: '16GB',
        count: 50 , rom : '1T',
        price : 2300  ,  
    image : '/images/img_mac/img-mac-pro13/macbook-pro-13-space-gray.jpg'
}),

    new Product({
        name : 'mac pro 13',
        cpu: 'i5',
        color: 'grey',
        ram: '16GB',
        count: 50 , rom : '2T',
        price : 2700   , 
    image : '/images/img_mac/img-mac-pro13/macbook-pro-13-space-gray.jpg'
}),
    new Product({
        name : 'mac pro 13',
        cpu: 'i7',
        color: 'grey',
        ram: '16GB',
        count: 50 , rom : '256GB',
        price : 2100  ,  
    image : '/images/img_mac/img-mac-pro13/macbook-pro-13-space-gray.jpg'
}),

    new Product({
        name : 'mac pro 13',
        cpu: 'i7',
        color: 'grey',
        ram: '16GB',
        count: 50 , rom : '512GB',
        price : 2400 ,   
    image : '/images/img_mac/img-mac-pro13/macbook-pro-13-space-gray.jpg'
}),

    new Product({
        name : 'mac pro 13',
        cpu: 'i7',
        color: 'grey',
        ram: '16GB',
        count: 50 , rom : '1T',
        price : 2700 ,   
    image : '/images/img_mac/img-mac-pro13/macbook-pro-13-space-gray.jpg'
}),

    new Product({
        name : 'mac pro 13',
        cpu: 'i7',
        color: 'grey',
        ram: '16GB',
        count: 50 , rom : '2T',
        price : 3100  ,  
    image : '/images/img_mac/img-mac-pro13/macbook-pro-13-space-gray.jpg'
}),
    new Product({
        name : 'mac pro 13',
        cpu: 'i5',
        color: 'silver',
        ram: '8GB',
        count: 50 , rom : '256GB',
        price : 1500 ,   
    image : '/images/img_mac/img-mac-pro13/macbook-pro-13-space-gray.jpg'
}),

    new Product({
        name : 'mac pro 13',
        cpu: 'i5',
        color: 'silver',
        ram: '8GB',
        count: 50 , rom : '512GB',
        price : 1800 ,   
    image : '/images/img_mac/img-mac-pro13/macbook-pro-13-space-gray.jpg'
}),

    new Product({
        name : 'mac pro 13',
        cpu: 'i5',
        color: 'silver',
        ram: '8GB',
        count: 50 , rom : '1T',
        price : 2100    ,
    image : '/images/img_mac/img-mac-pro13/macbook-pro-13-space-gray.jpg'
}),

    new Product({
        name : 'mac pro 13',
        cpu: 'i5',
        color: 'silver',
        ram: '8GB',
        count: 50 , rom : '2T',
        price : 2500    ,
    image : '/images/img_mac/img-mac-pro13/macbook-pro-13-space-gray.jpg'
}),

    new Product({
        name : 'mac pro 13',
        cpu: 'i5',
        color: 'silver',
        ram: '16GB',
        count: 50 , rom : '256GB',
        price : 1700  ,  
    image : '/images/img_mac/img-mac-pro13/macbook-pro-13-space-gray.jpg'
}),

    new Product({
        name : 'mac pro 13',
        cpu: 'i5',
        color: 'silver',
        ram: '16GB',
        count: 50 , rom : '512GB',
        price : 2000 ,   
    image : '/images/img_mac/img-mac-pro13/macbook-pro-13-space-gray.jpg'
}),

    new Product({
        name : 'mac pro 13',
        cpu: 'i5',
        color: 'silver',
        ram: '16GB',
        count: 50 , rom : '1T',
        price : 2300  ,  
    image : '/images/img_mac/img-mac-pro13/macbook-pro-13-space-gray.jpg'
}),

    new Product({
        name : 'mac pro 13',
        cpu: 'i5',
        color: 'silver',
        ram: '16GB',
        count: 50 , rom : '2T',
        price : 2700  ,  
    image : '/images/img_mac/img-mac-pro13/macbook-pro-13-space-gray.jpg'
}),
    new Product({
        name : 'mac pro 13',
        cpu: 'i7',
        color: 'silver',
        ram: '16GB',
        count: 50 , rom : '256GB',
        price : 2100  ,  
    image : '/images/img_mac/img-mac-pro13/macbook-pro-13-space-gray.jpg'
}),

    new Product({
        name : 'mac pro 13',
        cpu: 'i7',
        color: 'silver',
        ram: '16GB',
        count: 50 , rom : '512GB',
        price : 2400  ,  
    image : '/images/img_mac/img-mac-pro13/macbook-pro-13-space-gray.jpg'
}),

    new Product({
        name : 'mac pro 13',
        cpu: 'i7',
        color: 'silver',
        ram: '16GB',
        count: 50 , rom : '1T',
        price : 2700,    
    image : '/images/img_mac/img-mac-pro13/macbook-pro-13-space-gray.jpg'
}),

    new Product({
        name : 'mac pro 13',
        cpu: 'i7',
        color: 'silver',
        ram: '16GB',
        count: 50 , rom : '2T',
        price : 3100   , 
        image : '/images/img_mac/img-mac-pro13/macbook-pro-13-space-gray.jpg'

    })



 
];


var done=0;
for (var i = 0; i<mac13.length; i++){
    mac13[i].save(function(err, result){
        done++;
        if (done === mac13.length){
            exit();
        }
    });
}

function exit(){
    mongoose.disconnect();
}

