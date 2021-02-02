

exports.home = function(req, res) {
    res.json({
        data : "Home -> Get"
    });
};

exports.listOfProduct = function(req, res){
    res.json([
        {
            id : 1,
            name : 'Product 1'
        },
        {
            id : 2,
            name : 'Product 2'
        }
        ]);
};