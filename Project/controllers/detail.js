var bill = require('../models/bill');

// const getDetail = (req, res) => {
//     //console.log(bill[3].name);

//     bill.find().then(function(list){
    
//         if(list.length == 0)
//             throw new Error('Not found');
//         res.render('./admin/detail_product', { bill: list[3] });
        
//     })
//     .catch(() => {
//         res.render('notfound')
//     })

//     //res.render('./admin/index_admin', { bill: bill[3] });
// };

const getDetailProduct = (req, res) => {
    //console.log(bill[3].name);
    var id = req.params.id;

    bill.find({_id:id}).then(function(list){
    
        if(list.length == 0)
            throw new Error('Not found');
        res.render('./admin/detail_product', { bill: list[0] });
        
    })
    .catch(() => {
        res.render('notfound')
    })

    //res.render('./admin/index_admin', { bill: bill[3] });
};


const changeProperty = async (req, res) => {
    //console.log(bill[3].name);
    var id = req.params.id;

    // console.log(req.body);

    if(req.body.status == 'Canceled')
    {
        var _bill = await bill.deleteOne({_id:id}).then(function(response)
        {
            console.log('Number deleted: ', response.deletedCount)
        })
    }
    else
    {
        var _bill = await bill.findOneAndUpdate({_id:id}, req.body, {new:true})
        //console.log(_bill)
    }

     res.redirect('/admin');
};

module.exports = {
    getDetailProduct, changeProperty
};