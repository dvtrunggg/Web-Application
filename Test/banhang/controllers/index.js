const getHome = (req, res) => {
    res.render('index', { title: 'Home' });
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
    getHome, getSheet
};