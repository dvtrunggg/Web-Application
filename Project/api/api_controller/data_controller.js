var ipad = require('../../models/ipad');
var iphone = require('../../models/iphone');
var watch = require('../../models/watch');
var mac = require('../../models/mac');


module.exports.getIpad = async function(req,res){

    let item_name = req.query.name;
    let item_color = req.query.color;
    let item_rom = req.query.rom;
    let item_more = req.query.more;

    let item_inch = req.query.inch;
    
    ipad.find({$and: [{name:item_name}, {color: item_color}, {rom: item_rom}, {more: item_more}, {inch: item_inch}]}).then(function(ipad)
    {
        res.json(ipad)
    })
}


module.exports.getIphone = async function(req,res){

    let item_name = req.query.name;
    let item_color = req.query.color;
    let item_rom = req.query.rom;
    
    iphone.find({$and: [{name:item_name}, {color: item_color}, {rom: item_rom}]}).then(function(iphone)
    {
        res.json(iphone)
    })
}

module.exports.getMac = async function(req,res){

    let item_name = req.query.name;
    let item_cpu = req.query.cpu;
    let item_color = req.query.color;
    let item_ram = req.query.ram;
    let item_rom = req.query.rom;

    let item_graphic = req.query.graphic;
    
    mac.find({$and: [{name:item_name}, {cpu: item_cpu}, {color: item_color}, {ram: item_ram}, {rom: item_rom}, {graphic: item_graphic}]}).then(function(mac)
    {
        res.json(mac);
    })
}

module.exports.getWatch = async function(req,res){

    let item_name = req.query.name;
    let item_case_size = req.query.case_size;
    let item_connectivity = req.query.connect;
    let item_type = req.query.type;
    let item_band_size = req.query.band_size;
    
    watch.find({$and: [{name:item_name}, {case_size: item_case_size}, {connect: item_connectivity}, {type: item_type}, {band_size: item_band_size}]}).then(function(watch)
    {
        res.json(watch)
    })
}

// module.exports.getIpadItem = async function(req,res){
//     var item = req.query.name;

//     console.log(item);
// }