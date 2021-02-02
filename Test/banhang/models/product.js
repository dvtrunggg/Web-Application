//iphone

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    name : {type: String},
    count : {type: Number},
    type : {type: String},
    color: {type: String},
    rom : {type: String},
    price: {type: Number},
    image : {type: String}
});

module.exports = mongoose.model('iPhone', schema); 