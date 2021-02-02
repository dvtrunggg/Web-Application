var Product = require('../models/ipad');
var mongoose = require('mongoose');
// const { exists } = require('../models/product');

// mongoose.connect("mongodb://localhost:27017/", {
//     useUnifiedTopology: true,
//     useNewUrlParser: true
// });

mongodb://localhost:27017/
mongoose.connect("mongodb+srv://18VP:Trung@123@cluster0.xar5c.mongodb.net/18VP?retryWrites=true&w=majority", {
  useUnifiedTopology: true,
  useNewUrlParser: true
}, (err, client)=>{
  if(err){
    console.log("cannot connect DB: ",err );
  }
  else{
    console.log("DB is connected");
    // const collection = client.db('shopping').collection('products');
    // client.close();
  }
});



var iPad = [
    new Product({
        name : 'iPad',
        color: 'grey',
        rom : '32GB',
        more : 'Wi-Fi',
        price : 329    
    }),

    new Product({
        name : 'iPad',
        color: 'grey',
        rom : '128GB',
        more : 'Wi-Fi',
        price : 429    
    }),
    new Product({
        name : 'iPad',
        color: 'silver',
        rom : '32GB',
        more : 'Wi-Fi',
        price : 329    
    }),
    new Product({
        name : 'iPad',
        color: 'silver',
        rom : '128GB',
        more : 'Wi-Fi',
        price : 429   
    }),
    new Product({
        name : 'iPad',
        color: 'gold',
        rom : '32GB',
        more : 'Wi-Fi',
        price : 329    
    }),
    new Product({
        name : 'iPad',
        color: 'gold',
        rom : '128GB',
        more : 'Wi-Fi',
        price : 429    
    }),
    new Product({
        name : 'iPad',
        color: 'grey',
        rom : '32GB',
        more : 'Wi-Fi + Cellular',
        price : 499    
    }),

    new Product({
        name : 'iPad',
        color: 'grey',
        rom : '128GB',
        more : 'Wi-Fi + Cellular',
        price : 629    
    }),
    new Product({
        name : 'iPad',
        color: 'silver',
        rom : '32GB',
        more : 'Wi-Fi + Cellular',
        price : 499    
    }),
    new Product({
        name : 'iPad',
        color: 'silver',
        rom : '128GB',
        more : 'Wi-Fi + Cellular',
        price : 629   
    }),
    new Product({
        name : 'iPad',
        color: 'gold',
        rom : '32GB',
        more : 'Wi-Fi + Cellular',
        price : 499    
    }),
    new Product({
        name : 'iPad',
        color: 'gold',
        rom : '128GB',
        more : 'Wi-Fi + Cellular',
        price : 629    
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