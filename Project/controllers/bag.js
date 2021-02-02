var bill = require('../models/bill');

const getBag = (req, res) => {
    res.render('./bag/bag', { title: 'Bag' });
};

const postBill = (req, res) => {
    //console.log(req.body);
    bill.create(req.body);
};

module.exports = {
    getBag, postBill
};