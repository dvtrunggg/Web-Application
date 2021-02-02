var Product = require('../../models/watch');

var mongoose = require('mongoose');
// const { exists } = require('../models/product');
mongoose.connect("mongodb+srv://18VP:Trung@123@cluster0.xar5c.mongodb.net/18VP?retryWrites=true&w=majority", {
    useUnifiedTopology: true,
    useNewUrlParser: true
});
var watch3 = [

    new Product({
        name : 'gold aluminum case with sport band',
        type : 'apple watch series 5',
        count: 50,
        case_size: '40mm',
        connect: 'gps',
        price : 199 , 
        image: '/images/img_watch/img-watch-series-5/watch-1-1.jpg', 
}),

    new Product({
        name : 'gold aluminum case with sport band',
        type : 'apple watch series 5',
        count: 50,
        case_size: '44mm',
        connect: 'gps',
        price : 249 , 
        image: '/images/img_watch/img-watch-series-5/watch-1-1.jpg', 
    }),
    new Product({
        name : 'gold aluminum case with sport band',
        type : 'apple watch series 5',
        count: 50,
        case_size: '40mm',
        connect: 'gps cellular',
        price : 229 , 
        image: '/images/img_watch/img-watch-series-5/watch-1-1.jpg', 
    }),

    new Product({
        name : 'gold aluminum case with sport band',
        type : 'apple watch series 5',
        count: 50,
        case_size: '44mm',
        connect: 'gps cellular',
        price : 300 , 
        image: '/images/img_watch/img-watch-series-5/watch-1-1.jpg', 
    }),

    //

    new Product({
        name : 'gold aluminum case with sport band',
        type : 'apple watch series 3',
        count: 50,
        case_size: '38mm',
        connect: 'gps',
        price : 199 , 
        image: '/images/img_watch/img-watch-series-3/watch-1-1.jpg', 
}),

    new Product({
        name : 'gold aluminum case with sport band',
        type : 'apple watch series 3',
        count: 50,
        case_size: '42mm',
        connect: 'gps',
        price : 249 , 
        image: '/images/img_watch/img-watch-series-3/watch-1-1.jpg', 
    }),
    new Product({
        name : 'gold aluminum case with sport band',
        type : 'apple watch series 3',
        count: 50,
        case_size: '38mm',
        connect: 'gps cellular',
        price : 229 , 
        image: '/images/img_watch/img-watch-series-3/watch-1-1.jpg', 
    }),

    new Product({
        name : 'gold aluminum case with sport band',
        type : 'apple watch series 3',
        count: 50,
        case_size: '42mm',
        connect: 'gps cellular',
        price : 300 , 
        image: '/images/img_watch/img-watch-series-3/watch-1-1.jpg', 
    }),

    //  
    new Product({
        name : 'space gray aluminum case with black sport band',
        type : 'apple watch series 3',
        count: 50,
        case_size: '38mm',
        connect: 'gps',
        price : 199 , 
        image: '/images/img_watch/img-watch-series-3/watch-2-1.jpg', 
    }),

    new Product({
        name : 'space gray aluminum case with black sport band',
        type : 'apple watch series 3',
        count: 50,
        case_size: '42mm',
        connect: 'gps',
        price : 249 , 
        image: '/images/img_watch/img-watch-series-3/watch-2-1.jpg', 
    }),
    new Product({
        name : 'space gray aluminum case with black sport band',
        type : 'apple watch series 3',
        count: 50,
        case_size: '38mm',
        connect: 'gps cellular',
        price : 229 , 
        image: '/images/img_watch/img-watch-series-3/watch-2-1.jpg', 
    }),

    new Product({
        name : 'space gray aluminum case with black sport band',
        type : 'apple watch series 3',
        count: 50,
        case_size: '42mm',
        connect: 'gps cellular',
        price : 300 , 
        image: '/images/img_watch/img-watch-series-3/watch-2-1.jpg', 
    }),

        //  
        new Product({
            name : 'silver aluminum case with white sport band',
            type : 'apple watch series 3',
            count: 50,
            case_size: '38mm',
            connect: 'gps',
            price : 199 , 
            image: '/images/img_watch/img-watch-series-3/watch-3-1.jpg', 
        }),
    
        new Product({
            name : 'silver aluminum case with white sport band',
            type : 'apple watch series 3',
            count: 50,
            case_size: '42mm',
            connect: 'gps',
            price : 249 , 
            image: '/images/img_watch/img-watch-series-3/watch-3-1.jpg', 
        }),
        new Product({
            name : 'silver aluminum case with white sport band',
            type : 'apple watch series 3',
            count: 50,
            case_size: '38mm',
            connect: 'gps cellular',
            price : 229 , 
            image: '/images/img_watch/img-watch-series-3/watch-3-1.jpg', 
        }),
    
        new Product({
            name : 'silver aluminum case with white sport band',
            type : 'apple watch series 3',
            count: 50,
            case_size: '42mm',
            connect: 'gps cellular',
            price : 300 , 
            image: '/images/img_watch/img-watch-series-3/watch-3-1.jpg', 
        }),
    

    
            //  
    new Product({
        name : 'space gray aluminum case with black sport band',
        type : 'apple watch series 3',
        count: 50,
        case_size: '38mm',
        connect: 'gps',
        price : 199 , 
        image: '/images/img_watch/img-watch-series-3/watch-4-1.jpg', 
    }),

    new Product({
        name : 'space gray aluminum case with black sport band',
        type : 'apple watch series 3',
        count: 50,
        case_size: '42mm',
        connect: 'gps',
        price : 249 , 
        image: '/images/img_watch/img-watch-series-3/watch-4-1.jpg', 
    }),
    new Product({
        name : 'space gray aluminum case with black sport band',
        type : 'apple watch series 3',
        count: 50,
        case_size: '38mm',
        connect: 'gps cellular',
        price : 229 , 
        image: '/images/img_watch/img-watch-series-3/watch-4-1.jpg', 
    }),

    new Product({
        name : 'space gray aluminum case with black sport band',
        type : 'apple watch series 3',
        count: 50,
        case_size: '42mm',
        connect: 'gps cellular',
        price : 300 , 
        image: '/images/img_watch/img-watch-series-3/watch-4-1.jpg', 
    }),

        //  
        new Product({
            name : 'space gray aluminum case with anthracite',
            type : 'apple watch series 3',
            count: 50,
            case_size: '38mm',
            connect: 'gps',
            price : 199 , 
            image: '/images/img_watch/img-watch-series-3/watch-5-1.jpg', 
        }),
    
        new Product({
            name : 'space gray aluminum case with anthracite',
            type : 'apple watch series 3',
            count: 50,
            case_size: '42mm',
            connect: 'gps',
            price : 249 , 
            image: '/images/img_watch/img-watch-series-3/watch-5-1.jpg', 
        }),
        new Product({
            name : 'space gray aluminum case with anthracite',
            type : 'apple watch series 3',
            count: 50,
            case_size: '38mm',
            connect: 'gps cellular',
            price : 229 , 
            image: '/images/img_watch/img-watch-series-3/watch-5-1.jpg', 
        }),
    
        new Product({
            name : 'space gray aluminum case with anthracite',
            type : 'apple watch series 3',
            count: 50,
            case_size: '42mm',
            connect: 'gps cellular',
            price : 300 , 
            image: '/images/img_watch/img-watch-series-3/watch-5-1.jpg', 
        }),
            //  
            new Product({
                name : 'space gray aluminum case with anthracite version 2',
                type : 'apple watch series 3',
                count: 50,
                case_size: '38mm',
                connect: 'gps',
                price : 199 , 
                image: '/images/img_watch/img-watch-series-3/watch-6-1.jpg', 
            }),
        
            new Product({
                name : 'space gray aluminum case with anthracite version 2',
                type : 'apple watch series 3',
                count: 50,
                case_size: '42mm',
                connect: 'gps',
                price : 249 , 
                image: '/images/img_watch/img-watch-series-3/watch-6-1.jpg', 
            }),
            new Product({
                name : 'space gray aluminum case with anthracite version 2',
                type : 'apple watch series 3',
                count: 50,
                case_size: '38mm',
                connect: 'gps cellular',
                price : 229 , 
                image: '/images/img_watch/img-watch-series-3/watch-6-1.jpg', 
            }),
        
            new Product({
                name : 'space gray aluminum case with anthracite version 2',
                type : 'apple watch series 3',
                count: 50,
                case_size: '42mm',
                connect: 'gps cellular',
                price : 300 , 
                image: '/images/img_watch/img-watch-series-3/watch-6-1.jpg', 
            }),
        
        
        
    
    
    
    
    



    
    


    




 
];








var done=0;
for (var i = 0; i<watch3.length; i++){
    watch3[i].save(function(err, result){
        done++;
        if (done === watch3.length){
            exit();
        }
    });
}

function exit(){
    mongoose.disconnect();
}

