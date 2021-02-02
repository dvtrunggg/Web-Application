
// var MongoClient = require('mongodb').MongoClient;
// var ObjectId = require('mongodb').ObjectID;
// var url = 'mongodb+srv://18VP:Trung@123@cluster0.xar5c.mongodb.net/18VP?retryWrites=true&w=majority';
// var collection = 'iphones';

const getIphone = (req, res) => {
    res.render('./iphone/interface_iphone', { title: 'Home' });
};

const getForm = (req, res) => {
    let form = req.params.name;
    
    if (form == 'buy-iphone-se')
    {
        res.render('./iphone/buy-iphone-se', { title: 'Buy iphone se' });
    }
    if (form == 'buy-iphone-xr')
    {
        res.render('./iphone/buy-iphone-xr', { title: 'Buy iphone xr' });
    }
    if (form == 'buy-iphone11')
    {
        res.render('./iphone/buy-iphone11', { title: 'Buy iphone11'  });
    }
    if (form == 'buy-iphone11-pro')
    {
        res.render('./iphone/buy-iphone11-pro', { title: 'Buy ipad pro' });
    }
};


// router.get('/form/:name', function(req, res, next){
//     Product.find(function(err, docs){
//         var productChunks = [];
//         var chunkSize = 3;
//         for (var i = 0; i<docs.length; i+=chunkSize){
//             productChunks.push(docs.slice(i, i+chunkSize));
//         }
//         // res.render('')
//     })
// })

// router.get('/add-to-cart/:id', function(req, res, next){
//     var productID = req.params.id;
//     var cart = new cart(req.session.cart ? req.session.cart : {items :{}});

//     Product.findById(productID, function(err, product){
//         if(err){
//             return res.redirect('/');
//         }
//         cart.add(Product,Product.id);
//         req.session.cart = cart;
//         console.log(req.session.cart);
//         res.redirect('/');
//     })
// });



var MongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectID;
var url = 'mongodb+srv://18VP:Trung@123@cluster0.xar5c.mongodb.net/18VP?retryWrites=true&w=majority';
var collection = 'iphones';
function productIphone(req, res, json){
    console.log('productiphone');
    MongoClient.connect(url, {useNewUrlParser: true, useUnifiedTopology: true}, function(err, database){
        if (err) throw err;
        var dbo = database.db('18VP');
        dbo.collection(collection).find({$and: [{'name': json.ten}, {'color' :json.mau}, {'rom' : json.bonho} ]}).toArray(function(err, result){
            return result;
        });


    });
}
     


// MongoClient.connect(url, {useNewUrlParser: true, useUnifiedTopology: true}, function(err, database){
//     if (err) throw err;
//     var dbo = database.db('18VP');
//     // dbo.collection(collection).find({$and: [{'name': json.name}, {'color' :json.color}, {'rom' : json.rom} ]}).toArray(function(err, result){

//     // })

//     //test

//     // dbo.collection('manga').find({ _id: ObjectId(id) }).toArray(function(err, result) {   
//     //          if (err) throw err;
//     //              else{
//     //         console.log('okkk');
//     //         console.log(result);
//     //         database.close();
//     //     }
        

//     // })
//     dbo.collection('iphones').find({$and: [{'name': 'iphone 11'}, {'color' :'White'}, {'rom' : '64GB'} ]}).toArray(function(err, result) {
//         // for (var i = 0; i < result.length; i++) {
//         //     mangaDetail.push(result.slice(i, i + 1));
//         // }
//         console.log(result);
//     })

// });
       












   



module.exports = {
    getIphone, getForm, productIphone
};