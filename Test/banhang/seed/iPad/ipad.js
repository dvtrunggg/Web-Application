var Product = require('../../models/ipad');

var mongoose = require('mongoose');
// const { exists } = require('../models/product');
mongoose.connect("mongodb+srv://18VP:Trung@123@cluster0.xar5c.mongodb.net/18VP?retryWrites=true&w=majority", {
    useUnifiedTopology: true,
    useNewUrlParser: true
});

// mongoose.connect("mongodb+srv://18VP:Trung@123@cluster0.xar5c.mongodb.net/18VP?retryWrites=true&w=majority", {
//   useUnifiedTopology: true,
//   useNewUrlParser: true
// }, (err, client)=>{
//   if(err){
//     console.log("cannot connect DB: ",err );
//   }
//   else{
//     console.log("DB is connected");
//     // const collection = client.db('shopping').collection('products');
//     // client.close();
//   }
// });



var iPad = [
    new Product({
        name : 'ipad',
        color: 'grey',
        rom : '32GB',
        count: 50,
        more : 'wifi',
        price : 329,
        image : '/images/img_ipad/img_buy-ipad/ipad.jpg'   
}),

    new Product({
        name : 'ipad',
        color: 'grey',
        rom : '128GB',
        count: 50,
        more : 'wifi',
        price : 429  ,  
    image : '/images/img_ipad/img_buy-ipad/ipad.jpg'
}),
    new Product({
        name : 'ipad',
        color: 'silver',
        rom : '32GB',
        count: 50,
        more : 'wifi',
        price : 329   , 
    image : '/images/img_ipad/img_buy-ipad/ipad.jpg'
}),
    new Product({
        name : 'ipad',
        color: 'silver',
        rom : '128GB',
        count: 50,
        more : 'wifi',
        price : 429   ,
    image : '/images/img_ipad/img_buy-ipad/ipad.jpg'
}),
    new Product({
        name : 'ipad',
        color: 'gold',
        rom : '32GB',
        count: 50,
        more : 'wifi',
        price : 329    ,
    image : '/images/img_ipad/img_buy-ipad/ipad.jpg'
}),
    new Product({
        name : 'ipad',
        color: 'gold',
        rom : '128GB',
        count: 50,
        more : 'wifi',
        price : 429   , 
    image : '/images/img_ipad/img_buy-ipad/ipad.jpg'
}),
    new Product({
        name : 'ipad',
        color: 'grey',
        rom : '32GB',
        count: 50,
        more : 'wifi cellular',
        price : 499   , 
    image : '/images/img_ipad/img_buy-ipad/ipad.jpg'
}),

    new Product({
        name : 'ipad',
        color: 'grey',
        rom : '128GB',
        count: 50,
        more : 'wifi cellular',
        price : 629 ,   
    image : '/images/img_ipad/img_buy-ipad/ipad.jpg'
}),
    new Product({
        name : 'ipad',
        color: 'silver',
        rom : '32GB',
        count: 50,
        more : 'wifi cellular',
        price : 499,    
    image : '/images/img_ipad/img_buy-ipad/ipad.jpg'
}),
    new Product({
        name : 'ipad',
        color: 'silver',
        rom : '128GB',
        count: 50,
        more : 'wifi cellular',
        price : 629,   
    image : '/images/img_ipad/img_buy-ipad/ipad.jpg'
}),
    new Product({
        name : 'ipad',
        color: 'gold',
        rom : '32GB',
        count: 50,
        more : 'wifi cellular',
        price : 499 ,   
    image : '/images/img_ipad/img_buy-ipad/ipad.jpg'
}),
    new Product({
        name : 'ipad',
        color: 'gold',
        rom : '128GB',
        count: 50,
        more : 'wifi cellular',
        price : 629,
        image : '/images/img_ipad/img_buy-ipad/ipad.jpg'
    
    })


];


var done=0;
for (var i = 0; i<iPad.length; i++){
    iPad[i].save(function(err, result){
        done++;
        if (done === iPad.length){
            exit();
        }
    });
}

function exit(){
    mongoose.disconnect();
}

