var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    name : {type: String},
    inch : {type: String},
    more : {type: String},  // wifi or wifi + cellular
    color: {type: String},
    rom : {type: String},
    count : {type: Number},
    price: {type: Number},
    image : {type: String}

});

module.exports = mongoose.model('iPad', schema); 