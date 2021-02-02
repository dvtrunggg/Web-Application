var Product = require('../../models/mac');

var mongoose = require('mongoose');
// const { exists } = require('../models/product');
mongoose.connect("mongodb+srv://18VP:Trung@123@cluster0.xar5c.mongodb.net/18VP?retryWrites=true&w=majority", {
    useUnifiedTopology: true,
    useNewUrlParser: true
});
var macair = [


// ------------------------
new Product({
    name : 'mac pro 16',
    cpu: 'i7',
    color: 'grey',
    ram: '8GB',
    count: 50 , rom : '256GB',
  graphic : 'amd radeon pro 5500m with 4gb of gddr6 memory storage',

    price : 1700  ,  
image : '/images/img_mac/img-mac-pro16/macbook-pro-16-space-gray.jpg'
}),

new Product({
    name : 'mac pro 16',
    cpu: 'i7',
    color: 'grey',
    ram: '8GB',
    count: 50 , rom : '256GB',
  graphic : 'amd radeon pro 5500m with 8gb of gddr6 memory',

    price : 1700  ,  
image : '/images/img_mac/img-mac-pro16/macbook-pro-16-space-gray.jpg'
}),

new Product({
    name : 'mac pro 16',
    cpu: 'i7',
    color: 'grey',
    ram: '8GB',
    count: 50 , rom : '256GB',
  graphic : 'amd radeon pro 5600m with 8gb of hbm2 memory',

    price : 1700  ,  
image : '/images/img_mac/img-mac-pro16/macbook-pro-16-space-gray.jpg'
}),


new Product({
    name : 'mac pro 16',
    cpu: 'i7',
    color: 'silver',
    ram: '8GB',
    count: 50 , rom : '256GB',
  graphic : 'amd radeon pro 5500m with 4gb of gddr6 memory storage',

    price : 1700  ,  
image : '/images/img_mac/img-mac-pro16/macbook-pro-16-space-gray.jpg'
}),

new Product({
    name : 'mac pro 16',
    cpu: 'i7',
    color: 'silver',
    ram: '8GB',
    count: 50 , rom : '256GB',
  graphic : 'amd radeon pro 5500m with 8gb of gddr6 memory',

    price : 1700  ,  
image : '/images/img_mac/img-mac-pro16/macbook-pro-16-space-gray.jpg'
}),

new Product({
    name : 'mac pro 16',
    cpu: 'i7',
    color: 'silver',
    ram: '8GB',
    count: 50 , rom : '256GB',
  graphic : 'amd radeon pro 5600m with 8gb of hbm2 memory',

    price : 1700  ,  
image : '/images/img_mac/img-mac-pro16/macbook-pro-16-space-gray.jpg'
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

