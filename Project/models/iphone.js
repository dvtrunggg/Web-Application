var mongoose = require('mongoose');
var url = "mongodb+srv://18VP:Trung@123@cluster0.xar5c.mongodb.net/18VP?retryWrites=true&w=majority";

mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true}, 
    (err, client)=>{
        if(err){
          console.log("Can't connect DB: ",err );
        }
        else{
          console.log("DB is connected");
        }
    });

// var mongoose = require('mongoose');
// var Schema = mongoose.Schema;

var iphoneSchema = new mongoose.Schema({
    name : {type: String},
    //imagePath : {type: String},
    color: {type: String},
    rom : {type: String},
    price: {type: Number},
    count: {type: Number},
    image: {type: String}
});

var iphone = mongoose.model('iphone', iphoneSchema, 'iphones');
module.exports = iphone;

// module.exports = mongoose.model('iPhone', schema);

// iphone.find().then(function(ipad)
// {
// console.log(ipad)

// })