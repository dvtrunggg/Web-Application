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
        res.render('./iphone/buy-iphone11', { title: 'Buy iphone11' });
    }
    if (form == 'buy-iphone11-pro')
    {
        res.render('./iphone/buy-iphone11-pro', { title: 'Buy ipad pro' });
    }
};

module.exports = {
    getIphone, getForm
};