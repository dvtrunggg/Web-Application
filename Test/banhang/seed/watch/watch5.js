var Product = require('../../models/watch');

var mongoose = require('mongoose');
// const { exists } = require('../models/product');
mongoose.connect("mongodb+srv://18VP:Trung@123@cluster0.xar5c.mongodb.net/18VP?retryWrites=true&w=majority", {
    useUnifiedTopology: true,
    useNewUrlParser: true
});
var watch5 = [

    new Product({
        name : 'gold aluminum case with sport band',
        type : 'apple watch series 5',
        count: 50,
        case_size: '40mm',
        connect: 'gps',
        price : 399 , 
        image: '/images/img_watch/img-watch-series-5/watch-1-1.jpg', 
}),

    new Product({
        name : 'gold aluminum case with sport band',
        type : 'apple watch series 5',
        count: 50,
        case_size: '44mm',
        connect: 'gps',
        price : 429 , 
        image: '/images/img_watch/img-watch-series-5/watch-1-1.jpg', 
    }),
    new Product({
        name : 'gold aluminum case with sport band',
        type : 'apple watch series 5',
        count: 50,
        case_size: '40mm',
        connect: 'gps cellular',
        price : 499 , 
        image: '/images/img_watch/img-watch-series-5/watch-1-1.jpg', 
    }),

    new Product({
        name : 'gold aluminum case with sport band',
        type : 'apple watch series 5',
        count: 50,
        case_size: '44mm',
        connect: 'gps cellular',
        price : 549 , 
        image: '/images/img_watch/img-watch-series-5/watch-1-1.jpg', 
    }),



    //
    new Product({
        name : 'space gray aluminum case with sport loop',
        type : 'apple watch series 5',
        count: 50,
        case_size: '40mm',
        connect: 'gps',
        price : 399 , 
        image: '/images/img_watch/img-watch-series-5/watch-2-1.jpg', 
}),

    new Product({
        name : 'space gray aluminum case with sport loop',
        type : 'apple watch series 5',
        count: 50,
        case_size: '44mm',
        connect: 'gps',
        price : 429 , 
        image: '/images/img_watch/img-watch-series-5/watch-2-1.jpg', 
    }),
    new Product({
        name : 'space gray aluminum case with sport loop',
        type : 'apple watch series 5',
        count: 50,
        case_size: '40mm',
        connect: 'gps cellular',
        price : 499 , 
        image: '/images/img_watch/img-watch-series-5/watch-2-1.jpg', 
    }),

    new Product({
        name : 'space gray aluminum case with sport loop',
        type : 'apple watch series 5',
        count: 50,
        case_size: '44mm',
        connect: 'gps cellular',
        price : 549 , 
        image: '/images/img_watch/img-watch-series-5/watch-2-1.jpg', 
    }),

//
    new Product({
        name : 'stainless steel case with leather loop',
        type : 'apple watch series 5',
        count: 50,
        case_size: '40mm',
        connect: 'gps',
        price : 399 , 
        image: '/images/img_watch/img-watch-series-5/watch-3-1.jpg', 
    }),

    new Product({
        name : 'stainless steel case with leather loop',
        type : 'apple watch series 5',
        count: 50,
        case_size: '44mm',
        connect: 'gps',
        price : 429 , 
        image: '/images/img_watch/img-watch-series-5/watch-3-1.jpg', 
    }),
    new Product({
        name : 'stainless steel case with leather loop',
        type : 'apple watch series 5',
        count: 50,
        case_size: '40mm',
        connect: 'gps cellular',
        price : 499 , 
        image: '/images/img_watch/img-watch-series-5/watch-3-1.jpg', 
    }),

    new Product({
        name : 'stainless steel case with leather loop',
        type : 'apple watch series 5',
        count: 50,
        case_size: '44mm',
        connect: 'gps cellular',
        price : 549 , 
        image: '/images/img_watch/img-watch-series-5/watch-3-1.jpg', 
    }),
//
    new Product({
        name : 'gold 2 aluminum case with sport band',
        type : 'apple watch series 5',
        count: 50,
        case_size: '40mm',
        connect: 'gps',
        price : 399 , 
        image: '/images/img_watch/img-watch-series-5/watch-4-1.jpg', 
}),

    new Product({
        name : 'gold 2 aluminum case with sport band',
        type : 'apple watch series 5',
        count: 50,
        case_size: '44mm',
        connect: 'gps',
        price : 429 , 
        image: '/images/img_watch/img-watch-series-5/watch-4-1.jpg', 
    }),
    new Product({
        name : 'gold 2 aluminum case with sport band',
        type : 'apple watch series 5',
        count: 50,
        case_size: '40mm',
        connect: 'gps cellular',
        price : 499 , 
        image: '/images/img_watch/img-watch-series-5/watch-4-1.jpg', 
    }),

    new Product({
        name : 'gold 2 aluminum case with sport band',
        type : 'apple watch series 5',
        count: 50,
        case_size: '44mm',
        connect: 'gps cellular',
        price : 549 , 
        image: '/images/img_watch/img-watch-series-5/watch-4-1.jpg', 
    }),
    new Product({
        name : 'gold aluminum case with sport loop',
        type : 'apple watch series 5',
        count: 50,
        case_size: '40mm',
        connect: 'gps',
        price : 399 , 
        image: '/images/img_watch/img-watch-series-5/watch-5-1.jpg', 
}),

    new Product({
        name : 'gold aluminum case with sport loop',
        type : 'apple watch series 5',
        count: 50,
        case_size: '44mm',
        connect: 'gps',
        price : 429 , 
        image: '/images/img_watch/img-watch-series-5/watch-5-1.jpg', 
    }),
    new Product({
        name : 'gold aluminum case with sport loop',
        type : 'apple watch series 5',
        count: 50,
        case_size: '40mm',
        connect: 'gps cellular',
        price : 499 , 
        image: '/images/img_watch/img-watch-series-5/watch-5-1.jpg', 
    }),

    new Product({
        name : 'gold aluminum case with sport loop',
        type : 'apple watch series 5',
        count: 50,
        case_size: '44mm',
        connect: 'gps cellular',
        price : 549 , 
        image: '/images/img_watch/img-watch-series-5/watch-5-1.jpg', 
    }),

    new Product({
        name : 'silver aluminum case with sport loop',
        type : 'apple watch series 5',
        count: 50,
        case_size: '40mm',
        connect: 'gps',
        price : 399 , 
        image: '/images/img_watch/img-watch-series-5/watch-6-1.jpg', 
}),

    new Product({
        name : 'silver aluminum case with sport loop',
        type : 'apple watch series 5',
        count: 50,
        case_size: '44mm',
        connect: 'gps',
        price : 429 , 
        image: '/images/img_watch/img-watch-series-5/watch-6-1.jpg', 
    }),
    new Product({
        name : 'silver aluminum case with sport loop',
        type : 'apple watch series 5',
        count: 50,
        case_size: '40mm',
        connect: 'gps cellular',
        price : 499 , 
        image: '/images/img_watch/img-watch-series-5/watch-6-1.jpg', 
    }),

    new Product({
        name : 'silver aluminum case with sport loop',
        type : 'apple watch series 5',
        count: 50,
        case_size: '44mm',
        connect: 'gps cellular',
        price : 549 , 
        image: '/images/img_watch/img-watch-series-5/watch-6-1.jpg', 
    }),



 
];








var done=0;
for (var i = 0; i<watch5.length; i++){
    watch5[i].save(function(err, result){
        done++;
        if (done === watch5.length){
            exit();
        }
    });
}

function exit(){
    mongoose.disconnect();
}

