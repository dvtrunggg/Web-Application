var bill = require('../models/bill');

const getAdmin = (req, res) => {
    //console.log(bill[3].name);

    bill.find().then(function(list){
    
        if(list.length == 0)
            throw new Error('Not found');

        res.render('./admin/index_admin', { bill: list });
        
    })
    .catch(() => {
        res.render('notfound');
    })

    //res.render('./admin/index_admin', { bill: bill[3] });
};




module.exports = {
    getAdmin
};