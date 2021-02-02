const getWatch = (req, res) => {
    res.render('./watch/interface_watch', { title: 'Home' });
};

const getItem = (req, res) => {
    let form = req.params.name;
    
    if (form == 'buy-watch-hermes')
    {
        res.render('./watch/buy-watch-hermes/buy-watch-hermes', { title: 'buy-watch-hermes' });
    }
    if (form == 'buy-watch-nike')
    {
        res.render('./watch/buy-watch-nike/buy-watch-nike', { title: 'buy-watch-nike' });
    }
    if (form == 'buy-watch-series3')
    {
        res.render('./watch/buy-watch-series-3/buy-watch-series-3', { title: 'buy-watch-series-3' });
    }
    if (form == 'buy-watch-series5')
    {
        res.render('./watch/buy-watch-series-5/buy-watch-series-5', { title: 'buy-watch-series-5' });
    }
};

const getFormHermes = (req, res) => {
    let form = req.params.name;

    if (form == 'cart-1')
    {
        res.render('./watch/buy-watch-hermes/cart-1', { title: 'cart-1' });
    }

    if (form == 'cart-2')
    {
        res.render('./watch/buy-watch-hermes/cart-2', { title: 'cart-2' });
    }

    if (form == 'cart-3')
    {
        res.render('./watch/buy-watch-hermes/cart-3', { title: 'cart-3' });
    }

    if (form == 'cart-4')
    {
        res.render('./watch/buy-watch-hermes/cart-4', { title: 'cart-4' });
    }

    if (form == 'cart-5')
    {
        res.render('./watch/buy-watch-hermes/cart-5', { title: 'cart-5' });
    }
    
    if (form == 'cart-6')
    {
        res.render('./watch/buy-watch-hermes/cart-6', { title: 'cart-6' });
    }
}

const getFormNike = (req, res) => {
    let form = req.params.name;

    if (form == 'cart-1')
    {
        res.render('./watch/buy-watch-nike/cart-1', { title: 'cart-1' });
    }

    if (form == 'cart-2')
    {
        res.render('./watch/buy-watch-nike/cart-2', { title: 'cart-2' });
    }

    if (form == 'cart-3')
    {
        res.render('./watch/buy-watch-nike/cart-3', { title: 'cart-3' });
    }

    if (form == 'cart-4')
    {
        res.render('./watch/buy-watch-nike/cart-4', { title: 'cart-4' });
    }

    if (form == 'cart-5')
    {
        res.render('./watch/buy-watch-nike/cart-5', { title: 'cart-5' });
    }
    
    if (form == 'cart-6')
    {
        res.render('./watch/buy-watch-nike/cart-6', { title: 'cart-6' });
    }
}

const getFormSeries3 = (req, res) => {
    let form = req.params.name;

    if (form == 'cart-1')
    {
        res.render('./watch/buy-watch-series-3/cart-1', { title: 'cart-1' });
    }

    if (form == 'cart-2')
    {
        res.render('./watch/buy-watch-series-3/cart-2', { title: 'cart-2' });
    }

    if (form == 'cart-3')
    {
        res.render('./watch/buy-watch-series-3/cart-3', { title: 'cart-3' });
    }

    if (form == 'cart-4')
    {
        res.render('./watch/buy-watch-series-3/cart-4', { title: 'cart-4' });
    }

    if (form == 'cart-5')
    {
        res.render('./watch/buy-watch-series-3/cart-5', { title: 'cart-5' });
    }
    
    if (form == 'cart-6')
    {
        res.render('./watch/buy-watch-series-3/cart-6', { title: 'cart-6' });
    }
}

const getFormSeries5 = (req, res) => {
    let form = req.params.name;

    if (form == 'cart-1')
    {
        res.render('./watch/buy-watch-series-5/cart-1', { title: 'cart-1' });
    }

    if (form == 'cart-2')
    {
        res.render('./watch/buy-watch-series-5/cart-2', { title: 'cart-2' });
    }

    if (form == 'cart-3')
    {
        res.render('./watch/buy-watch-series-5/cart-3', { title: 'cart-3' });
    }

    if (form == 'cart-4')
    {
        res.render('./watch/buy-watch-series-5/cart-4', { title: 'cart-4' });
    }

    if (form == 'cart-5')
    {
        res.render('./watch/buy-watch-series-5/cart-5', { title: 'cart-5' });
    }
    
    if (form == 'cart-6')
    {
        res.render('./watch/buy-watch-series-5/cart-6', { title: 'cart-6' });
    }
}

module.exports = {
    getWatch, getItem, getFormHermes, getFormNike, getFormSeries3, getFormSeries5
};