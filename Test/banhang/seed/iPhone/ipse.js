var Product = require('../../models/product');

var mongoose = require('mongoose');
// const { exists } = require('../models/product');
mongoose.connect("mongodb+srv://18VP:Trung@123@cluster0.xar5c.mongodb.net/18VP?retryWrites=true&w=majority", {
    useUnifiedTopology: true,
    useNewUrlParser: true
});
 var iPhoneSE = [
//     new Product({
//         name : 'iphone se',

//         color: 'white',
//         rom : '64GB',
// count: 50,
//         price : 399   , 
//             image: '/images/img_iphone/img-buy-iphone-se/buy-iphone-se.jpg',
// }),







//     new Product({
//         name : 'iphone se',

//         color: 'white',
//         rom : '128GB',
// count: 50,
//         price : 499  ,  
//             image: '/images/img_iphone/img-buy-iphone-se/buy-iphone-se.jpg',
// }),

//     new Product({
//         name : 'iphone se',

//         color: 'white',
//         rom : '256GB',
// count: 50,
//         price : 549   ,
//             image: '/images/img_iphone/img-buy-iphone-se/buy-iphone-se.jpg',
// }),

//     new Product({
//         name : 'iphone se',

//         color: 'black',
//         rom : '64GB',
// count: 50,
//         price : 399  ,  
//             image: '/images/img_iphone/img-buy-iphone-se/buy-iphone-se.jpg',
// }),

//     new Product({
//         name : 'iphone se',

//         color: 'black',
//         rom : '128GB',
// count: 50,
//         price : 499  ,  
//             image: '/images/img_iphone/img-buy-iphone-se/buy-iphone-se.jpg',
// }),

//     new Product({
//         name : 'iphone se',

//         color: 'black',
//         rom : '256GB',
// count: 50,
//         price : 549  , 
//             image: '/images/img_iphone/img-buy-iphone-se/buy-iphone-se.jpg',
// }),

//     new Product({
//         name : 'iphone se',

//         color: 'red',
//         rom : '64GB',
// count: 50,
//         price : 399 ,   
//             image: '/images/img_iphone/img-buy-iphone-se/buy-iphone-se.jpg',
// }),

//     new Product({
//         name : 'iphone se',

//         color: 'red',
//         rom : '128GB',
// count: 50,
//         price : 499  ,  
//             image: '/images/img_iphone/img-buy-iphone-se/buy-iphone-se.jpg',
// }),

//     new Product({
//         name : 'iphone se',

//         color: 'red',
//         rom : '256GB',
// count: 50,
//         price : 549  , 
//         image: '/images/img_iphone/img-buy-iphone-se/buy-iphone-se.jpg',

//     }),












    new Product({
        name : 'iphone se',
    
        color: '(product)red',
        rom : '64GB',
        count: 50,
        price : 399   , 
        image: '/images/img_iphone/img-buy-iphone-se/buy-iphone-se.jpg',
    }),
    
    new Product({
        name : 'iphone se',
    
        color: '(product)red',
        rom : '128GB',
        count: 50,
        price : 499   , 
        image: '/images/img_iphone/img-buy-iphone-se/buy-iphone-se.jpg',
    }),
    new Product({
        name : 'iphone se',
    
        color: '(product)red',
        rom : '256GB',
        count: 50,
        price : 649   , 
        image: '/images/img_iphone/img-buy-iphone-se/buy-iphone-se.jpg',
    })
    
    


];


var done=0;
for (var i = 0; i<iPhoneSE.length; i++){
    iPhoneSE[i].save(function(err, result){
        done++;
        if (done === iPhoneSE.length){
            exit();
        }
    });
}

function exit(){
    mongoose.disconnect();
}

