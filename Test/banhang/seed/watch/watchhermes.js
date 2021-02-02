var Product = require('../../models/watch');

var mongoose = require('mongoose');
// const { exists } = require('../models/product');
mongoose.connect("mongodb+srv://18VP:Trung@123@cluster0.xar5c.mongodb.net/18VP?retryWrites=true&w=majority", {
    useUnifiedTopology: true,
    useNewUrlParser: true
});
var watchhermess = [

    new Product({
        name : 'stainless steel case with single tour',
        type : 'apple watch hermes',
        count: 50,
        case_size: '44mm',
        connect: 'gps cellular',
        band_size: 'one size',
        price : 1299 , 
        image: '/images/img_watch/img-watch-hermes/watch-1-1.jpg', 
}),
//
new Product({
    name : 'space black stainless steel case with single tour',
    type : 'apple watch hermes',
    count: 50,
    case_size: '40mm',
    connect: 'gps cellular',
    band_size: 'one size',
    price : 1249 , 
    image: '/images/img_watch/img-watch-hermes/watch-2-1.jpg', 
}),

new Product({
    name : 'space black stainless steel case with single tour',
    type : 'apple watch hermes',
    count: 50,
    case_size: '44mm',
    connect: 'gps cellular',
    band_size: 'one size',
    price : 1299 , 
    image: '/images/img_watch/img-watch-hermes/watch-2-1.jpg', 
}),


//

new Product({
    name : 'space black stainless steel case with double tour',
    type : 'apple watch hermes',
    count: 50,
    case_size: '40mm',
    connect: 'gps cellular',
    band_size: 'one size',
    price : 1399 , 
    image: '/images/img_watch/img-watch-hermes/watch-3-1.jpg', 
}),

//

new Product({
    name : 'stainless steel case with single tour',
    type : 'apple watch hermes',
    count: 50,
    case_size: '40mm',
    connect: 'gps cellular',
    price : 1249 , 
    image: '/images/img_watch/img-watch-hermes/watch-4-1.jpg', 
}),

new Product({
    name : 'stainless steel case with single tour',
    type : 'apple watch hermes',
    count: 50,
    case_size: '44mm',
    connect: 'gps cellular',
    price : 1249 , 
    image: '/images/img_watch/img-watch-hermes/watch-4-1.jpg', 
}),

//
new Product({
    name : 'stainless steel case with double tour',
    type : 'apple watch hermes',
    count: 50,
    case_size: '40mm',
    connect: 'gps cellular',
    band_size: 'one size',
    price : 1499 , 
    image: '/images/img_watch/img-watch-hermes/watch-5-1.jpg', 
}),

//
new Product({
    name : 'stainless steel case with single tour deployment buckle',
    type : 'apple watch hermes',
    count: 50,
    case_size: '44mm',
    connect: 'gps cellular',
    band_size: 'one size',
    price : 1499 , 
    image: '/images/img_watch/img-watch-hermes/watch-5-1.jpg', 
}),

 

 
];








var done=0;
for (var i = 0; i<watchhermess.length; i++){
    watchhermess[i].save(function(err, result){
        done++;
        if (done === watchhermess.length){
            exit();
        }
    });
}

function exit(){
    mongoose.disconnect();
}

