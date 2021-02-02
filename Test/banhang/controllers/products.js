var MongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectID;


const product = (req, res)=>{
    var allProduct = [];
    var priceProduct = [];
    var colorProduct = [];
    var nameProduct = [];
    var idProduct = [];
    MongoClient.connect('mongodb+srv://18VP:Trung@123@cluster0.xar5c.mongodb.net/18VP?retryWrites=true&w=majority', 
    {useNewUrlParser: true, useUnifiedTopology: true}, function(err, db){
        if(err) throw err;
        var dbo = db.db('18VP');

        dbo.collection("iphones").find({}).toArray(function(err, result) {        
            if (err) throw err;
            // console.log(result.name);
            for(var i = 0; i<result.length; i++){
                allProduct.push(result.slice(i, i+1));
            }
          
        });

        dbo.collection("iphones").find({_id: ObjectId(id)}).toArray(function(err, result) {        
            if (err) throw err;
            // console.log(result.name);
            for(var i = 0; i<result.length; i++){
                idProduct.push(result.slice(i, i+1));
            }
          
        });

        // dbo.collection("iphones").find({_id: ObjectId(id)}).toArray(function(err, result) {        
        //     if (err) throw err;
        //     // console.log(result.name);
        //     for(var i = 0; i<result.length; i++){
        //         idProduct.push(result.slice(i, i+1));
        //     }
          
        // });

        res.render()



    });
}