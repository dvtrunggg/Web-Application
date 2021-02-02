var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    name : {type: String},
    count : {type: Number},

    cpu : {type: String},
    color: {type: String},
    ram : {type: String},  
    rom : {type: String},
    graphic : {type: String},
    price: {type: Number},
    image : {type: String}

});

module.exports = mongoose.model('mac', schema); 