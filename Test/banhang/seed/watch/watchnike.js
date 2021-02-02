var Product = require('../../models/watch');

var mongoose = require('mongoose');
// const { exists } = require('../models/product');
mongoose.connect("mongodb+srv://18VP:Trung@123@cluster0.xar5c.mongodb.net/18VP?retryWrites=true&w=majority", {
    useUnifiedTopology: true,
    useNewUrlParser: true
});
var watchnike = [


    new Product({
        name : 'silver aluminum case with nike sport band',
        type : 'apple watch nike',
        count: 50,
        case_size: '40mm',
        connect: 'gps',
        price : 399 , 
        image: '/images/img_watch/img-watch-nike/watch-1-1.jpg', 
}),

    new Product({
        name : 'silver aluminum case with nike sport band',
        type : 'apple watch nike',
        count: 50,
        case_size: '44mm',
        connect: 'gps',
        price : 429 , 
        image: '/images/img_watch/img-watch-nike/watch-1-1.jpg', 
    }),
    new Product({
        name : 'silver aluminum case with nike sport band',
        type : 'apple watch nike',
        count: 50,
        case_size: '40mm',
        connect: 'gps cellular',
        price : 499 , 
        image: '/images/img_watch/img-watch-nike/watch-1-1.jpg', 
    }),

    new Product({
        name : 'silver aluminum case with nike sport band',
        type : 'apple watch nike',
        count: 50,
        case_size: '44mm',
        connect: 'gps cellular',
        price : 549 , 
        image: '/images/img_watch/img-watch-nike/watch-1-1.jpg', 
    }),


    //
    new Product({
        name : 'space gray aluminum case with nike sport band',
        type : 'apple watch nike',
        count: 50,
        case_size: '40mm',
        connect: 'gps',
        price : 399 , 
        image: '/images/img_watch/img-watch-nike/watch-2-1.jpg', 
}),

    new Product({
        name : 'space gray aluminum case with nike sport band',
        type : 'apple watch nike',
        count: 50,
        case_size: '44mm',
        connect: 'gps',
        price : 429 , 
        image: '/images/img_watch/img-watch-nike/watch-2-1.jpg', 
    }),
    new Product({
        name : 'space gray aluminum case with nike sport band',
        type : 'apple watch nike',
        count: 50,
        case_size: '40mm',
        connect: 'gps cellular',
        price : 499 , 
        image: '/images/img_watch/img-watch-nike/watch-2-1.jpg', 
    }),

    new Product({
        name : 'space gray aluminum case with nike sport band',
        type : 'apple watch nike',
        count: 50,
        case_size: '44mm',
        connect: 'gps cellular',
        price : 549 , 
        image: '/images/img_watch/img-watch-nike/watch-2-1.jpg', 
    }),

//
    new Product({
        name : 'white aluminum case with nike sport band',
        type : 'apple watch nike',
        count: 50,
        case_size: '40mm',
        connect: 'gps',
        price : 399 , 
        image: '/images/img_watch/img-watch-nike/watch-3-1.jpg', 
    }),

    new Product({
        name : 'white aluminum case with nike sport band',
        type : 'apple watch nike',
        count: 50,
        case_size: '44mm',
        connect: 'gps',
        price : 429 , 
        image: '/images/img_watch/img-watch-nike/watch-3-1.jpg', 
    }),
    new Product({
        name : 'white aluminum case with nike sport band',
        type : 'apple watch nike',
        count: 50,
        case_size: '40mm',
        connect: 'gps cellular',
        price : 499 , 
        image: '/images/img_watch/img-watch-nike/watch-3-1.jpg', 
    }),

    new Product({
        name : 'white aluminum case with nike sport band',
        type : 'apple watch nike',
        count: 50,
        case_size: '44mm',
        connect: 'gps cellular',
        price : 549 , 
        image: '/images/img_watch/img-watch-nike/watch-3-1.jpg', 
    }),
//
    new Product({
        name : 'space gray aluminum case with nike sport',
        type : 'apple watch nike',
        count: 50,
        case_size: '40mm',
        connect: 'gps',
        price : 399 , 
        image: '/images/img_watch/img-watch-nike/watch-4-1.jpg', 
}),

    new Product({
        name : 'space gray aluminum case with nike sport',
        type : 'apple watch nike',
        count: 50,
        case_size: '44mm',
        connect: 'gps',
        price : 429 , 
        image: '/images/img_watch/img-watch-nike/watch-4-1.jpg', 
    }),
    new Product({
        name : 'space gray aluminum case with nike sport',
        type : 'apple watch nike',
        count: 50,
        case_size: '40mm',
        connect: 'gps cellular',
        price : 499 , 
        image: '/images/img_watch/img-watch-nike/watch-4-1.jpg', 
    }),

    new Product({
        name : 'space gray aluminum case with nike sport',
        type : 'apple watch nike',
        count: 50,
        case_size: '44mm',
        connect: 'gps cellular',
        price : 549 , 
        image: '/images/img_watch/img-watch-nike/watch-4-1.jpg', 
    }),
    new Product({
        name : 'silver aluminum case with nike sport loop',
        type : 'apple watch nike',
        count: 50,
        case_size: '40mm',
        connect: 'gps',
        price : 399 , 
        image: '/images/img_watch/img-watch-nike/watch-5-1.jpg', 
}),

    new Product({
        name : 'silver aluminum case with nike sport loop',
        type : 'apple watch nike',
        count: 50,
        case_size: '44mm',
        connect: 'gps',
        price : 429 , 
        image: '/images/img_watch/img-watch-nike/watch-5-1.jpg', 
    }),
    new Product({
        name : 'silver aluminum case with nike sport loop',
        type : 'apple watch nike',
        count: 50,
        case_size: '40mm',
        connect: 'gps cellular',
        price : 499 , 
        image: '/images/img_watch/img-watch-nike/watch-5-1.jpg', 
    }),

    new Product({
        name : 'silver aluminum case with nike sport loop',
        type : 'apple watch nike',
        count: 50,
        case_size: '44mm',
        connect: 'gps cellular',
        price : 549 , 
        image: '/images/img_watch/img-watch-nike/watch-5-1.jpg', 
    }),

    new Product({
        name : 'silver aluminum case with nike sport loop version 2',
        type : 'apple watch nike',
        count: 50,
        case_size: '40mm',
        connect: 'gps',
        price : 399 , 
        image: '/images/img_watch/img-watch-nike/watch-6-1.jpg', 
}),

    new Product({
        name : 'silver aluminum case with nike sport loop version 2',
        type : 'apple watch nike',
        count: 50,
        case_size: '44mm',
        connect: 'gps',
        price : 429 , 
        image: '/images/img_watch/img-watch-nike/watch-6-1.jpg', 
    }),
    new Product({
        name : 'silver aluminum case with nike sport loop version 2',
        type : 'apple watch nike',
        count: 50,
        case_size: '40mm',
        connect: 'gps cellular',
        price : 499 , 
        image: '/images/img_watch/img-watch-nike/watch-6-1.jpg', 
    }),

    new Product({
        name : 'silver aluminum case with nike sport loop version 2',
        type : 'apple watch nike',
        count: 50,
        case_size: '44mm',
        connect: 'gps cellular',
        price : 549 , 
        image: '/images/img_watch/img-watch-nike/watch-6-1.jpg', 
    }),









 
];








var done=0;
for (var i = 0; i<watchnike.length; i++){
    watchnike[i].save(function(err, result){
        done++;
        if (done === watchnike.length){
            exit();
        }
    });
}

function exit(){
    mongoose.disconnect();
}

