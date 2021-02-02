const getBag = (req, res) => {
    res.render('./bag/bag1', { title: 'Bag' });
};

const getSheet = (req, res) => {
    var sheet = req.params.name;

    if (sheet == 'mac')
    {
        res.render('./mac/interface_mac', { title: 'Mac' });
    }
    
    if (sheet == 'watch')
    {
        res.render('./watch/interface_watch', { title: 'Watch' });
    }

    if (sheet == 'iphone')
    {
        res.render('./iphone/interface_iphone', { title: 'Iphone' });
    }

    if (sheet == 'ipad')
    {
        res.render('./ipad/interface_ipad', { title: 'Ipad' });
    }

    
};

module.exports = {
    getBag, getSheet
};