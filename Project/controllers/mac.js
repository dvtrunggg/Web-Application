const getMac = (req, res) => {
    res.render('./mac/interface_mac', { title: 'Home' });
};

const getItem = (req, res) => {
    let form = req.params.name;
    
    if (form == 'buy-mac-air')
    {
        res.render('./mac/buy-mac-air', { title: 'Buy mac air' });
    }
    if (form == 'buy-mac-pro13')
    {
        res.render('./mac/buy-mac-pro-13', { title: 'Buy mac pro 13' });
    }
    if (form == 'buy-mac-pro16')
    {
        res.render('./mac/buy-mac-pro-16', { title: 'Buy mac pro 16' });
    }
};

const getForm = (req, res) => {
    let form = req.params.name;
    
    if (form == 'cart-mac-air-1')
    {
        res.render('./mac/cart-mac-air-1', { title: 'Cart mac air 1' });
    }
    
    if (form == 'cart-mac-air-2')
    {
        res.render('./mac/cart-mac-air-2', { title: 'Cart mac air 2' });
    }
    if (form == 'cart-mac-air-3')
    {
        res.render('./mac/cart-mac-air-3', { title: 'Cart mac air 3' });
    }

    if (form == 'cart-mac-pro13-1')
    {
        res.render('./mac/cart-mac-pro-13-1', { title: 'Cart mac pro 13 - 1' });
    }

    if (form == 'cart-mac-pro13-2')
    {
        res.render('./mac/cart-mac-pro-13-2', { title: 'Cart mac pro 13 - 2' });
    }

    if (form == 'cart-mac-pro16-1')
    {
        res.render('./mac/cart-mac-pro-16-1', { title: 'Cart mac pro 16 - 1' });
    }
    
    if (form == 'cart-mac-pro16-2')
    {
        res.render('./mac/cart-mac-pro-16-2', { title: 'Cart mac pro 16 - 2' });
    }
};

module.exports = {
    getMac, getForm, getItem
};