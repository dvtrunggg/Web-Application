const getIpad = (req, res) => {
    res.render('./ipad/interface_ipad', { title: 'Home' });
};

const getForm = (req, res) => {
    let form = req.params.name;
    
    if (form == 'buy-ipad')
    {
        res.render('./ipad/buy-ipad', { title: 'Buy ipad' });
    }
    if (form == 'buy-ipad-air')
    {
        res.render('./ipad/buy-ipad-air', { title: 'Buy ipad air' });
    }
    if (form == 'buy-ipad-mini')
    {
        res.render('./ipad/buy-ipad-mini', { title: 'Buy ipad mini' });
    }
    if (form == 'buy-ipad-pro')
    {
        res.render('./ipad/buy-ipad-pro', { title: 'Buy ipad pro' });
    }
};

module.exports = {
    getIpad, getForm
};