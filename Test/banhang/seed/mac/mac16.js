var Product = require('../../models/mac');

var mongoose = require('mongoose');
// const { exists } = require('../models/product');
mongoose.connect("mongodb+srv://18VP:Trung@123@cluster0.xar5c.mongodb.net/18VP?retryWrites=true&w=majority", {
    useUnifiedTopology: true,
    useNewUrlParser: true
});
var mac16 = [
    new Product({
        name : 'mac pro 16',
        cpu: 'i9',
        color: 'grey',
        ram: '8GB',
        count: 50 , rom : '512GB',
	  graphic : 'amd radeon pro 5300m with 4gb of gddr6 memory',
        price : 1800    ,
    image : '/images/img_mac/img-mac-pro16/macbook-pro-16-space-gray.jpg'
}),

    new Product({
        name : 'mac pro 16',
        cpu: 'i9',
        color: 'grey',
        ram: '8GB',
        count: 50 , rom : '1T',
	  graphic : 'amd radeon pro 5300m with 4gb of gddr6 memory',

        price : 2100  ,  
    image : '/images/img_mac/img-mac-pro16/macbook-pro-16-space-gray.jpg'
}),

    new Product({
        name : 'mac pro 16',
        cpu: 'i9',
        color: 'grey',
        ram: '8GB',
        count: 50 , rom : '2T',
	  graphic : 'amd radeon pro 5300m with 4gb of gddr6 memory',

        price : 2500  ,  
    image : '/images/img_mac/img-mac-pro16/macbook-pro-16-space-gray.jpg'
}),

    new Product({
        name : 'mac pro 16',
        cpu: 'i9',
        color: 'grey',
        ram: '16GB',
        count: 50 , rom : '256GB',
	  graphic : 'amd radeon pro 5300m with 4gb of gddr6 memory',

        price : 1700  ,  
    image : '/images/img_mac/img-mac-pro16/macbook-pro-16-space-gray.jpg'
}),

    new Product({
        name : 'mac pro 16',
        cpu: 'i9',
        color: 'grey',
        ram: '16GB',
        count: 50 , rom : '512GB',
	  graphic : 'amd radeon pro 5300m with 4gb of gddr6 memory',

        price : 2000  ,  
    image : '/images/img_mac/img-mac-pro16/macbook-pro-16-space-gray.jpg'
}),

    new Product({
        name : 'mac pro 16',
        cpu: 'i9',
        color: 'grey',
        ram: '16GB',
        count: 50 , rom : '1T',
	  graphic : 'amd radeon pro 5300m with 4gb of gddr6 memory',

        price : 2300  ,  
    image : '/images/img_mac/img-mac-pro16/macbook-pro-16-space-gray.jpg'
}),

    new Product({
        name : 'mac pro 16',
        cpu: 'i9',
        color: 'grey',
        ram: '16GB',
        count: 50 , rom : '2T',
	  graphic : 'amd radeon pro 5300m with 4gb of gddr6 memory',

        price : 2700    ,
    image : '/images/img_mac/img-mac-pro16/macbook-pro-16-space-gray.jpg'
}),
    new Product({
        name : 'mac pro 16',
        cpu: 'i7',
        color: 'grey',
        ram: '16GB',
        count: 50 , rom : '256GB',
	  graphic : 'amd radeon pro 5300m with 4gb of gddr6 memory',

        price : 2100    ,
    image : '/images/img_mac/img-mac-pro16/macbook-pro-16-space-gray.jpg'
}),

    new Product({
        name : 'mac pro 16',
        cpu: 'i7',
        color: 'grey',
        ram: '16GB',
        count: 50 , rom : '512GB',
	  graphic : 'amd radeon pro 5300m with 4gb of gddr6 memory',

        price : 2400  ,  
    image : '/images/img_mac/img-mac-pro16/macbook-pro-16-space-gray.jpg'
}),

    new Product({
        name : 'mac pro 16',
        cpu: 'i7',
        color: 'grey',
        ram: '16GB',
        count: 50 , rom : '1T',
	  graphic : 'amd radeon pro 5300m with 4gb of gddr6 memory',

        price : 2700 ,   
    image : '/images/img_mac/img-mac-pro16/macbook-pro-16-space-gray.jpg'
}),

    new Product({
        name : 'mac pro 16',
        cpu: 'i7',
        color: 'grey',
        ram: '16GB',
        count: 50 , rom : '2T',
	  graphic : 'amd radeon pro 5300m with 4gb of gddr6 memory',

        price : 3100 ,   
    image : '/images/img_mac/img-mac-pro16/macbook-pro-16-space-gray.jpg'
}),
    new Product({
        name : 'mac pro 16',
        cpu: 'i9',
        color: 'silver',
        ram: '8GB',
        count: 50 , rom : '256GB',
	  graphic : 'amd radeon pro 5300m with 4gb of gddr6 memory',

        price : 1500   , 
    image : '/images/img_mac/img-mac-pro16/macbook-pro-16-space-gray.jpg'
}),

    new Product({
        name : 'mac pro 16',
        cpu: 'i9',
        color: 'silver',
        ram: '8GB',
        count: 50 , rom : '512GB',
	  graphic : 'amd radeon pro 5300m with 4gb of gddr6 memory',

        price : 1800  ,  
    image : '/images/img_mac/img-mac-pro16/macbook-pro-16-space-gray.jpg'
}),

    new Product({
        name : 'mac pro 16',
        cpu: 'i9',
        color: 'silver',
        ram: '8GB',
        count: 50 , rom : '1T',
	  graphic : 'amd radeon pro 5300m with 4gb of gddr6 memory',

        price : 2100  ,  
    image : '/images/img_mac/img-mac-pro16/macbook-pro-16-space-gray.jpg'
}),

    new Product({
        name : 'mac pro 16',
        cpu: 'i9',
        color: 'silver',
        ram: '8GB',
        count: 50 , rom : '2T',
	  graphic : 'amd radeon pro 5300m with 4gb of gddr6 memory',

        price : 2500 ,   
    image : '/images/img_mac/img-mac-pro16/macbook-pro-16-space-gray.jpg',
}),

    new Product({
        name : 'mac pro 16',
        cpu: 'i9',
        color: 'silver',
        ram: '16GB',
        count: 50 , rom : '256GB',
	  graphic : 'amd radeon pro 5300m with 4gb of gddr6 memory',

        price : 1700,
    image : '/images/img_mac/img-mac-pro16/macbook-pro-16-space-gray.jpg'
}),

    new Product({
        name : 'mac pro 16',
        cpu: 'i9',
        color: 'silver',
        ram: '16GB',
        count: 50 , rom : '512GB',
	  graphic : 'amd radeon pro 5300m with 4gb of gddr6 memory',

        price : 2000  ,  
    image : '/images/img_mac/img-mac-pro16/macbook-pro-16-space-gray.jpg'
}),

    new Product({
        name : 'mac pro 16',
        cpu: 'i9',
        color: 'silver',
        ram: '16GB',
        count: 50 , rom : '1T',
	  graphic : 'amd radeon pro 5300m with 4gb of gddr6 memory',

        price : 2300  ,  
    image : '/images/img_mac/img-mac-pro16/macbook-pro-16-space-gray.jpg'
}),

    new Product({
        name : 'mac pro 16',
        cpu: 'i9',
        color: 'silver',
        ram: '16GB',
        count: 50 , rom : '2T',
	  graphic : 'amd radeon pro 5300m with 4gb of gddr6 memory',

        price : 2700    ,
    image : '/images/img_mac/img-mac-pro16/macbook-pro-16-space-gray.jpg'
}),
    new Product({
        name : 'mac pro 16',
        cpu: 'i7',
        color: 'silver',
        ram: '16GB',
        count: 50 , rom : '256GB',
	  graphic : 'amd radeon pro 5300m with 4gb of gddr6 memory',

        price : 2100  ,  
    image : '/images/img_mac/img-mac-pro16/macbook-pro-16-space-gray.jpg'
}),

    new Product({
        name : 'mac pro 16',
        cpu: 'i7',
        color: 'silver',
        ram: '16GB',
        count: 50 , rom : '512GB',
	  graphic : 'amd radeon pro 5300m with 4gb of gddr6 memory',

        price : 2400  ,  
    image : '/images/img_mac/img-mac-pro16/macbook-pro-16-space-gray.jpg'
}),

    new Product({
        name : 'mac pro 16',
        cpu: 'i7',
        color: 'silver',
        ram: '16GB',
        count: 50 , rom : '1T',
	  graphic : 'amd radeon pro 5300m with 4gb of gddr6 memory',

        price : 2700 ,   
    image : '/images/img_mac/img-mac-pro16/macbook-pro-16-space-gray.jpg'
}),

    new Product({
        name : 'mac pro 16',
        cpu: 'i7',
        color: 'silver',
        ram: '16GB',
        count: 50 , rom : '2T',
	  graphic : 'amd radeon pro 5300m with 4gb of gddr6 memory',

        price : 3100  ,  
    image : '/images/img_mac/img-mac-pro16/macbook-pro-16-space-gray.jpg'
}),
    new Product({
        name : 'mac pro 16',
        cpu: 'i9',
        color: 'grey',
        ram: '8GB',
        count: 50 , rom : '512GB',
      graphic : 'amd radeon pro 5500m with 4gb of gddr6 memory storage',
        price : 1800  ,  
    image : '/images/img_mac/img-mac-pro16/macbook-pro-16-space-gray.jpg'
}),

    new Product({
        name : 'mac pro 16',
        cpu: 'i9',
        color: 'grey',
        ram: '8GB',
        count: 50 , rom : '1T',
      graphic : 'amd radeon pro 5500m with 4gb of gddr6 memory storage',

        price : 2100 ,   
    image : '/images/img_mac/img-mac-pro16/macbook-pro-16-space-gray.jpg'
}),

    new Product({
        name : 'mac pro 16',
        cpu: 'i9',
        color: 'grey',
        ram: '8GB',
        count: 50 , rom : '2T',
      graphic : 'amd radeon pro 5500m with 4gb of gddr6 memory storage',

        price : 2500  ,  
    image : '/images/img_mac/img-mac-pro16/macbook-pro-16-space-gray.jpg'
}),

    new Product({
        name : 'mac pro 16',
        cpu: 'i9',
        color: 'grey',
        ram: '16GB',
        count: 50 , rom : '256GB',
      graphic : 'amd radeon pro 5500m with 4gb of gddr6 memory storage',

        price : 1700  ,  
    image : '/images/img_mac/img-mac-pro16/macbook-pro-16-space-gray.jpg'
}),

    new Product({
        name : 'mac pro 16',
        cpu: 'i9',
        color: 'grey',
        ram: '16GB',
        count: 50 , rom : '512GB',
      graphic : 'amd radeon pro 5500m with 4gb of gddr6 memory storage',

        price : 2000  ,  
    image : '/images/img_mac/img-mac-pro16/macbook-pro-16-space-gray.jpg'
}),

    new Product({
        name : 'mac pro 16',
        cpu: 'i9',
        color: 'grey',
        ram: '16GB',
        count: 50 , rom : '1T',
      graphic : 'amd radeon pro 5500m with 4gb of gddr6 memory storage',

        price : 2300   , 
    image : '/images/img_mac/img-mac-pro16/macbook-pro-16-space-gray.jpg'
}),

    new Product({
        name : 'mac pro 16',
        cpu: 'i9',
        color: 'grey',
        ram: '16GB',
        count: 50 , rom : '2T',
      graphic : 'amd radeon pro 5500m with 4gb of gddr6 memory storage',

        price : 2700    ,
    image : '/images/img_mac/img-mac-pro16/macbook-pro-16-space-gray.jpg'
}),
    new Product({
        name : 'mac pro 16',
        cpu: 'i7',
        color: 'grey',
        ram: '16GB',
        count: 50 , rom : '256GB',
      graphic : 'amd radeon pro 5500m with 4gb of gddr6 memory storage',

        price : 2100   , 
    image : '/images/img_mac/img-mac-pro16/macbook-pro-16-space-gray.jpg'
}),

    new Product({
        name : 'mac pro 16',
        cpu: 'i7',
        color: 'grey',
        ram: '16GB',
        count: 50 , rom : '512GB',
      graphic : 'amd radeon pro 5500m with 4gb of gddr6 memory storage',

        price : 2400  ,  
    image : '/images/img_mac/img-mac-pro16/macbook-pro-16-space-gray.jpg'
}),

    new Product({
        name : 'mac pro 16',
        cpu: 'i7',
        color: 'grey',
        ram: '16GB',
        count: 50 , rom : '1T',
      graphic : 'amd radeon pro 5500m with 4gb of gddr6 memory storage',

        price : 2700 ,   
    image : '/images/img_mac/img-mac-pro16/macbook-pro-16-space-gray.jpg'
}),

    new Product({
        name : 'mac pro 16',
        cpu: 'i7',
        color: 'grey',
        ram: '16GB',
        count: 50 , rom : '2T',
      graphic : 'amd radeon pro 5500m with 4gb of gddr6 memory storage',

        price : 3100  ,  
    image : '/images/img_mac/img-mac-pro16/macbook-pro-16-space-gray.jpg'
}),
    new Product({
        name : 'mac pro 16',
        cpu: 'i9',
        color: 'silver',
        ram: '8GB',
        count: 50 , rom : '256GB',
      graphic : 'amd radeon pro 5500m with 4gb of gddr6 memory storage',

        price : 1500  ,  
    image : '/images/img_mac/img-mac-pro16/macbook-pro-16-space-gray.jpg'
}),

    new Product({
        name : 'mac pro 16',
        cpu: 'i9',
        color: 'silver',
        ram: '8GB',
        count: 50 , rom : '512GB',
      graphic : 'amd radeon pro 5500m with 4gb of gddr6 memory storage',

        price : 1800  ,  
    image : '/images/img_mac/img-mac-pro16/macbook-pro-16-space-gray.jpg'
}),

    new Product({
        name : 'mac pro 16',
        cpu: 'i9',
        color: 'silver',
        ram: '8GB',
        count: 50 , rom : '1T',
      graphic : 'amd radeon pro 5500m with 4gb of gddr6 memory storage',

        price : 2100  ,  
    image : '/images/img_mac/img-mac-pro16/macbook-pro-16-space-gray.jpg'
}),

    new Product({
        name : 'mac pro 16',
        cpu: 'i9',
        color: 'silver',
        ram: '8GB',
        count: 50 , rom : '2T',
      graphic : 'amd radeon pro 5500m with 4gb of gddr6 memory storage',

        price : 2500  ,  
    image : '/images/img_mac/img-mac-pro16/macbook-pro-16-space-gray.jpg'
}),

    new Product({
        name : 'mac pro 16',
        cpu: 'i9',
        color: 'silver',
        ram: '16GB',
        count: 50 , rom : '256GB',
      graphic : 'amd radeon pro 5500m with 4gb of gddr6 memory storage',

        price : 1700 ,   
    image : '/images/img_mac/img-mac-pro16/macbook-pro-16-space-gray.jpg'
}),

    new Product({
        name : 'mac pro 16',
        cpu: 'i9',
        color: 'silver',
        ram: '16GB',
        count: 50 , rom : '512GB',
      graphic : 'amd radeon pro 5500m with 4gb of gddr6 memory storage',

        price : 2000  ,  
    image : '/images/img_mac/img-mac-pro16/macbook-pro-16-space-gray.jpg'
}),

    new Product({
        name : 'mac pro 16',
        cpu: 'i9',
        color: 'silver',
        ram: '16GB',
        count: 50 , rom : '1T',
      graphic : 'amd radeon pro 5500m with 4gb of gddr6 memory storage',

        price : 2300 ,   
    image : '/images/img_mac/img-mac-pro16/macbook-pro-16-space-gray.jpg'
}),

    new Product({
        name : 'mac pro 16',
        cpu: 'i9',
        color: 'silver',
        ram: '16GB',
        count: 50 , rom : '2T',
      graphic : 'amd radeon pro 5500m with 4gb of gddr6 memory storage',

        price : 2700  ,  
    image : '/images/img_mac/img-mac-pro16/macbook-pro-16-space-gray.jpg'
}),
    new Product({
        name : 'mac pro 16',
        cpu: 'i7',
        color: 'silver',
        ram: '16GB',
        count: 50 , rom : '256GB',
      graphic : 'amd radeon pro 5500m with 4gb of gddr6 memory storage',

        price : 2100    ,
    image : '/images/img_mac/img-mac-pro16/macbook-pro-16-space-gray.jpg'
}),

    new Product({
        name : 'mac pro 16',
        cpu: 'i7',
        color: 'silver',
        ram: '16GB',
        count: 50 , rom : '512GB',
      graphic : 'amd radeon pro 5500m with 4gb of gddr6 memory storage',

        price : 2400   , 
    image : '/images/img_mac/img-mac-pro16/macbook-pro-16-space-gray.jpg'
}),

    new Product({
        name : 'mac pro 16',
        cpu: 'i7',
        color: 'silver',
        ram: '16GB',
        count: 50 , rom : '1T',
      graphic : 'amd radeon pro 5500m with 4gb of gddr6 memory storage',

        price : 2700    ,
    image : '/images/img_mac/img-mac-pro16/macbook-pro-16-space-gray.jpg'
}),

    new Product({
        name : 'mac pro 16',
        cpu: 'i7',
        color: 'silver',
        ram: '16GB',
        count: 50 , rom : '2T',
      graphic : 'amd radeon pro 5500m with 4gb of gddr6 memory storage',

        price : 3100   , 
    image : '/images/img_mac/img-mac-pro16/macbook-pro-16-space-gray.jpg'
}),
    new Product({
        name : 'mac pro 16',
        cpu: 'i9',
        color: 'grey',
        ram: '8GB',
        count: 50 , rom : '512GB',
      graphic : 'amd radeon pro 5500m with 8gb of gddr6 memory',
        price : 2100  ,  
    image : '/images/img_mac/img-mac-pro16/macbook-pro-16-space-gray.jpg'
}),

    new Product({
        name : 'mac pro 16',
        cpu: 'i9',
        color: 'grey',
        ram: '8GB',
        count: 50 , rom : '1T',
      graphic : 'amd radeon pro 5500m with 8gb of gddr6 memory',

        price : 2500 ,  
    image : '/images/img_mac/img-mac-pro16/macbook-pro-16-space-gray.jpg'
}),

    new Product({
        name : 'mac pro 16',
        cpu: 'i9',
        color: 'grey',
        ram: '8GB',
        count: 50 , rom : '2T',
      graphic : 'amd radeon pro 5500m with 8gb of gddr6 memory',

        price : 2500  ,  
    image : '/images/img_mac/img-mac-pro16/macbook-pro-16-space-gray.jpg'
}),

    new Product({
        name : 'mac pro 16',
        cpu: 'i9',
        color: 'grey',
        ram: '16GB',
        count: 50 , rom : '256GB',
      graphic : 'amd radeon pro 5500m with 8gb of gddr6 memory',

        price : 2200   , 
    image : '/images/img_mac/img-mac-pro16/macbook-pro-16-space-gray.jpg'
}),

    new Product({
        name : 'mac pro 16',
        cpu: 'i9',
        color: 'grey',
        ram: '16GB',
        count: 50 , rom : '512GB',
      graphic : 'amd radeon pro 5500m with 8gb of gddr6 memory',

        price : 2000 ,   
    image : '/images/img_mac/img-mac-pro16/macbook-pro-16-space-gray.jpg'
}),

    new Product({
        name : 'mac pro 16',
        cpu: 'i9',
        color: 'grey',
        ram: '16GB',
        count: 50 , rom : '1T',
      graphic : 'amd radeon pro 5500m with 8gb of gddr6 memory',

        price : 2300  ,  
    image : '/images/img_mac/img-mac-pro16/macbook-pro-16-space-gray.jpg'
}),

    new Product({
        name : 'mac pro 16',
        cpu: 'i9',
        color: 'grey',
        ram: '16GB',
        count: 50 , rom : '2T',
      graphic : 'amd radeon pro 5500m with 8gb of gddr6 memory',

        price : 3100  , 
    image : '/images/img_mac/img-mac-pro16/macbook-pro-16-space-gray.jpg'
}),
    new Product({
        name : 'mac pro 16',
        cpu: 'i7',
        color: 'grey',
        ram: '16GB',
        count: 50 , rom : '256GB',
      graphic : 'amd radeon pro 5500m with 8gb of gddr6 memory',

        price : 2500   ,
    image : '/images/img_mac/img-mac-pro16/macbook-pro-16-space-gray.jpg'
}),

    new Product({
        name : 'mac pro 16',
        cpu: 'i7',
        color: 'grey',
        ram: '16GB',
        count: 50 , rom : '512GB',
      graphic : 'amd radeon pro 5500m with 8gb of gddr6 memory',

        price : 2800   , 
    image : '/images/img_mac/img-mac-pro16/macbook-pro-16-space-gray.jpg'
}),

    new Product({
        name : 'mac pro 16',
        cpu: 'i7',
        color: 'grey',
        ram: '16GB',
        count: 50 , rom : '1T',
      graphic : 'amd radeon pro 5500m with 8gb of gddr6 memory',

        price : 3100   ,
    image : '/images/img_mac/img-mac-pro16/macbook-pro-16-space-gray.jpg'
}),

    new Product({
        name : 'mac pro 16',
        cpu: 'i7',
        color: 'grey',
        ram: '16GB',
        count: 50 , rom : '2T',
      graphic : 'amd radeon pro 5500m with 8gb of gddr6 memory',

        price : 3100    ,
    image : '/images/img_mac/img-mac-pro16/macbook-pro-16-space-gray.jpg'
}),
    new Product({
        name : 'mac pro 16',
        cpu: 'i9',
        color: 'silver',
        ram: '8GB',
        count: 50 , rom : '256GB',
      graphic : 'amd radeon pro 5500m with 8gb of gddr6 memory',

        price : 1500    ,
    image : '/images/img_mac/img-mac-pro16/macbook-pro-16-space-gray.jpg'
}),

    new Product({
        name : 'mac pro 16',
        cpu: 'i9',
        color: 'silver',
        ram: '8GB',
        count: 50 , rom : '512GB',
      graphic : 'amd radeon pro 5500m with 8gb of gddr6 memory',

        price : 2100  ,  
    image : '/images/img_mac/img-mac-pro16/macbook-pro-16-space-gray.jpg'
}),

    new Product({
        name : 'mac pro 16',
        cpu: 'i9',
        color: 'silver',
        ram: '8GB',
        count: 50 , rom : '1T',
      graphic : 'amd radeon pro 5500m with 8gb of gddr6 memory',

        price : 2500   ,
    image : '/images/img_mac/img-mac-pro16/macbook-pro-16-space-gray.jpg'
}),

    new Product({
        name : 'mac pro 16',
        cpu: 'i9',
        color: 'silver',
        ram: '8GB',
        count: 50 , rom : '2T',
      graphic : 'amd radeon pro 5500m with 8gb of gddr6 memory',

        price : 2500    ,
    image : '/images/img_mac/img-mac-pro16/macbook-pro-16-space-gray.jpg'
}),

    new Product({
        name : 'mac pro 16',
        cpu: 'i9',
        color: 'silver',
        ram: '16GB',
        count: 50 , rom : '256GB',
      graphic : 'amd radeon pro 5500m with 8gb of gddr6 memory',

        price : 2200   , 
    image : '/images/img_mac/img-mac-pro16/macbook-pro-16-space-gray.jpg'
}),

    new Product({
        name : 'mac pro 16',
        cpu: 'i9',
        color: 'silver',
        ram: '16GB',
        count: 50 , rom : '512GB',
      graphic : 'amd radeon pro 5500m with 8gb of gddr6 memory',

        price : 2000 ,   
    image : '/images/img_mac/img-mac-pro16/macbook-pro-16-space-gray.jpg'
}),

    new Product({
        name : 'mac pro 16',
        cpu: 'i9',
        color: 'silver',
        ram: '16GB',
        count: 50 , rom : '1T',
      graphic : 'amd radeon pro 5500m with 8gb of gddr6 memory',

        price : 2300  ,  
    image : '/images/img_mac/img-mac-pro16/macbook-pro-16-space-gray.jpg'
}),

    new Product({
        name : 'mac pro 16',
        cpu: 'i9',
        color: 'silver',
        ram: '16GB',
        count: 50 , rom : '2T',
      graphic : 'amd radeon pro 5500m with 8gb of gddr6 memory',

        price : 3100   ,
    image : '/images/img_mac/img-mac-pro16/macbook-pro-16-space-gray.jpg'
}),
    new Product({
        name : 'mac pro 16',
        cpu: 'i7',
        color: 'silver',
        ram: '16GB',
        count: 50 , rom : '256GB',
      graphic : 'amd radeon pro 5500m with 8gb of gddr6 memory',

        price : 2500  , 
    image : '/images/img_mac/img-mac-pro16/macbook-pro-16-space-gray.jpg'
}),

    new Product({
        name : 'mac pro 16',
        cpu: 'i7',
        color: 'silver',
        ram: '16GB',
        count: 50 , rom : '512GB',
      graphic : 'amd radeon pro 5500m with 8gb of gddr6 memory',

        price : 2800   , 
    image : '/images/img_mac/img-mac-pro16/macbook-pro-16-space-gray.jpg'
}),

    new Product({
        name : 'mac pro 16',
        cpu: 'i7',
        color: 'silver',
        ram: '16GB',
        count: 50 , rom : '1T',
      graphic : 'amd radeon pro 5500m with 8gb of gddr6 memory',

        price : 3100   ,
    image : '/images/img_mac/img-mac-pro16/macbook-pro-16-space-gray.jpg'
}),

    new Product({
        name : 'mac pro 16',
        cpu: 'i7',
        color: 'silver',
        ram: '16GB',
        count: 50 , rom : '2T',
      graphic : 'amd radeon pro 5500m with 8gb of gddr6 memory',

        price : 3100  ,  
    image : '/images/img_mac/img-mac-pro16/macbook-pro-16-space-gray.jpg'
}),
    new Product({
        name : 'mac pro 16',
        cpu: 'i9',
        color: 'grey',
        ram: '8GB',
        count: 50 , rom : '512GB',
      graphic : 'amd radeon pro 5600m with 8gb of hbm2 memory',
        price : 3199 ,   
    image : '/images/img_mac/img-mac-pro16/macbook-pro-16-space-gray.jpg'
}),

    new Product({
        name : 'mac pro 16',
        cpu: 'i9',
        color: 'grey',
        ram: '8GB',
        count: 50 , rom : '1T',
      graphic : 'amd radeon pro 5600m with 8gb of hbm2 memory',

        price : 3000   ,
    image : '/images/img_mac/img-mac-pro16/macbook-pro-16-space-gray.jpg'
}),

    new Product({
        name : 'mac pro 16',
        cpu: 'i9',
        color: 'grey',
        ram: '8GB',
        count: 50 , rom : '2T',
      graphic : 'amd radeon pro 5600m with 8gb of hbm2 memory',

        price : 3000   , 
    image : '/images/img_mac/img-mac-pro16/macbook-pro-16-space-gray.jpg'
}),

    new Product({
        name : 'mac pro 16',
        cpu: 'i9',
        color: 'grey',
        ram: '16GB',
        count: 50 , rom : '256GB',
      graphic : 'amd radeon pro 5600m with 8gb of hbm2 memory',

        price : 3300   , 
    image : '/images/img_mac/img-mac-pro16/macbook-pro-16-space-gray.jpg'
}),

    new Product({
        name : 'mac pro 16',
        cpu: 'i9',
        color: 'grey',
        ram: '16GB',
        count: 50 , rom : '512GB',
      graphic : 'amd radeon pro 5600m with 8gb of hbm2 memory',

        price : 3100   , 
    image : '/images/img_mac/img-mac-pro16/macbook-pro-16-space-gray.jpg'
}),

    new Product({
        name : 'mac pro 16',
        cpu: 'i9',
        color: 'grey',
        ram: '16GB',
        count: 50 , rom : '1T',
      graphic : 'amd radeon pro 5600m with 8gb of hbm2 memory',

        price : 3500  ,  
    image : '/images/img_mac/img-mac-pro16/macbook-pro-16-space-gray.jpg'
}),

    new Product({
        name : 'mac pro 16',
        cpu: 'i9',
        color: 'grey',
        ram: '16GB',
        count: 50 , rom : '2T',
      graphic : 'amd radeon pro 5600m with 8gb of hbm2 memory',

        price : 3700   ,
    image : '/images/img_mac/img-mac-pro16/macbook-pro-16-space-gray.jpg'
}),
    new Product({
        name : 'mac pro 16',
        cpu: 'i7',
        color: 'grey',
        ram: '16GB',
        count: 50 , rom : '256GB',
      graphic : 'amd radeon pro 5600m with 8gb of hbm2 memory',

        price : 3000  , 
    image : '/images/img_mac/img-mac-pro16/macbook-pro-16-space-gray.jpg'
}),

    new Product({
        name : 'mac pro 16',
        cpu: 'i7',
        color: 'grey',
        ram: '16GB',
        count: 50 , rom : '512GB',
      graphic : 'amd radeon pro 5600m with 8gb of hbm2 memory',

        price : 2800 ,   
    image : '/images/img_mac/img-mac-pro16/macbook-pro-16-space-gray.jpg'
}),

    new Product({
        name : 'mac pro 16',
        cpu: 'i7',
        color: 'grey',
        ram: '16GB',
        count: 50 , rom : '1T',
      graphic : 'amd radeon pro 5600m with 8gb of hbm2 memory',

        price : 3700 ,  
    image : '/images/img_mac/img-mac-pro16/macbook-pro-16-space-gray.jpg'
}),

    new Product({
        name : 'mac pro 16',
        cpu: 'i7',
        color: 'grey',
        ram: '16GB',
        count: 50 , rom : '2T',
      graphic : 'amd radeon pro 5600m with 8gb of hbm2 memory',

        price : 3700  ,  
    image : '/images/img_mac/img-mac-pro16/macbook-pro-16-space-gray.jpg'
}),
    new Product({
        name : 'mac pro 16',
        cpu: 'i9',
        color: 'silver',
        ram: '8GB',
        count: 50 , rom : '256GB',
      graphic : 'amd radeon pro 5600m with 8gb of hbm2 memory',

        price : 2999 ,
    image : '/images/img_mac/img-mac-pro16/macbook-pro-16-space-gray.jpg'
}),

    new Product({
        name : 'mac pro 16',
        cpu: 'i9',
        color: 'silver',
        ram: '8GB',
        count: 50 , rom : '512GB',
      graphic : 'amd radeon pro 5600m with 8gb of hbm2 memory',

        price : 3199  ,  
    image : '/images/img_mac/img-mac-pro16/macbook-pro-16-space-gray.jpg'
}),

    new Product({
        name : 'mac pro 16',
        cpu: 'i9',
        color: 'silver',
        ram: '8GB',
        count: 50 , rom : '1T',
      graphic : 'amd radeon pro 5600m with 8gb of hbm2 memory',

        price : 3000  , 
    image : '/images/img_mac/img-mac-pro16/macbook-pro-16-space-gray.jpg'
}),

    new Product({
        name : 'mac pro 16',
        cpu: 'i9',
        color: 'silver',
        ram: '8GB',
        count: 50 , rom : '2T',
      graphic : 'amd radeon pro 5600m with 8gb of hbm2 memory',

        price : 3000 ,   
    image : '/images/img_mac/img-mac-pro16/macbook-pro-16-space-gray.jpg'
}),

    new Product({
        name : 'mac pro 16',
        cpu: 'i9',
        color: 'silver',
        ram: '16GB',
        count: 50 , rom : '256GB',
      graphic : 'amd radeon pro 5600m with 8gb of hbm2 memory',

        price : 3300  ,  
    image : '/images/img_mac/img-mac-pro16/macbook-pro-16-space-gray.jpg'
}),

    new Product({
        name : 'mac pro 16',
        cpu: 'i9',
        color: 'silver',
        ram: '16GB',
        count: 50 , rom : '512GB',
      graphic : 'amd radeon pro 5600m with 8gb of hbm2 memory',

        price : 3100  ,  
    image : '/images/img_mac/img-mac-pro16/macbook-pro-16-space-gray.jpg'
}),

    new Product({
        name : 'mac pro 16',
        cpu: 'i9',
        color: 'silver',
        ram: '16GB',
        count: 50 , rom : '1T',
      graphic : 'amd radeon pro 5600m with 8gb of hbm2 memory',

        price : 3500 ,   
    image : '/images/img_mac/img-mac-pro16/macbook-pro-16-space-gray.jpg'
}),

    new Product({
        name : 'mac pro 16',
        cpu: 'i9',
        color: 'silver',
        ram: '16GB',
        count: 50 , rom : '2T',
      graphic : 'amd radeon pro 5600m with 8gb of hbm2 memory',

        price : 3700 ,  
    image : '/images/img_mac/img-mac-pro16/macbook-pro-16-space-gray.jpg'
}),
    new Product({
        name : 'mac pro 16',
        cpu: 'i7',
        color: 'silver',
        ram: '16GB',
        count: 50 , rom : '256GB',
      graphic : 'amd radeon pro 5600m with 8gb of hbm2 memory',

        price : 3000  ,
    image : '/images/img_mac/img-mac-pro16/macbook-pro-16-space-gray.jpg'
}),

    new Product({
        name : 'mac pro 16',
        cpu: 'i7',
        color: 'silver',
        ram: '16GB',
        count: 50 , rom : '512GB',
      graphic : 'amd radeon pro 5600m with 8gb of hbm2 memory',

        price : 2800    ,
    image : '/images/img_mac/img-mac-pro16/macbook-pro-16-space-gray.jpg'
}),

    new Product({
        name : 'mac pro 16',
        cpu: 'i7',
        color: 'silver',
        ram: '16GB',
        count: 50 , rom : '1T',
      graphic : 'amd radeon pro 5600m with 8gb of hbm2 memory',

        price : 3700   ,
    image : '/images/img_mac/img-mac-pro16/macbook-pro-16-space-gray.jpg'
}),

    new Product({
        name : 'mac pro 16',
        cpu: 'i7',
        color: 'silver',
        ram: '16GB',
        count: 50 , rom : '2T',
      graphic : 'amd radeon pro 5600m with 8gb of hbm2 memory',

        price : 3700  ,
        image : '/images/img_mac/img-mac-pro16/macbook-pro-16-space-gray.jpg',
  
    })


 

];


var done=0;
for (var i = 0; i<mac16.length; i++){
    mac16[i].save(function(err, result){
        done++;
        if (done === mac16.length){
            exit();
        }
    });
}

function exit(){
    mongoose.disconnect();
}

