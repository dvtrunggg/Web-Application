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

var macSchema = new mongoose.Schema({
    name : {type: String},
    cpu : {type: String},
    color: {type: String},
    ram : {type: String},  
    rom : {type: String},
    graphic : {type: String},
    price: {type: Number},
    count: {type: String},
    image: {type: String}
});

var mac = mongoose.model('mac', macSchema, 'macs');

module.exports = mac;

// module.exports = mongoose.model('iPhone', schema);

// mac.find().then(function(ipad)
// {
// console.log(ipad)

// })