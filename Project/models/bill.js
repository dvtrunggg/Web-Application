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

var billSchema = new mongoose.Schema({
    firstName : {type: String},
    lastName : {type: String},
    phone : {type: String},
    email : {type: String},
    address : {type: String},
    status: {type: String},
    total: {type: Number},
    
    //product : [{name:String, count:Number, type: {type: String}, color:String, rom:String, price:Number, image:String, inch: String, more: String, case_size: String, band_size: String, graphic: String, ram:String, num: Number}],
    product : [{name:String, count:Number, color:String, type: {type: String}, rom:String, price:Number, image:String, inch: String, more: String, case_size: String, band_size: String, graphic: String, ram:String, num: Number}]
});

var bill = mongoose.model('bill', billSchema, 'bills');

module.exports = bill;
