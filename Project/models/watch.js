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

var watchSchema = new mongoose.Schema({
    name : {type: String},
    case_size : {type: String},
    connectivity : {type: String},
    price : {type: Number},
    type : {type: String},
    count: {type: Number},
    image: {type: String},
    band_size: {type: String}
});

// module.exports = mongoose.model('watch', schema);

var watch = mongoose.model('watch', watchSchema, 'watches');
module.exports = watch;
// watch.find().then(function(ipad)
// {
// console.log(ipad)

// })
