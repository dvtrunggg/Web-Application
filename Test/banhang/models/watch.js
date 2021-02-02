var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    name : {type: String},
    type: {type: String},
    count : {type: Number},
    case_size : {type: String},
    connect : {type: String},
    band_size : {type: String},
    price : {type: Number},
    image : {type: String}
});

module.exports = mongoose.model('watch', schema); 