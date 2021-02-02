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

// var Schema = mongoose.Schema;

var ipadSchema = new mongoose.Schema({
    name : {type: String},
    inch : {type: String},
    more : {type: String},  // wifi or wifi + cellular
    color: {type: String},
    rom : {type: String},
    price: {type: Number},
    count: {type: Number},
    image: {type: String},
});

var ipad = mongoose.model('ipad', ipadSchema, 'ipads');

module.exports = ipad;

// ipad.find().then(function(ipad)
// {
// console.log(ipad)

// })


// module.exports = mongoose.model('iPad', schema);